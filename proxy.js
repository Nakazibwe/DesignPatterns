var realServer = [
    {
        request: 'Jackson Ssenengo',
        resultSet: [
            'Technical Coach at Refactory',
            'Software Developer',
            'Software Engineer',
            'Software Design Enthusiast',
            'OOP software Designer',
        ]
    },
    {
        request: 'Ushindi. K. Gryc',
        resultSet: [
            'CEO Ushindi Investments',
            'Software Engineer',
            'Philanthropist',
            'Feminist',
            'Human Rights Activist',
            'Loves Enjoyments & Money',
            'Loves Soft Life',
            'Didnot come to this life to suffer',
        ]
    },
    {
        request: 'Rogers',
        resultSet: [
            'Bootcamp Student',
            'Junior Software Dev',
            'OOP Software Designer',
            'First Year Software Engineer',
        ]
    },
    {
        request: 'Sabiiti Raymond',
        resultSet: [
            'Technical Coach at RefactoryStudent at refactorySoftware Developer',
            'Software Engineer',
            'Software developer',
            'web designer',
        ]
    },
    {
        request: 'Josh',
        resultSet: [
            'Refactory Bootcamper',
            'Catalyst Student',
            'Data Analyst',
            'OOP software Designer',
        ]
    },
];
var proxyServer = [];
// Heavy weight class.
var Google = /** @class */ (function () {
    function Google() {
    }
    Google.prototype.search = function (request) {
        for (var _i = 0, realServer_1 = realServer; _i < realServer_1.length; _i++) {
            var result = realServer_1[_i];
            if (result.request == request) {
                for (var _a = 0, proxyServer_1 = proxyServer; _a < proxyServer_1.length; _a++) {
                    var item = proxyServer_1[_a];
                    if (item.request == request) {
                        continue;
                    }
                    proxyServer.push(result);
                    break;
                }
                console.log('results from real server');
                return result;
            }
            return {
                request: request,
                resultSet: [
                    'No results found',
                ]
            };
        }
    };
    return Google;
}());
// Proxy class.
var GoogleProxy = /** @class */ (function () {
    function GoogleProxy(google) {
        this.google = google;
    }
    GoogleProxy.prototype.search = function (request) {
        for (var _i = 0, proxyServer_2 = proxyServer; _i < proxyServer_2.length; _i++) {
            var result = proxyServer_2[_i];
            if (result.request == request) {
                return result;
            }
        }
        console.log('results from proxy server');
        return this.google.search(request);
    };
    return GoogleProxy;
}());
// Client
var Chrome = /** @class */ (function () {
    function Chrome(searchEngine) {
        this.searchEngine = searchEngine;
    }
    Chrome.prototype.request = function (requestString) {
        return this.searchEngine.search(requestString);
    };
    return Chrome;
}());
// instattions
var mainsearch = new Google();
var proxy1 = new GoogleProxy(mainsearch);
var web = new Chrome(proxy1);
console.log(web.request('Ushindi. K. Gryc'));
