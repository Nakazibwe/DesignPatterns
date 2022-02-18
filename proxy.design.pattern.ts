interface Result{
    request:string;
    resultSet:Array<String>
}
const realServer:Array<Results> = [
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
];
const proxyServer:Array<Results> = [];
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
