/* eslint-disable class-methods-use-this */
/* eslint-disable no-continue */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-unreachable-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable eqeqeq */
interface Result {
    request:string;
    resultSet: Array<String>
}

const realServer: Array<Result> = [
  {
    request: 'Jackson Ssenengo',
    resultSet: [
      'Technical Coach at Refactory',
      'Software Developer',
      'Software Engineer',
      'Software Design Enthusiast',
      'OOP software Designer',
    ],
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
    ],
  },
  {
    request: 'Rogers',
    resultSet: [
      'Bootcamp Student',
      'Junior Software Dev',
      'OOP Software Designer',
      'First Year Software Engineer',
    ],
  },
  {
    request: 'Sabiiti Raymond',
    resultSet: [
      'Technical Coach at RefactoryStudent at refactorySoftware Developer',
      'Software Engineer',
      'Software developer',
      'web designer',
    ],
  },
  {
    request: 'Josh',
    resultSet: [
      'Refactory Bootcamper',
      'Catalyst Student',
      'Data Analyst',
      'OOP software Designer',
    ],
  },
];
const proxyServer: Array<Result> = [];

/*
    Caching requests
        - The Search Engine Analogy:
            - SearchEngine: Should be subject Abstraction
                - Should have an abstract method search()

            - Google: Should be the real Search Engine
            - GooleProxy: Should be the proxy Search Engine
                - Should have a reference to the search engine

            - WebBrowser: Should be the client Abstraction
                - Should have a reference to the search engine
                - Should have an abstract method request()

            - Firefox: Should be one of the concrete clients

*/
// Search ENGINE Interface.
interface SearchEngine{
    search(request:string):Result;
}
// Heavy weight class.
class Google implements SearchEngine {
  search(request: string): Result {
    for (const result of realServer) {
      if (result.request == request) {
        for (const item of proxyServer) {
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
        request,
        resultSet: [
          'No results found',
        ],
      };
    }
  }
}
// Proxy class.
class GoogleProxy implements SearchEngine {
  private google :Google;

  constructor(google:Google) {
    this.google = google;
  }

  search(request: string): Result {
    for (const result of proxyServer) {
      if (result.request == request) {
        return result;
      }
    }
    console.log('results from proxy server');
    return this.google.search(request);
  }
}

interface WebBrowser{
    request(requestString:string):Result;
}

// Client
class Chrome implements WebBrowser {
  private searchEngine:SearchEngine;

  constructor(searchEngine:SearchEngine) {
    this.searchEngine = searchEngine;
  }

  request(requestString:string):Result {
    return this.searchEngine.search(requestString);
  }
}
// instattions
const mainsearch = new Google();
const proxy1 = new GoogleProxy(mainsearch);
const web = new Chrome(proxy1);
console.log(web.request('Ushindi. K. Gryc'));
