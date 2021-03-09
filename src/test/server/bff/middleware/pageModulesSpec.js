import proxyquire, { noCallThru } from 'proxyquire';
noCallThru();

const getModulesStub = sinon.stub();
const getThemeModuleForQueryStub = sinon.stub();
const processModulesStub = sinon.stub();
const loggerStub = { error: sinon.stub() };
const nextSpy = sinon.spy();

const pageModulesMiddleware = proxyquire('../../../../app/server/bff/middleware/pageModules', {
    '../helper/processModules': processModulesStub,
    '../helper/getThemeModuleForQuery': getThemeModuleForQueryStub,
    '../../../../logger': loggerStub,
    '../api': {
        getModules: getModulesStub
    }
}).default;

const requestMock = () => ({
    query: {}
});

const processModulesResponse = {
    hamburgerNavigation: { items: [] },
    headerNavigation: { items: [] }
};

const getModulesResponseMock = () => ({
    headernavigation: [],
    hamburgernavigation: [],
    footer: {},
    mustread: [],
    promoted: { items: [], title: 'KICKSTART 2017' },
    hero: null,
    homehero: [],
    theme: {
        id: 'NOW-32655',
        url: '/modules/hometheme',
        themeName: 'Royal wedding',
        moduleName: 'hometheme',
        themeAlignment: 'center',
        pageDateCreated: '2017-02-07T01:27:43.00Z',
        moduleManualContent: { data: [], totalCount: 0 }
    }
});

const getModulesDefaultArgs = ['hamburgernavigation', 'headernavigation', 'featuredbrand', 'listingcategories'];

function resetStubsAndSpies() {
    getModulesStub.reset();
    getThemeModuleForQueryStub.reset();
    processModulesStub.reset();
    loggerStub.error.reset();
    nextSpy.reset;
}

describe('pageModulesMiddleware', () => {
    describe('when there is module data returned from getModules', () => {
        const req = requestMock();
        const res = {};
        const themeModuleNameMock = 'theme';
        const moduleResposeMock = getModulesResponseMock();
        const modulesMock = [...getModulesDefaultArgs, themeModuleNameMock];

        beforeEach(() => {
            getThemeModuleForQueryStub.withArgs(req.query).returns(themeModuleNameMock);
            getModulesStub.withArgs(modulesMock, sinon.match.func).returns(moduleResposeMock);
            processModulesStub.withArgs(moduleResposeMock).returns(processModulesResponse);
        });

        afterEach(() => {
            resetStubsAndSpies();
        });

        it('should call getThemeModuleForQuery with the request query', done => {
            pageModulesMiddleware(req, res, nextSpy)
                .then(() => {
                    expect(getThemeModuleForQueryStub).to.be.calledWith(req.query);
                    done();
                })
                .catch(done);
        });

        it('should call getModules with the hard-coded arguments and the value returned from getThemeModuleForQuery', done => {
            pageModulesMiddleware(req, res, nextSpy)
                .then(() => {
                    expect(getModulesStub).to.be.calledWith(modulesMock);
                    done();
                })
                .catch(done);
        });

        it('should call processModules with the response from getModules & the response from getThemeModuleForQuery', done => {
            pageModulesMiddleware(req, res, nextSpy)
                .then(() => {
                    expect(processModulesStub).to.be.calledWith(moduleResposeMock, themeModuleNameMock);
                    done();
                })
                .catch(done);
        });

        it('adds the modules to the response body', done => {
            pageModulesMiddleware(req, res, nextSpy)
                .then(() => {
                    expect(res.body).to.deep.equal({
                        ...processModulesResponse
                    });
                    done();
                })
                .catch(done);
        });

        it('calls the next middleware in the chain', done => {
            pageModulesMiddleware(req, res, nextSpy)
                .then(() => {
                    expect(nextSpy).to.have.been.called;
                    done();
                })
                .catch(done);
        });
    });
    describe('error handling', () => {
        describe('when getThemeModuleForQuery throws an error', () => {
            let req;
            const res = {};
            const exception = new Error('getThemeModule error');

            beforeEach(() => {
                req = requestMock();
                getThemeModuleForQueryStub.throws(exception);
            });

            afterEach(() => {
                resetStubsAndSpies();
            });

            it('calls next with the error', done => {
                pageModulesMiddleware(req, res, nextSpy)
                    .then(() => {
                        expect(nextSpy.calledWith(exception)).to.be.true;
                        done();
                    })
                    .catch(done);
            });

            it('should not call any subsequent methods', done => {
                pageModulesMiddleware(req, res, nextSpy)
                    .then(() => {
                        expect(getModulesStub).to.not.be.called;
                        expect(processModulesStub).to.not.be.called;
                        done();
                    })
                    .catch(done);
            });
        });
        describe('when getModules response is empty', () => {
            let req;
            const res = {};
            const mockTheme = 'mocktheme';
            const moduleResponse = {};

            beforeEach(() => {
                req = requestMock();
                getThemeModuleForQueryStub.returns(mockTheme);
                getModulesStub.resolves(moduleResponse);
            });

            afterEach(() => {
                resetStubsAndSpies();
            });

            it('should call processModules with the empty response', done => {
                pageModulesMiddleware(req, res, nextSpy)
                    .then(() => {
                        expect(processModulesStub).to.be.calledWith(moduleResponse, mockTheme);
                        done();
                    })
                    .catch(done);
            });
        });

        describe('when processModules throws an error', () => {
            let req;
            const res = {};
            const exception = new Error('processModulesStub error');

            beforeEach(() => {
                req = requestMock();
                processModulesStub.throws(exception);
            });

            afterEach(() => {
                resetStubsAndSpies();
            });

            it('calls next with the error', done => {
                pageModulesMiddleware(req, res, nextSpy)
                    .then(() => {
                        expect(nextSpy.calledWith(exception)).to.be.true;
                        done();
                    })
                    .catch(done);
            });
        });
    });
});
