var rawData = {
    "query": {
    "count": 381,
        "created": "2017-01-29T14:55:54Z",
        "lang": "pl-PL",
        "diagnostics": {
        "url": [
            {
                "execution-start-time": "1",
                "execution-stop-time": "4",
                "execution-time": "3",
                "content": "http://datatables.org/alltables.env"
            },
            {
                "execution-start-time": "9",
                "execution-stop-time": "10",
                "execution-time": "1",
                "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"
            },
            {
                "execution-start-time": "27",
                "execution-stop-time": "49",
                "execution-time": "22",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE"
            },
            {
                "execution-start-time": "28",
                "execution-stop-time": "51",
                "execution-time": "23",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT"
            },
            {
                "execution-start-time": "33",
                "execution-stop-time": "54",
                "execution-time": "21",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO"
            },
            {
                "execution-start-time": "53",
                "execution-stop-time": "75",
                "execution-time": "22",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE"
            },
            {
                "execution-start-time": "56",
                "execution-stop-time": "79",
                "execution-time": "23",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT"
            },
            {
                "execution-start-time": "58",
                "execution-stop-time": "80",
                "execution-time": "22",
                "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO"
            }
        ],
            "publiclyCallable": "true",
            "cache": [
            {
                "execution-start-time": "23",
                "execution-stop-time": "26",
                "execution-time": "3",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "d138ad687536e8eddad55e3e8dbf1c6f"
            },
            {
                "execution-start-time": "23",
                "execution-stop-time": "27",
                "execution-time": "4",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "c86146a43cef66179299f1678131bdd5"
            },
            {
                "execution-start-time": "24",
                "execution-stop-time": "31",
                "execution-time": "7",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "a35a5bd1a972782328656185797c0a4c"
            },
            {
                "execution-start-time": "51",
                "execution-stop-time": "52",
                "execution-time": "1",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "3288823e65182257df65e7871aa28d5a"
            },
            {
                "execution-start-time": "55",
                "execution-stop-time": "55",
                "execution-time": "0",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "12f9ed28fe62c15b05b634360b2f6ccb"
            },
            {
                "execution-start-time": "56",
                "execution-stop-time": "57",
                "execution-time": "1",
                "method": "GET",
                "type": "MEMCACHED",
                "content": "d0f1a220b126d43d7ca150245362f12a"
            }
        ],
            "query": [
            {
                "execution-start-time": "27",
                "execution-stop-time": "51",
                "execution-time": "24",
                "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE]}",
                "content": "select * from csv(0,1) where url=@url"
            },
            {
                "execution-start-time": "27",
                "execution-stop-time": "55",
                "execution-time": "28",
                "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT]}",
                "content": "select * from csv(0,1) where url=@url"
            },
            {
                "execution-start-time": "32",
                "execution-stop-time": "56",
                "execution-time": "24",
                "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO]}",
                "content": "select * from csv(0,1) where url=@url"
            },
            {
                "execution-start-time": "52",
                "execution-stop-time": "77",
                "execution-time": "25",
                "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE]}",
                "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
            },
            {
                "execution-start-time": "56",
                "execution-stop-time": "81",
                "execution-time": "25",
                "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT]}",
                "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
            },
            {
                "execution-start-time": "58",
                "execution-stop-time": "82",
                "execution-time": "24",
                "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO]}",
                "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
            }
        ],
            "javascript": [
            {
                "execution-start-time": "22",
                "execution-stop-time": "1671",
                "execution-time": "1648",
                "instructions-used": "16120572",
                "table-name": "yahoo.finance.historicaldata"
            },
            {
                "execution-start-time": "22",
                "execution-stop-time": "1727",
                "execution-time": "1704",
                "instructions-used": "18475865",
                "table-name": "yahoo.finance.historicaldata"
            },
            {
                "execution-start-time": "23",
                "execution-stop-time": "1733",
                "execution-time": "1710",
                "instructions-used": "18762366",
                "table-name": "yahoo.finance.historicaldata"
            }
        ],
            "user-time": "1737",
            "service-time": "153",
            "build-version": "2.0.92"
    },
    "results": {
        "quote": [
            {
                "Symbol": "CSCO",
                "Date": "2016-07-20",
                "Open": "30.040001",
                "High": "30.690001",
                "Low": "29.98",
                "Close": "30.629999",
                "Volume": "50168800",
                "Adj_Close": "30.120305"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-19",
                "Open": "29.91",
                "High": "30.01",
                "Low": "29.77",
                "Close": "29.92",
                "Volume": "18516000",
                "Adj_Close": "29.42212"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-18",
                "Open": "29.75",
                "High": "30.00",
                "Low": "29.74",
                "Close": "29.91",
                "Volume": "17484900",
                "Adj_Close": "29.412287"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-15",
                "Open": "29.93",
                "High": "29.950001",
                "Low": "29.66",
                "Close": "29.82",
                "Volume": "17800400",
                "Adj_Close": "29.323784"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-14",
                "Open": "29.84",
                "High": "29.99",
                "Low": "29.639999",
                "Close": "29.76",
                "Volume": "19332200",
                "Adj_Close": "29.264783"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-13",
                "Open": "29.719999",
                "High": "29.83",
                "Low": "29.58",
                "Close": "29.75",
                "Volume": "18038100",
                "Adj_Close": "29.254949"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-12",
                "Open": "29.719999",
                "High": "29.74",
                "Low": "29.52",
                "Close": "29.610001",
                "Volume": "22157500",
                "Adj_Close": "29.117279"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-11",
                "Open": "29.34",
                "High": "29.700001",
                "Low": "29.26",
                "Close": "29.43",
                "Volume": "22045200",
                "Adj_Close": "28.940274"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-08",
                "Open": "28.91",
                "High": "29.280001",
                "Low": "28.879999",
                "Close": "29.26",
                "Volume": "24647400",
                "Adj_Close": "28.773103"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-07",
                "Open": "28.719999",
                "High": "28.90",
                "Low": "28.610001",
                "Close": "28.74",
                "Volume": "17394900",
                "Adj_Close": "28.261756"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-06",
                "Open": "28.450001",
                "High": "28.77",
                "Low": "28.17",
                "Close": "28.719999",
                "Volume": "24844000",
                "Adj_Close": "28.242088"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-05",
                "Open": "28.23",
                "High": "28.620001",
                "Low": "28.219999",
                "Close": "28.33",
                "Volume": "22116900",
                "Adj_Close": "27.858578"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-07-01",
                "Open": "28.780001",
                "High": "28.93",
                "Low": "28.59",
                "Close": "28.799999",
                "Volume": "20901300",
                "Adj_Close": "28.065083"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-30",
                "Open": "28.379999",
                "High": "28.690001",
                "Low": "28.07",
                "Close": "28.690001",
                "Volume": "25184400",
                "Adj_Close": "27.957891"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-29",
                "Open": "28.129999",
                "High": "28.33",
                "Low": "27.90",
                "Close": "28.26",
                "Volume": "25593000",
                "Adj_Close": "27.538863"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-28",
                "Open": "27.549999",
                "High": "27.85",
                "Low": "27.50",
                "Close": "27.790001",
                "Volume": "24646900",
                "Adj_Close": "27.080857"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-27",
                "Open": "27.48",
                "High": "27.549999",
                "Low": "27.129999",
                "Close": "27.309999",
                "Volume": "29973100",
                "Adj_Close": "26.613105"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-24",
                "Open": "28.16",
                "High": "28.57",
                "Low": "27.700001",
                "Close": "27.75",
                "Volume": "44408900",
                "Adj_Close": "27.041877"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-23",
                "Open": "29.030001",
                "High": "29.23",
                "Low": "28.959999",
                "Close": "29.219999",
                "Volume": "19415600",
                "Adj_Close": "28.474365"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-22",
                "Open": "28.870001",
                "High": "29.08",
                "Low": "28.68",
                "Close": "28.719999",
                "Volume": "18273300",
                "Adj_Close": "27.987124"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-21",
                "Open": "28.969999",
                "High": "29.00",
                "Low": "28.73",
                "Close": "28.77",
                "Volume": "19098600",
                "Adj_Close": "28.035849"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-20",
                "Open": "29.040001",
                "High": "29.219999",
                "Low": "28.780001",
                "Close": "28.799999",
                "Volume": "22100800",
                "Adj_Close": "28.065083"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-17",
                "Open": "28.879999",
                "High": "29.00",
                "Low": "28.690001",
                "Close": "28.950001",
                "Volume": "32333500",
                "Adj_Close": "28.211256"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-16",
                "Open": "28.379999",
                "High": "28.92",
                "Low": "28.370001",
                "Close": "28.870001",
                "Volume": "17504100",
                "Adj_Close": "28.133298"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-15",
                "Open": "28.49",
                "High": "28.860001",
                "Low": "28.41",
                "Close": "28.65",
                "Volume": "30738600",
                "Adj_Close": "27.918911"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-14",
                "Open": "28.66",
                "High": "29.00",
                "Low": "28.629999",
                "Close": "28.959999",
                "Volume": "19279700",
                "Adj_Close": "28.221"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-13",
                "Open": "28.969999",
                "High": "29.190001",
                "Low": "28.82",
                "Close": "28.84",
                "Volume": "17137000",
                "Adj_Close": "28.104063"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-10",
                "Open": "28.790001",
                "High": "29.030001",
                "Low": "28.77",
                "Close": "29.030001",
                "Volume": "18244200",
                "Adj_Close": "28.289215"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-09",
                "Open": "28.969999",
                "High": "29.190001",
                "Low": "28.83",
                "Close": "29.139999",
                "Volume": "18349900",
                "Adj_Close": "28.396407"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-08",
                "Open": "29.09",
                "High": "29.27",
                "Low": "29.059999",
                "Close": "29.139999",
                "Volume": "17772900",
                "Adj_Close": "28.396407"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-07",
                "Open": "28.90",
                "High": "29.35",
                "Low": "28.82",
                "Close": "29.07",
                "Volume": "21566600",
                "Adj_Close": "28.328193"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-06",
                "Open": "29.07",
                "High": "29.41",
                "Low": "29.059999",
                "Close": "29.10",
                "Volume": "16167100",
                "Adj_Close": "28.357428"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-03",
                "Open": "29.129999",
                "High": "29.209999",
                "Low": "28.90",
                "Close": "29.129999",
                "Volume": "18677700",
                "Adj_Close": "28.386662"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-02",
                "Open": "28.98",
                "High": "29.15",
                "Low": "28.92",
                "Close": "29.08",
                "Volume": "19538200",
                "Adj_Close": "28.337938"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-06-01",
                "Open": "28.84",
                "High": "29.040001",
                "Low": "28.799999",
                "Close": "28.90",
                "Volume": "22268700",
                "Adj_Close": "28.162531"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-31",
                "Open": "28.799999",
                "High": "29.08",
                "Low": "28.76",
                "Close": "29.049999",
                "Volume": "28606300",
                "Adj_Close": "28.308703"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-27",
                "Open": "28.950001",
                "High": "29.040001",
                "Low": "28.790001",
                "Close": "28.92",
                "Volume": "16642900",
                "Adj_Close": "28.182021"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-26",
                "Open": "28.860001",
                "High": "29.040001",
                "Low": "28.799999",
                "Close": "28.90",
                "Volume": "19366300",
                "Adj_Close": "28.162531"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-25",
                "Open": "28.58",
                "High": "29.00",
                "Low": "28.52",
                "Close": "28.92",
                "Volume": "25696800",
                "Adj_Close": "28.182021"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-24",
                "Open": "28.01",
                "High": "28.58",
                "Low": "28.01",
                "Close": "28.469999",
                "Volume": "26514800",
                "Adj_Close": "27.743504"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-23",
                "Open": "27.780001",
                "High": "28.25",
                "Low": "27.780001",
                "Close": "27.940001",
                "Volume": "19850000",
                "Adj_Close": "27.227029"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-20",
                "Open": "27.629999",
                "High": "28.15",
                "Low": "27.620001",
                "Close": "27.969999",
                "Volume": "32703000",
                "Adj_Close": "27.256263"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-19",
                "Open": "27.99",
                "High": "28.290001",
                "Low": "27.40",
                "Close": "27.57",
                "Volume": "50174600",
                "Adj_Close": "26.86647"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-18",
                "Open": "26.610001",
                "High": "26.959999",
                "Low": "26.49",
                "Close": "26.719999",
                "Volume": "32345500",
                "Adj_Close": "26.03816"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-17",
                "Open": "26.90",
                "High": "27.059999",
                "Low": "26.549999",
                "Close": "26.65",
                "Volume": "25921300",
                "Adj_Close": "25.969947"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-16",
                "Open": "26.57",
                "High": "27.120001",
                "Low": "26.559999",
                "Close": "26.969999",
                "Volume": "20885900",
                "Adj_Close": "26.28178"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-13",
                "Open": "26.549999",
                "High": "26.889999",
                "Low": "26.459999",
                "Close": "26.530001",
                "Volume": "20865100",
                "Adj_Close": "25.85301"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-12",
                "Open": "26.809999",
                "High": "26.809999",
                "Low": "26.41",
                "Close": "26.67",
                "Volume": "19681900",
                "Adj_Close": "25.989437"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-11",
                "Open": "27.09",
                "High": "27.110001",
                "Low": "26.68",
                "Close": "26.700001",
                "Volume": "19326100",
                "Adj_Close": "26.018672"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-10",
                "Open": "26.67",
                "High": "27.10",
                "Low": "26.51",
                "Close": "27.030001",
                "Volume": "22642500",
                "Adj_Close": "26.340251"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-09",
                "Open": "26.52",
                "High": "26.68",
                "Low": "26.389999",
                "Close": "26.51",
                "Volume": "16990400",
                "Adj_Close": "25.83352"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-06",
                "Open": "26.190001",
                "High": "26.540001",
                "Low": "25.809999",
                "Close": "26.530001",
                "Volume": "25572600",
                "Adj_Close": "25.85301"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-05",
                "Open": "26.459999",
                "High": "26.57",
                "Low": "26.209999",
                "Close": "26.209999",
                "Volume": "23082200",
                "Adj_Close": "25.541174"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-04",
                "Open": "26.799999",
                "High": "26.82",
                "Low": "26.280001",
                "Close": "26.440001",
                "Volume": "32850800",
                "Adj_Close": "25.765306"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-03",
                "Open": "27.16",
                "High": "27.190001",
                "Low": "26.610001",
                "Close": "26.860001",
                "Volume": "35319600",
                "Adj_Close": "26.174589"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-05-02",
                "Open": "27.48",
                "High": "27.52",
                "Low": "27.200001",
                "Close": "27.370001",
                "Volume": "27361700",
                "Adj_Close": "26.671575"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-29",
                "Open": "27.719999",
                "High": "27.83",
                "Low": "27.139999",
                "Close": "27.49",
                "Volume": "33890100",
                "Adj_Close": "26.788512"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-28",
                "Open": "28.450001",
                "High": "28.59",
                "Low": "27.790001",
                "Close": "27.959999",
                "Volume": "29616200",
                "Adj_Close": "27.246517"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-27",
                "Open": "28.440001",
                "High": "28.65",
                "Low": "28.309999",
                "Close": "28.639999",
                "Volume": "20931000",
                "Adj_Close": "27.909166"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-26",
                "Open": "28.27",
                "High": "28.49",
                "Low": "28.219999",
                "Close": "28.450001",
                "Volume": "18151500",
                "Adj_Close": "27.724015"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-25",
                "Open": "28.110001",
                "High": "28.280001",
                "Low": "27.98",
                "Close": "28.23",
                "Volume": "16434800",
                "Adj_Close": "27.509628"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-22",
                "Open": "28.299999",
                "High": "28.549999",
                "Low": "28.07",
                "Close": "28.15",
                "Volume": "23147600",
                "Adj_Close": "27.43167"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-21",
                "Open": "28.42",
                "High": "28.51",
                "Low": "28.16",
                "Close": "28.24",
                "Volume": "17339900",
                "Adj_Close": "27.519373"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-20",
                "Open": "28.40",
                "High": "28.68",
                "Low": "28.26",
                "Close": "28.440001",
                "Volume": "19937800",
                "Adj_Close": "27.71427"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-19",
                "Open": "28.33",
                "High": "28.440001",
                "Low": "28.200001",
                "Close": "28.33",
                "Volume": "20307700",
                "Adj_Close": "27.607077"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-18",
                "Open": "27.90",
                "High": "28.25",
                "Low": "27.799999",
                "Close": "28.190001",
                "Volume": "15742200",
                "Adj_Close": "27.47065"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-15",
                "Open": "28.10",
                "High": "28.129999",
                "Low": "27.73",
                "Close": "27.90",
                "Volume": "23804400",
                "Adj_Close": "27.188049"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-14",
                "Open": "28.379999",
                "High": "28.40",
                "Low": "28.10",
                "Close": "28.25",
                "Volume": "15049100",
                "Adj_Close": "27.529118"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-13",
                "Open": "27.959999",
                "High": "28.280001",
                "Low": "27.719999",
                "Close": "28.23",
                "Volume": "25433300",
                "Adj_Close": "27.509628"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-12",
                "Open": "27.139999",
                "High": "27.66",
                "Low": "26.950001",
                "Close": "27.639999",
                "Volume": "27741400",
                "Adj_Close": "26.934684"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-11",
                "Open": "27.879999",
                "High": "28.18",
                "Low": "27.610001",
                "Close": "27.620001",
                "Volume": "18762900",
                "Adj_Close": "26.915195"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-08",
                "Open": "27.709999",
                "High": "27.950001",
                "Low": "27.58",
                "Close": "27.690001",
                "Volume": "14495600",
                "Adj_Close": "26.983409"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-07",
                "Open": "27.90",
                "High": "27.90",
                "Low": "27.530001",
                "Close": "27.60",
                "Volume": "17016800",
                "Adj_Close": "26.895705"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-06",
                "Open": "27.700001",
                "High": "28.040001",
                "Low": "27.620001",
                "Close": "28.00",
                "Volume": "20395800",
                "Adj_Close": "27.285498"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-05",
                "Open": "27.639999",
                "High": "27.83",
                "Low": "27.459999",
                "Close": "27.58",
                "Volume": "24245700",
                "Adj_Close": "26.876215"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-04",
                "Open": "28.370001",
                "High": "28.41",
                "Low": "28.01",
                "Close": "28.139999",
                "Volume": "17890000",
                "Adj_Close": "27.421925"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-04-01",
                "Open": "28.299999",
                "High": "28.700001",
                "Low": "28.120001",
                "Close": "28.690001",
                "Volume": "23026400",
                "Adj_Close": "27.704527"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-31",
                "Open": "28.530001",
                "High": "28.67",
                "Low": "28.35",
                "Close": "28.469999",
                "Volume": "18377600",
                "Adj_Close": "27.492083"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-30",
                "Open": "28.34",
                "High": "28.68",
                "Low": "28.26",
                "Close": "28.459999",
                "Volume": "19390200",
                "Adj_Close": "27.482426"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-29",
                "Open": "27.870001",
                "High": "28.190001",
                "Low": "27.690001",
                "Close": "28.10",
                "Volume": "17139300",
                "Adj_Close": "27.134793"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-28",
                "Open": "27.99",
                "High": "28.030001",
                "Low": "27.790001",
                "Close": "27.90",
                "Volume": "12785900",
                "Adj_Close": "26.941662"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-24",
                "Open": "27.77",
                "High": "28.01",
                "Low": "27.59",
                "Close": "27.959999",
                "Volume": "15871900",
                "Adj_Close": "26.9996"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-23",
                "Open": "28.26",
                "High": "28.280001",
                "Low": "27.73",
                "Close": "27.83",
                "Volume": "19217500",
                "Adj_Close": "26.874067"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-22",
                "Open": "28.200001",
                "High": "28.379999",
                "Low": "27.90",
                "Close": "28.280001",
                "Volume": "23599300",
                "Adj_Close": "27.30861"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-21",
                "Open": "28.10",
                "High": "28.35",
                "Low": "28.040001",
                "Close": "28.190001",
                "Volume": "23799200",
                "Adj_Close": "27.221702"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-18",
                "Open": "28.23",
                "High": "28.379999",
                "Low": "27.969999",
                "Close": "28.33",
                "Volume": "43132400",
                "Adj_Close": "27.356892"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-17",
                "Open": "27.92",
                "High": "28.440001",
                "Low": "27.870001",
                "Close": "28.190001",
                "Volume": "28501900",
                "Adj_Close": "27.221702"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-16",
                "Open": "27.52",
                "High": "27.950001",
                "Low": "27.51",
                "Close": "27.879999",
                "Volume": "19087800",
                "Adj_Close": "26.922348"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-15",
                "Open": "27.48",
                "High": "27.690001",
                "Low": "27.450001",
                "Close": "27.66",
                "Volume": "16917200",
                "Adj_Close": "26.709906"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-14",
                "Open": "27.82",
                "High": "27.860001",
                "Low": "27.60",
                "Close": "27.700001",
                "Volume": "18291700",
                "Adj_Close": "26.748533"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-11",
                "Open": "27.82",
                "High": "27.91",
                "Low": "27.67",
                "Close": "27.860001",
                "Volume": "21873100",
                "Adj_Close": "26.903037"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-10",
                "Open": "27.76",
                "High": "27.98",
                "Low": "27.030001",
                "Close": "27.379999",
                "Volume": "33327300",
                "Adj_Close": "26.439523"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-09",
                "Open": "27.24",
                "High": "27.799999",
                "Low": "27.120001",
                "Close": "27.610001",
                "Volume": "38890200",
                "Adj_Close": "26.661624"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-08",
                "Open": "26.969999",
                "High": "27.299999",
                "Low": "26.690001",
                "Close": "27.049999",
                "Volume": "23821300",
                "Adj_Close": "26.120858"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-07",
                "Open": "26.58",
                "High": "27.18",
                "Low": "26.33",
                "Close": "27.139999",
                "Volume": "21500100",
                "Adj_Close": "26.207767"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-04",
                "Open": "26.92",
                "High": "26.959999",
                "Low": "26.67",
                "Close": "26.799999",
                "Volume": "19429900",
                "Adj_Close": "25.879445"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-03",
                "Open": "26.950001",
                "High": "26.969999",
                "Low": "26.59",
                "Close": "26.870001",
                "Volume": "19002200",
                "Adj_Close": "25.947043"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-02",
                "Open": "26.799999",
                "High": "26.91",
                "Low": "26.60",
                "Close": "26.90",
                "Volume": "19020100",
                "Adj_Close": "25.976011"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-03-01",
                "Open": "26.450001",
                "High": "26.93",
                "Low": "26.24",
                "Close": "26.83",
                "Volume": "25245400",
                "Adj_Close": "25.908416"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-29",
                "Open": "26.42",
                "High": "26.65",
                "Low": "26.15",
                "Close": "26.18",
                "Volume": "24763100",
                "Adj_Close": "25.280743"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-26",
                "Open": "26.799999",
                "High": "26.85",
                "Low": "26.32",
                "Close": "26.41",
                "Volume": "18113000",
                "Adj_Close": "25.502842"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-25",
                "Open": "26.49",
                "High": "26.60",
                "Low": "26.200001",
                "Close": "26.60",
                "Volume": "18655100",
                "Adj_Close": "25.686316"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-24",
                "Open": "25.889999",
                "High": "26.33",
                "Low": "25.65",
                "Close": "26.32",
                "Volume": "22960800",
                "Adj_Close": "25.415933"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-23",
                "Open": "26.540001",
                "High": "26.540001",
                "Low": "26.059999",
                "Close": "26.120001",
                "Volume": "28097500",
                "Adj_Close": "25.222804"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-22",
                "Open": "26.870001",
                "High": "26.91",
                "Low": "26.42",
                "Close": "26.629999",
                "Volume": "24608100",
                "Adj_Close": "25.715285"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-19",
                "Open": "26.27",
                "High": "26.559999",
                "Low": "26.25",
                "Close": "26.549999",
                "Volume": "28791700",
                "Adj_Close": "25.638033"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-18",
                "Open": "26.440001",
                "High": "26.58",
                "Low": "26.280001",
                "Close": "26.43",
                "Volume": "31288200",
                "Adj_Close": "25.522156"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-17",
                "Open": "26.17",
                "High": "26.59",
                "Low": "26.08",
                "Close": "26.459999",
                "Volume": "36904700",
                "Adj_Close": "25.551124"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-16",
                "Open": "25.27",
                "High": "25.98",
                "Low": "25.190001",
                "Close": "25.84",
                "Volume": "40401700",
                "Adj_Close": "24.952421"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-12",
                "Open": "24.889999",
                "High": "25.360001",
                "Low": "24.52",
                "Close": "25.110001",
                "Volume": "49753600",
                "Adj_Close": "24.247497"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-11",
                "Open": "24.09",
                "High": "24.969999",
                "Low": "24.09",
                "Close": "24.68",
                "Volume": "92696000",
                "Adj_Close": "23.832266"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-10",
                "Open": "23.129999",
                "High": "23.129999",
                "Low": "22.459999",
                "Close": "22.51",
                "Volume": "36896100",
                "Adj_Close": "21.736804"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-09",
                "Open": "22.60",
                "High": "22.860001",
                "Low": "22.530001",
                "Close": "22.65",
                "Volume": "30767200",
                "Adj_Close": "21.871994"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-08",
                "Open": "22.629999",
                "High": "23.02",
                "Low": "22.48",
                "Close": "22.93",
                "Volume": "38842100",
                "Adj_Close": "22.142377"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-05",
                "Open": "23.51",
                "High": "23.66",
                "Low": "22.809999",
                "Close": "22.889999",
                "Volume": "32641000",
                "Adj_Close": "22.10375"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-04",
                "Open": "23.17",
                "High": "23.57",
                "Low": "22.93",
                "Close": "23.540001",
                "Volume": "29280500",
                "Adj_Close": "22.731425"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-03",
                "Open": "23.09",
                "High": "23.18",
                "Low": "22.58",
                "Close": "23.10",
                "Volume": "32231400",
                "Adj_Close": "22.306538"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-02",
                "Open": "23.23",
                "High": "23.25",
                "Low": "22.73",
                "Close": "22.83",
                "Volume": "36203700",
                "Adj_Close": "22.045812"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-02-01",
                "Open": "23.459999",
                "High": "23.57",
                "Low": "23.23",
                "Close": "23.48",
                "Volume": "24006400",
                "Adj_Close": "22.673484"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-29",
                "Open": "23.40",
                "High": "23.799999",
                "Low": "23.200001",
                "Close": "23.790001",
                "Volume": "39692600",
                "Adj_Close": "22.972838"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-28",
                "Open": "23.73",
                "High": "23.790001",
                "Low": "22.98",
                "Close": "23.110001",
                "Volume": "31833500",
                "Adj_Close": "22.316195"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-27",
                "Open": "23.690001",
                "High": "23.90",
                "Low": "23.299999",
                "Close": "23.43",
                "Volume": "24654000",
                "Adj_Close": "22.625203"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-26",
                "Open": "23.24",
                "High": "23.85",
                "Low": "23.24",
                "Close": "23.719999",
                "Volume": "25162200",
                "Adj_Close": "22.90524"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-25",
                "Open": "23.379999",
                "High": "23.52",
                "Low": "23.139999",
                "Close": "23.17",
                "Volume": "64066100",
                "Adj_Close": "22.374133"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-22",
                "Open": "23.60",
                "High": "23.639999",
                "Low": "22.99",
                "Close": "23.370001",
                "Volume": "55049000",
                "Adj_Close": "22.567264"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-21",
                "Open": "23.09",
                "High": "23.450001",
                "Low": "22.870001",
                "Close": "22.90",
                "Volume": "46267900",
                "Adj_Close": "22.113407"
            },
            {
                "Symbol": "CSCO",
                "Date": "2016-01-20",
                "Open": "23.40",
                "High": "23.51",
                "Low": "22.469999",
                "Close": "22.90",
                "Volume": "83632400",
                "Adj_Close": "22.113407"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-20",
                "Open": "56.150002",
                "High": "56.84",
                "Low": "55.529999",
                "Close": "55.91",
                "Volume": "89893300",
                "Adj_Close": "55.190841"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-19",
                "Open": "53.709999",
                "High": "53.900002",
                "Low": "52.93",
                "Close": "53.09",
                "Volume": "53336500",
                "Adj_Close": "52.407114"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-18",
                "Open": "53.700001",
                "High": "54.34",
                "Low": "53.549999",
                "Close": "53.959999",
                "Volume": "31433900",
                "Adj_Close": "53.265922"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-15",
                "Open": "53.950001",
                "High": "54.00",
                "Low": "53.209999",
                "Close": "53.700001",
                "Volume": "32024400",
                "Adj_Close": "53.009268"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-14",
                "Open": "53.84",
                "High": "53.990002",
                "Low": "53.580002",
                "Close": "53.740002",
                "Volume": "24545500",
                "Adj_Close": "53.048755"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-13",
                "Open": "53.560001",
                "High": "53.860001",
                "Low": "53.18",
                "Close": "53.509998",
                "Volume": "25356800",
                "Adj_Close": "52.82171"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-12",
                "Open": "52.939999",
                "High": "53.400002",
                "Low": "52.790001",
                "Close": "53.209999",
                "Volume": "27317600",
                "Adj_Close": "52.525569"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-11",
                "Open": "52.50",
                "High": "52.830002",
                "Low": "52.470001",
                "Close": "52.59",
                "Volume": "22269200",
                "Adj_Close": "51.913545"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-08",
                "Open": "51.73",
                "High": "52.360001",
                "Low": "51.549999",
                "Close": "52.299999",
                "Volume": "28391000",
                "Adj_Close": "51.627275"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-07",
                "Open": "51.419998",
                "High": "51.610001",
                "Low": "51.07",
                "Close": "51.380001",
                "Volume": "19585200",
                "Adj_Close": "50.71911"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-06",
                "Open": "50.779999",
                "High": "51.540001",
                "Low": "50.389999",
                "Close": "51.380001",
                "Volume": "28167500",
                "Adj_Close": "50.71911"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-05",
                "Open": "50.830002",
                "High": "51.279999",
                "Low": "50.740002",
                "Close": "51.169998",
                "Volume": "24806400",
                "Adj_Close": "50.511809"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-07-01",
                "Open": "51.130001",
                "High": "51.720001",
                "Low": "51.07",
                "Close": "51.16",
                "Volume": "21400400",
                "Adj_Close": "50.501939"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-30",
                "Open": "50.720001",
                "High": "51.299999",
                "Low": "50.50",
                "Close": "51.169998",
                "Volume": "28527800",
                "Adj_Close": "50.511809"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-29",
                "Open": "49.91",
                "High": "50.720001",
                "Low": "49.799999",
                "Close": "50.540001",
                "Volume": "31304000",
                "Adj_Close": "49.889915"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-28",
                "Open": "48.919998",
                "High": "49.470001",
                "Low": "48.669998",
                "Close": "49.439999",
                "Volume": "38140700",
                "Adj_Close": "48.804062"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-27",
                "Open": "49.099998",
                "High": "49.150002",
                "Low": "48.040001",
                "Close": "48.43",
                "Volume": "50216300",
                "Adj_Close": "47.807055"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-24",
                "Open": "49.810001",
                "High": "50.939999",
                "Low": "49.52",
                "Close": "49.830002",
                "Volume": "133503000",
                "Adj_Close": "49.189048"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-23",
                "Open": "51.279999",
                "High": "52.060001",
                "Low": "51.150002",
                "Close": "51.91",
                "Volume": "29028800",
                "Adj_Close": "51.242292"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-22",
                "Open": "51.080002",
                "High": "51.459999",
                "Low": "50.950001",
                "Close": "50.990002",
                "Volume": "28816800",
                "Adj_Close": "50.334127"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-21",
                "Open": "50.200001",
                "High": "51.43",
                "Low": "50.16",
                "Close": "51.189999",
                "Volume": "34097800",
                "Adj_Close": "50.531552"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-20",
                "Open": "50.639999",
                "High": "50.830002",
                "Low": "50.029999",
                "Close": "50.07",
                "Volume": "35607900",
                "Adj_Close": "49.425959"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-17",
                "Open": "50.41",
                "High": "50.43",
                "Low": "49.82",
                "Close": "50.130001",
                "Volume": "45710500",
                "Adj_Close": "49.485189"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-16",
                "Open": "49.52",
                "High": "50.470001",
                "Low": "49.509998",
                "Close": "50.389999",
                "Volume": "31188600",
                "Adj_Close": "49.741843"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-15",
                "Open": "49.779999",
                "High": "50.119999",
                "Low": "49.689999",
                "Close": "49.689999",
                "Volume": "33757600",
                "Adj_Close": "49.050846"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-14",
                "Open": "49.900002",
                "High": "50.099998",
                "Low": "49.57",
                "Close": "49.830002",
                "Volume": "42577100",
                "Adj_Close": "49.189048"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-13",
                "Open": "49.580002",
                "High": "50.720001",
                "Low": "49.060001",
                "Close": "50.139999",
                "Volume": "83217800",
                "Adj_Close": "49.495059"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-10",
                "Open": "51.049999",
                "High": "52.049999",
                "Low": "51.040001",
                "Close": "51.48",
                "Volume": "25833200",
                "Adj_Close": "50.817823"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-09",
                "Open": "52.00",
                "High": "52.00",
                "Low": "51.490002",
                "Close": "51.619999",
                "Volume": "20305700",
                "Adj_Close": "50.956021"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-08",
                "Open": "52.02",
                "High": "52.439999",
                "Low": "51.869999",
                "Close": "52.040001",
                "Volume": "21149400",
                "Adj_Close": "51.370621"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-07",
                "Open": "52.240002",
                "High": "52.73",
                "Low": "52.099998",
                "Close": "52.099998",
                "Volume": "20866800",
                "Adj_Close": "51.429847"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-06",
                "Open": "51.990002",
                "High": "52.349998",
                "Low": "51.889999",
                "Close": "52.130001",
                "Volume": "18243300",
                "Adj_Close": "51.459463"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-03",
                "Open": "52.380001",
                "High": "52.419998",
                "Low": "51.599998",
                "Close": "51.790001",
                "Volume": "23081300",
                "Adj_Close": "51.123836"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-02",
                "Open": "52.639999",
                "High": "52.740002",
                "Low": "51.84",
                "Close": "52.48",
                "Volume": "22840800",
                "Adj_Close": "51.80496"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-06-01",
                "Open": "52.439999",
                "High": "52.950001",
                "Low": "52.439999",
                "Close": "52.849998",
                "Volume": "25324800",
                "Adj_Close": "52.170199"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-31",
                "Open": "52.259998",
                "High": "53.00",
                "Low": "52.080002",
                "Close": "53.00",
                "Volume": "37653100",
                "Adj_Close": "52.318272"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-27",
                "Open": "51.919998",
                "High": "52.32",
                "Low": "51.77",
                "Close": "52.32",
                "Volume": "17653700",
                "Adj_Close": "51.647018"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-26",
                "Open": "51.93",
                "High": "51.98",
                "Low": "51.360001",
                "Close": "51.889999",
                "Volume": "24335200",
                "Adj_Close": "51.222549"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-25",
                "Open": "51.919998",
                "High": "52.490002",
                "Low": "51.790001",
                "Close": "52.119999",
                "Volume": "24040200",
                "Adj_Close": "51.44959"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-24",
                "Open": "50.700001",
                "High": "51.709999",
                "Low": "50.400002",
                "Close": "51.59",
                "Volume": "34757900",
                "Adj_Close": "50.926408"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-23",
                "Open": "50.599998",
                "High": "50.68",
                "Low": "49.98",
                "Close": "50.029999",
                "Volume": "26118700",
                "Adj_Close": "49.386473"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-20",
                "Open": "50.48",
                "High": "51.220001",
                "Low": "50.400002",
                "Close": "50.619999",
                "Volume": "23905800",
                "Adj_Close": "49.968884"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-19",
                "Open": "50.470001",
                "High": "50.619999",
                "Low": "49.82",
                "Close": "50.32",
                "Volume": "23842400",
                "Adj_Close": "49.672744"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-18",
                "Open": "50.48",
                "High": "51.139999",
                "Low": "50.299999",
                "Close": "50.810001",
                "Volume": "24907500",
                "Adj_Close": "50.156442"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-17",
                "Open": "51.720001",
                "High": "51.73",
                "Low": "50.360001",
                "Close": "50.509998",
                "Volume": "27803500",
                "Adj_Close": "49.860298"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-16",
                "Open": "50.799999",
                "High": "51.959999",
                "Low": "50.75",
                "Close": "51.830002",
                "Volume": "20032000",
                "Adj_Close": "50.807953"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-13",
                "Open": "51.439999",
                "High": "51.900002",
                "Low": "51.040001",
                "Close": "51.080002",
                "Volume": "22592300",
                "Adj_Close": "50.072743"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-12",
                "Open": "51.200001",
                "High": "51.810001",
                "Low": "50.919998",
                "Close": "51.509998",
                "Volume": "24102800",
                "Adj_Close": "50.49426"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-11",
                "Open": "51.130001",
                "High": "51.779999",
                "Low": "51.00",
                "Close": "51.049999",
                "Volume": "24039100",
                "Adj_Close": "50.043332"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-10",
                "Open": "50.330002",
                "High": "51.099998",
                "Low": "50.189999",
                "Close": "51.02",
                "Volume": "22891000",
                "Adj_Close": "50.013925"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-09",
                "Open": "50.490002",
                "High": "50.59",
                "Low": "50.00",
                "Close": "50.07",
                "Volume": "17951600",
                "Adj_Close": "49.082657"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-06",
                "Open": "49.919998",
                "High": "50.389999",
                "Low": "49.66",
                "Close": "50.389999",
                "Volume": "24715600",
                "Adj_Close": "49.396347"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-05",
                "Open": "49.869999",
                "High": "50.299999",
                "Low": "49.73",
                "Close": "49.939999",
                "Volume": "25390700",
                "Adj_Close": "48.95522"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-04",
                "Open": "49.84",
                "High": "50.060001",
                "Low": "49.459999",
                "Close": "49.869999",
                "Volume": "24257600",
                "Adj_Close": "48.8866"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-03",
                "Open": "50.34",
                "High": "50.41",
                "Low": "49.599998",
                "Close": "49.779999",
                "Volume": "26460200",
                "Adj_Close": "48.798375"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-05-02",
                "Open": "50.00",
                "High": "50.75",
                "Low": "49.779999",
                "Close": "50.610001",
                "Volume": "33114500",
                "Adj_Close": "49.61201"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-29",
                "Open": "49.349998",
                "High": "50.25",
                "Low": "49.349998",
                "Close": "49.869999",
                "Volume": "48411700",
                "Adj_Close": "48.8866"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-28",
                "Open": "50.619999",
                "High": "50.77",
                "Low": "49.560001",
                "Close": "49.900002",
                "Volume": "43134800",
                "Adj_Close": "48.916011"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-27",
                "Open": "51.48",
                "High": "51.50",
                "Low": "50.549999",
                "Close": "50.939999",
                "Volume": "43369300",
                "Adj_Close": "49.9355"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-26",
                "Open": "52.259998",
                "High": "52.349998",
                "Low": "51.09",
                "Close": "51.439999",
                "Volume": "33532600",
                "Adj_Close": "50.425641"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-25",
                "Open": "51.779999",
                "High": "52.130001",
                "Low": "51.630001",
                "Close": "52.110001",
                "Volume": "33226900",
                "Adj_Close": "51.082431"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-22",
                "Open": "51.91",
                "High": "52.43",
                "Low": "50.77",
                "Close": "51.779999",
                "Volume": "126834100",
                "Adj_Close": "50.758936"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-21",
                "Open": "55.799999",
                "High": "56.23",
                "Low": "55.419998",
                "Close": "55.779999",
                "Volume": "38909100",
                "Adj_Close": "54.680059"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-20",
                "Open": "56.290001",
                "High": "56.50",
                "Low": "55.490002",
                "Close": "55.59",
                "Volume": "36195700",
                "Adj_Close": "54.493807"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-19",
                "Open": "56.630001",
                "High": "56.77",
                "Low": "55.68",
                "Close": "56.389999",
                "Volume": "29596800",
                "Adj_Close": "55.278031"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-18",
                "Open": "55.490002",
                "High": "56.59",
                "Low": "55.209999",
                "Close": "56.459999",
                "Volume": "23150300",
                "Adj_Close": "55.346651"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-15",
                "Open": "55.299999",
                "High": "55.919998",
                "Low": "55.110001",
                "Close": "55.650002",
                "Volume": "28793800",
                "Adj_Close": "54.552626"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-14",
                "Open": "55.220001",
                "High": "55.580002",
                "Low": "55.07",
                "Close": "55.360001",
                "Volume": "20877100",
                "Adj_Close": "54.268343"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-13",
                "Open": "55.119999",
                "High": "55.439999",
                "Low": "54.889999",
                "Close": "55.349998",
                "Volume": "20818000",
                "Adj_Close": "54.258538"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-12",
                "Open": "54.369999",
                "High": "54.779999",
                "Low": "53.759998",
                "Close": "54.650002",
                "Volume": "24944300",
                "Adj_Close": "53.572345"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-11",
                "Open": "54.490002",
                "High": "55.150002",
                "Low": "54.299999",
                "Close": "54.310001",
                "Volume": "21414200",
                "Adj_Close": "53.239049"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-08",
                "Open": "54.669998",
                "High": "55.279999",
                "Low": "54.32",
                "Close": "54.419998",
                "Volume": "22167200",
                "Adj_Close": "53.346877"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-07",
                "Open": "54.869999",
                "High": "54.91",
                "Low": "54.23",
                "Close": "54.459999",
                "Volume": "19225100",
                "Adj_Close": "53.386089"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-06",
                "Open": "54.360001",
                "High": "55.200001",
                "Low": "54.209999",
                "Close": "55.119999",
                "Volume": "21188700",
                "Adj_Close": "54.033074"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-05",
                "Open": "55.189999",
                "High": "55.299999",
                "Low": "54.459999",
                "Close": "54.560001",
                "Volume": "19272300",
                "Adj_Close": "53.484119"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-04",
                "Open": "55.43",
                "High": "55.66",
                "Low": "55.00",
                "Close": "55.43",
                "Volume": "18928800",
                "Adj_Close": "54.336963"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-04-01",
                "Open": "55.049999",
                "High": "55.610001",
                "Low": "54.57",
                "Close": "55.57",
                "Volume": "24399200",
                "Adj_Close": "54.474201"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-31",
                "Open": "54.950001",
                "High": "55.59",
                "Low": "54.860001",
                "Close": "55.23",
                "Volume": "26360500",
                "Adj_Close": "54.140906"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-30",
                "Open": "54.93",
                "High": "55.639999",
                "Low": "54.900002",
                "Close": "55.049999",
                "Volume": "23008300",
                "Adj_Close": "53.964455"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-29",
                "Open": "53.66",
                "High": "54.860001",
                "Low": "53.450001",
                "Close": "54.709999",
                "Volume": "23924300",
                "Adj_Close": "53.631159"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-28",
                "Open": "54.209999",
                "High": "54.290001",
                "Low": "53.330002",
                "Close": "53.540001",
                "Volume": "17025100",
                "Adj_Close": "52.484233"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-24",
                "Open": "53.84",
                "High": "54.330002",
                "Low": "53.73",
                "Close": "54.209999",
                "Volume": "19950000",
                "Adj_Close": "53.141019"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-23",
                "Open": "54.110001",
                "High": "54.240002",
                "Low": "53.740002",
                "Close": "53.970001",
                "Volume": "20129000",
                "Adj_Close": "52.905754"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-22",
                "Open": "53.610001",
                "High": "54.25",
                "Low": "53.459999",
                "Close": "54.07",
                "Volume": "23124100",
                "Adj_Close": "53.00378"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-21",
                "Open": "53.25",
                "High": "53.93",
                "Low": "52.93",
                "Close": "53.860001",
                "Volume": "23925700",
                "Adj_Close": "52.797922"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-18",
                "Open": "54.919998",
                "High": "54.970001",
                "Low": "53.450001",
                "Close": "53.490002",
                "Volume": "67625500",
                "Adj_Close": "52.435219"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-17",
                "Open": "54.209999",
                "High": "55.00",
                "Low": "54.00",
                "Close": "54.66",
                "Volume": "28223900",
                "Adj_Close": "53.582146"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-16",
                "Open": "53.450001",
                "High": "54.599998",
                "Low": "53.400002",
                "Close": "54.349998",
                "Volume": "31691700",
                "Adj_Close": "53.278258"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-15",
                "Open": "52.75",
                "High": "53.59",
                "Low": "52.740002",
                "Close": "53.59",
                "Volume": "21104800",
                "Adj_Close": "52.533246"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-14",
                "Open": "52.709999",
                "High": "53.59",
                "Low": "52.630001",
                "Close": "53.169998",
                "Volume": "24083600",
                "Adj_Close": "52.121526"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-11",
                "Open": "53.00",
                "High": "53.07",
                "Low": "52.380001",
                "Close": "53.07",
                "Volume": "32275700",
                "Adj_Close": "52.023499"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-10",
                "Open": "52.93",
                "High": "52.939999",
                "Low": "51.16",
                "Close": "52.049999",
                "Volume": "38387800",
                "Adj_Close": "51.023613"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-09",
                "Open": "51.889999",
                "High": "52.849998",
                "Low": "51.860001",
                "Close": "52.84",
                "Volume": "28251600",
                "Adj_Close": "51.798035"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-08",
                "Open": "50.799999",
                "High": "52.130001",
                "Low": "50.599998",
                "Close": "51.650002",
                "Volume": "33835100",
                "Adj_Close": "50.631503"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-07",
                "Open": "51.560001",
                "High": "51.799999",
                "Low": "50.580002",
                "Close": "51.029999",
                "Volume": "38407800",
                "Adj_Close": "50.023726"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-04",
                "Open": "52.400002",
                "High": "52.450001",
                "Low": "51.709999",
                "Close": "52.029999",
                "Volume": "33034200",
                "Adj_Close": "51.004007"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-03",
                "Open": "52.970001",
                "High": "52.970001",
                "Low": "51.779999",
                "Close": "52.349998",
                "Volume": "24427800",
                "Adj_Close": "51.317696"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-02",
                "Open": "52.41",
                "High": "52.959999",
                "Low": "52.16",
                "Close": "52.950001",
                "Volume": "29289900",
                "Adj_Close": "51.905867"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-03-01",
                "Open": "50.970001",
                "High": "52.59",
                "Low": "50.919998",
                "Close": "52.580002",
                "Volume": "33024500",
                "Adj_Close": "51.543164"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-29",
                "Open": "51.349998",
                "High": "51.650002",
                "Low": "50.66",
                "Close": "50.880001",
                "Volume": "31654000",
                "Adj_Close": "49.876686"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-26",
                "Open": "52.599998",
                "High": "52.68",
                "Low": "51.099998",
                "Close": "51.299999",
                "Volume": "35975900",
                "Adj_Close": "50.288402"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-25",
                "Open": "51.73",
                "High": "52.099998",
                "Low": "50.610001",
                "Close": "52.099998",
                "Volume": "26939500",
                "Adj_Close": "51.072626"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-24",
                "Open": "50.689999",
                "High": "51.50",
                "Low": "50.200001",
                "Close": "51.360001",
                "Volume": "33014500",
                "Adj_Close": "50.34722"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-23",
                "Open": "52.34",
                "High": "52.369999",
                "Low": "50.98",
                "Close": "51.18",
                "Volume": "28895300",
                "Adj_Close": "50.170769"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-22",
                "Open": "52.279999",
                "High": "53.00",
                "Low": "52.279999",
                "Close": "52.650002",
                "Volume": "25008300",
                "Adj_Close": "51.611783"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-19",
                "Open": "51.970001",
                "High": "52.279999",
                "Low": "51.529999",
                "Close": "51.82",
                "Volume": "33559100",
                "Adj_Close": "50.798149"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-18",
                "Open": "52.330002",
                "High": "52.950001",
                "Low": "52.099998",
                "Close": "52.189999",
                "Volume": "27176000",
                "Adj_Close": "51.160851"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-17",
                "Open": "51.490002",
                "High": "52.77",
                "Low": "51.450001",
                "Close": "52.419998",
                "Volume": "40789000",
                "Adj_Close": "51.386315"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-16",
                "Open": "50.900002",
                "High": "51.09",
                "Low": "50.130001",
                "Close": "51.09",
                "Volume": "37291200",
                "Adj_Close": "50.082544"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-12",
                "Open": "50.25",
                "High": "50.68",
                "Low": "49.75",
                "Close": "50.50",
                "Volume": "34243300",
                "Adj_Close": "49.151279"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-11",
                "Open": "48.68",
                "High": "50.110001",
                "Low": "48.509998",
                "Close": "49.689999",
                "Volume": "48878600",
                "Adj_Close": "48.36291"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-10",
                "Open": "49.889999",
                "High": "50.389999",
                "Low": "49.52",
                "Close": "49.709999",
                "Volume": "38237000",
                "Adj_Close": "48.382377"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-09",
                "Open": "49.02",
                "High": "50.240002",
                "Low": "48.669998",
                "Close": "49.279999",
                "Volume": "46740500",
                "Adj_Close": "47.963861"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-08",
                "Open": "49.549999",
                "High": "49.57",
                "Low": "48.189999",
                "Close": "49.41",
                "Volume": "59290500",
                "Adj_Close": "48.09039"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-05",
                "Open": "51.939999",
                "High": "52.00",
                "Low": "49.560001",
                "Close": "50.16",
                "Volume": "62009000",
                "Adj_Close": "48.820359"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-04",
                "Open": "52.099998",
                "High": "52.810001",
                "Low": "51.369999",
                "Close": "52.00",
                "Volume": "46987100",
                "Adj_Close": "50.611218"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-03",
                "Open": "53.25",
                "High": "53.389999",
                "Low": "51.259998",
                "Close": "52.16",
                "Volume": "57559800",
                "Adj_Close": "50.766944"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-02",
                "Open": "54.169998",
                "High": "54.259998",
                "Low": "52.650002",
                "Close": "53.00",
                "Volume": "56313800",
                "Adj_Close": "51.58451"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-02-01",
                "Open": "54.880001",
                "High": "55.09",
                "Low": "54.50",
                "Close": "54.709999",
                "Volume": "44208500",
                "Adj_Close": "53.24884"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-29",
                "Open": "54.73",
                "High": "55.09",
                "Low": "54.00",
                "Close": "55.09",
                "Volume": "83611700",
                "Adj_Close": "53.618692"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-28",
                "Open": "51.860001",
                "High": "52.209999",
                "Low": "51.25",
                "Close": "52.060001",
                "Volume": "62513800",
                "Adj_Close": "50.669617"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-27",
                "Open": "52.009998",
                "High": "52.200001",
                "Low": "51.02",
                "Close": "51.220001",
                "Volume": "36775200",
                "Adj_Close": "49.852051"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-26",
                "Open": "51.790001",
                "High": "52.439999",
                "Low": "51.549999",
                "Close": "52.169998",
                "Volume": "28900800",
                "Adj_Close": "50.776676"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-25",
                "Open": "51.939999",
                "High": "52.650002",
                "Low": "51.650002",
                "Close": "51.790001",
                "Volume": "34707700",
                "Adj_Close": "50.406827"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-22",
                "Open": "51.41",
                "High": "52.330002",
                "Low": "51.259998",
                "Close": "52.290001",
                "Volume": "37555800",
                "Adj_Close": "50.893473"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-21",
                "Open": "51.00",
                "High": "51.580002",
                "Low": "50.299999",
                "Close": "50.48",
                "Volume": "40191200",
                "Adj_Close": "49.131812"
            },
            {
                "Symbol": "MSFT",
                "Date": "2016-01-20",
                "Open": "49.98",
                "High": "51.380001",
                "Low": "49.099998",
                "Close": "50.790001",
                "Volume": "63273000",
                "Adj_Close": "49.433535"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-20",
                "Open": "98.160004",
                "High": "98.889999",
                "Low": "97.849998",
                "Close": "98.400002",
                "Volume": "1553800",
                "Adj_Close": "98.400002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-19",
                "Open": "97.110001",
                "High": "98.169998",
                "Low": "97.00",
                "Close": "97.790001",
                "Volume": "1797000",
                "Adj_Close": "97.790001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-18",
                "Open": "97.739998",
                "High": "98.529999",
                "Low": "97.580002",
                "Close": "97.790001",
                "Volume": "1544200",
                "Adj_Close": "97.790001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-15",
                "Open": "98.389999",
                "High": "98.400002",
                "Low": "97.50",
                "Close": "97.830002",
                "Volume": "1530100",
                "Adj_Close": "97.830002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-14",
                "Open": "98.00",
                "High": "98.139999",
                "Low": "97.459999",
                "Close": "97.699997",
                "Volume": "1402200",
                "Adj_Close": "97.699997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-13",
                "Open": "97.970001",
                "High": "98.379997",
                "Low": "97.339996",
                "Close": "97.339996",
                "Volume": "2125700",
                "Adj_Close": "97.339996"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-12",
                "Open": "97.25",
                "High": "97.790001",
                "Low": "96.699997",
                "Close": "97.540001",
                "Volume": "2051400",
                "Adj_Close": "97.540001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-11",
                "Open": "96.980003",
                "High": "97.550003",
                "Low": "96.809998",
                "Close": "97.139999",
                "Volume": "1732000",
                "Adj_Close": "97.139999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-08",
                "Open": "95.93",
                "High": "96.860001",
                "Low": "95.339996",
                "Close": "96.790001",
                "Volume": "2023900",
                "Adj_Close": "96.790001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-07",
                "Open": "95.010002",
                "High": "95.510002",
                "Low": "94.540001",
                "Close": "95.139999",
                "Volume": "1576200",
                "Adj_Close": "95.139999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-06",
                "Open": "94.529999",
                "High": "95.480003",
                "Low": "94.059998",
                "Close": "95.18",
                "Volume": "1490300",
                "Adj_Close": "95.18"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-05",
                "Open": "94.550003",
                "High": "95.610001",
                "Low": "94.150002",
                "Close": "94.730003",
                "Volume": "2314600",
                "Adj_Close": "94.730003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-07-01",
                "Open": "95.040001",
                "High": "97.139999",
                "Low": "95.00",
                "Close": "95.32",
                "Volume": "3001900",
                "Adj_Close": "95.32"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-30",
                "Open": "94.480003",
                "High": "95.879997",
                "Low": "94.129997",
                "Close": "95.790001",
                "Volume": "3544700",
                "Adj_Close": "95.790001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-29",
                "Open": "92.910004",
                "High": "94.620003",
                "Low": "92.68",
                "Close": "94.389999",
                "Volume": "2965500",
                "Adj_Close": "94.389999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-28",
                "Open": "91.370003",
                "High": "92.650002",
                "Low": "91.360001",
                "Close": "92.459999",
                "Volume": "3319200",
                "Adj_Close": "92.459999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-27",
                "Open": "91.360001",
                "High": "92.029999",
                "Low": "90.349998",
                "Close": "90.849998",
                "Volume": "3925700",
                "Adj_Close": "90.849998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-24",
                "Open": "92.389999",
                "High": "94.349998",
                "Low": "92.040001",
                "Close": "92.199997",
                "Volume": "4329100",
                "Adj_Close": "92.199997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-23",
                "Open": "94.730003",
                "High": "96.279999",
                "Low": "94.309998",
                "Close": "96.209999",
                "Volume": "3803200",
                "Adj_Close": "96.209999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-22",
                "Open": "95.529999",
                "High": "96.50",
                "Low": "93.860001",
                "Close": "94.010002",
                "Volume": "10280500",
                "Adj_Close": "94.010002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-21",
                "Open": "98.639999",
                "High": "99.919998",
                "Low": "98.129997",
                "Close": "99.720001",
                "Volume": "6505100",
                "Adj_Close": "99.720001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-20",
                "Open": "97.099998",
                "High": "98.75",
                "Low": "96.769997",
                "Close": "97.989998",
                "Volume": "4310600",
                "Adj_Close": "97.989998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-17",
                "Open": "97.25",
                "High": "97.389999",
                "Low": "95.360001",
                "Close": "95.580002",
                "Volume": "4541500",
                "Adj_Close": "95.580002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-16",
                "Open": "96.50",
                "High": "97.300003",
                "Low": "95.540001",
                "Close": "97.190002",
                "Volume": "1952000",
                "Adj_Close": "97.190002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-15",
                "Open": "97.010002",
                "High": "97.830002",
                "Low": "96.900002",
                "Close": "97.019997",
                "Volume": "2270400",
                "Adj_Close": "97.019997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-14",
                "Open": "96.529999",
                "High": "97.260002",
                "Low": "96.32",
                "Close": "96.980003",
                "Volume": "1889800",
                "Adj_Close": "96.980003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-13",
                "Open": "96.870003",
                "High": "98.089996",
                "Low": "96.699997",
                "Close": "96.959999",
                "Volume": "2291500",
                "Adj_Close": "96.959999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-10",
                "Open": "96.889999",
                "High": "97.870003",
                "Low": "96.75",
                "Close": "97.089996",
                "Volume": "1863800",
                "Adj_Close": "97.089996"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-09",
                "Open": "98.360001",
                "High": "98.699997",
                "Low": "97.849998",
                "Close": "98.07",
                "Volume": "1609400",
                "Adj_Close": "98.07"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-08",
                "Open": "98.449997",
                "High": "98.910004",
                "Low": "97.989998",
                "Close": "98.68",
                "Volume": "2078700",
                "Adj_Close": "98.68"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-07",
                "Open": "99.510002",
                "High": "99.669998",
                "Low": "98.470001",
                "Close": "98.519997",
                "Volume": "2143900",
                "Adj_Close": "98.519997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-06",
                "Open": "99.160004",
                "High": "99.489998",
                "Low": "98.470001",
                "Close": "99.120003",
                "Volume": "1395800",
                "Adj_Close": "99.120003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-03",
                "Open": "99.519997",
                "High": "99.519997",
                "Low": "97.889999",
                "Close": "98.699997",
                "Volume": "2415900",
                "Adj_Close": "98.699997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-02",
                "Open": "99.980003",
                "High": "100.169998",
                "Low": "99.169998",
                "Close": "100.169998",
                "Volume": "1761700",
                "Adj_Close": "100.169998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-06-01",
                "Open": "99.239998",
                "High": "100.400002",
                "Low": "98.93",
                "Close": "100.040001",
                "Volume": "1662600",
                "Adj_Close": "100.040001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-31",
                "Open": "100.139999",
                "High": "100.559998",
                "Low": "99.349998",
                "Close": "99.470001",
                "Volume": "3480500",
                "Adj_Close": "99.470001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-27",
                "Open": "99.519997",
                "High": "100.139999",
                "Low": "98.900002",
                "Close": "100.139999",
                "Volume": "1603600",
                "Adj_Close": "100.139999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-26",
                "Open": "99.809998",
                "High": "100.330002",
                "Low": "99.07",
                "Close": "99.370003",
                "Volume": "1970900",
                "Adj_Close": "99.370003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-25",
                "Open": "99.910004",
                "High": "99.989998",
                "Low": "98.800003",
                "Close": "99.610001",
                "Volume": "1954500",
                "Adj_Close": "99.610001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-24",
                "Open": "97.18",
                "High": "99.699997",
                "Low": "96.970001",
                "Close": "99.629997",
                "Volume": "3014800",
                "Adj_Close": "99.629997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-23",
                "Open": "96.709999",
                "High": "97.419998",
                "Low": "96.50",
                "Close": "96.620003",
                "Volume": "1095900",
                "Adj_Close": "96.620003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-20",
                "Open": "96.099998",
                "High": "97.120003",
                "Low": "95.860001",
                "Close": "96.879997",
                "Volume": "2217900",
                "Adj_Close": "96.879997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-19",
                "Open": "96.410004",
                "High": "96.949997",
                "Low": "95.25",
                "Close": "95.879997",
                "Volume": "1988400",
                "Adj_Close": "95.879997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-18",
                "Open": "95.779999",
                "High": "97.43",
                "Low": "95.50",
                "Close": "96.699997",
                "Volume": "2010400",
                "Adj_Close": "96.699997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-17",
                "Open": "96.809998",
                "High": "97.349998",
                "Low": "95.75",
                "Close": "95.93",
                "Volume": "3279600",
                "Adj_Close": "95.93"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-16",
                "Open": "95.910004",
                "High": "97.760002",
                "Low": "95.910004",
                "Close": "97.230003",
                "Volume": "1918500",
                "Adj_Close": "97.230003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-13",
                "Open": "95.620003",
                "High": "97.209999",
                "Low": "95.370003",
                "Close": "95.970001",
                "Volume": "2221100",
                "Adj_Close": "95.970001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-12",
                "Open": "96.309998",
                "High": "96.980003",
                "Low": "94.93",
                "Close": "95.959999",
                "Volume": "1198100",
                "Adj_Close": "95.959999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-11",
                "Open": "96.260002",
                "High": "97.260002",
                "Low": "96.040001",
                "Close": "96.099998",
                "Volume": "1569100",
                "Adj_Close": "96.099998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-10",
                "Open": "94.82",
                "High": "96.589996",
                "Low": "94.75",
                "Close": "96.519997",
                "Volume": "1808400",
                "Adj_Close": "96.519997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-09",
                "Open": "94.00",
                "High": "95.190002",
                "Low": "93.870003",
                "Close": "94.610001",
                "Volume": "1406900",
                "Adj_Close": "94.610001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-06",
                "Open": "93.129997",
                "High": "94.400002",
                "Low": "92.57",
                "Close": "94.300003",
                "Volume": "1462300",
                "Adj_Close": "94.300003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-05",
                "Open": "93.099998",
                "High": "94.220001",
                "Low": "92.919998",
                "Close": "93.50",
                "Volume": "1894800",
                "Adj_Close": "93.50"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-04",
                "Open": "93.18",
                "High": "93.589996",
                "Low": "92.550003",
                "Close": "92.940002",
                "Volume": "1710700",
                "Adj_Close": "92.940002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-03",
                "Open": "94.07",
                "High": "94.389999",
                "Low": "93.089996",
                "Close": "93.660004",
                "Volume": "1811400",
                "Adj_Close": "93.660004"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-05-02",
                "Open": "94.290001",
                "High": "94.989998",
                "Low": "93.809998",
                "Close": "94.900002",
                "Volume": "2330600",
                "Adj_Close": "94.900002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-29",
                "Open": "92.889999",
                "High": "94.580002",
                "Low": "92.32",
                "Close": "94.220001",
                "Volume": "3163800",
                "Adj_Close": "94.220001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-28",
                "Open": "94.800003",
                "High": "95.739998",
                "Low": "93.150002",
                "Close": "93.639999",
                "Volume": "3497700",
                "Adj_Close": "93.639999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-27",
                "Open": "95.720001",
                "High": "95.989998",
                "Low": "94.529999",
                "Close": "95.639999",
                "Volume": "2082800",
                "Adj_Close": "95.639999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-26",
                "Open": "95.959999",
                "High": "96.300003",
                "Low": "95.220001",
                "Close": "96.150002",
                "Volume": "1419300",
                "Adj_Close": "96.150002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-25",
                "Open": "94.379997",
                "High": "96.040001",
                "Low": "94.220001",
                "Close": "95.800003",
                "Volume": "2047000",
                "Adj_Close": "95.800003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-22",
                "Open": "96.169998",
                "High": "96.239998",
                "Low": "93.760002",
                "Close": "94.790001",
                "Volume": "3797900",
                "Adj_Close": "94.790001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-21",
                "Open": "96.209999",
                "High": "97.139999",
                "Low": "95.760002",
                "Close": "96.370003",
                "Volume": "2066900",
                "Adj_Close": "96.370003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-20",
                "Open": "97.00",
                "High": "97.00",
                "Low": "95.760002",
                "Close": "96.330002",
                "Volume": "2712100",
                "Adj_Close": "96.330002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-19",
                "Open": "97.00",
                "High": "97.690002",
                "Low": "95.129997",
                "Close": "96.519997",
                "Volume": "2507100",
                "Adj_Close": "96.519997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-18",
                "Open": "94.75",
                "High": "96.580002",
                "Low": "94.589996",
                "Close": "96.550003",
                "Volume": "2172700",
                "Adj_Close": "96.550003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-15",
                "Open": "94.660004",
                "High": "95.220001",
                "Low": "94.160004",
                "Close": "95.160004",
                "Volume": "2187400",
                "Adj_Close": "95.160004"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-14",
                "Open": "94.339996",
                "High": "94.709999",
                "Low": "94.010002",
                "Close": "94.440002",
                "Volume": "1764000",
                "Adj_Close": "94.440002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-13",
                "Open": "93.82",
                "High": "94.599998",
                "Low": "93.690002",
                "Close": "94.529999",
                "Volume": "2055000",
                "Adj_Close": "94.529999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-12",
                "Open": "93.18",
                "High": "93.669998",
                "Low": "92.220001",
                "Close": "93.419998",
                "Volume": "2079000",
                "Adj_Close": "93.419998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-11",
                "Open": "94.43",
                "High": "94.809998",
                "Low": "92.839996",
                "Close": "92.949997",
                "Volume": "2165100",
                "Adj_Close": "92.949997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-08",
                "Open": "94.480003",
                "High": "94.50",
                "Low": "93.389999",
                "Close": "94.07",
                "Volume": "2063100",
                "Adj_Close": "94.07"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-07",
                "Open": "94.720001",
                "High": "94.889999",
                "Low": "93.190002",
                "Close": "93.779999",
                "Volume": "2370500",
                "Adj_Close": "93.779999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-06",
                "Open": "94.07",
                "High": "95.489998",
                "Low": "93.970001",
                "Close": "95.400002",
                "Volume": "2705700",
                "Adj_Close": "95.400002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-05",
                "Open": "93.32",
                "High": "94.769997",
                "Low": "93.220001",
                "Close": "94.169998",
                "Volume": "2472600",
                "Adj_Close": "94.169998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-04",
                "Open": "95.419998",
                "High": "96.279999",
                "Low": "94.230003",
                "Close": "94.50",
                "Volume": "2398300",
                "Adj_Close": "94.50"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-04-01",
                "Open": "93.330002",
                "High": "95.470001",
                "Low": "92.769997",
                "Close": "95.160004",
                "Volume": "3981300",
                "Adj_Close": "95.160004"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-31",
                "Open": "93.760002",
                "High": "94.580002",
                "Low": "93.230003",
                "Close": "93.800003",
                "Volume": "6561400",
                "Adj_Close": "93.800003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-30",
                "Open": "93.629997",
                "High": "94.480003",
                "Low": "92.980003",
                "Close": "93.779999",
                "Volume": "6797200",
                "Adj_Close": "93.779999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-29",
                "Open": "91.790001",
                "High": "93.440002",
                "Low": "91.760002",
                "Close": "93.220001",
                "Volume": "4248600",
                "Adj_Close": "93.220001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-28",
                "Open": "92.68",
                "High": "92.830002",
                "Low": "91.900002",
                "Close": "92.400002",
                "Volume": "2283000",
                "Adj_Close": "92.400002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-24",
                "Open": "91.50",
                "High": "92.739998",
                "Low": "91.25",
                "Close": "92.519997",
                "Volume": "3266800",
                "Adj_Close": "92.519997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-23",
                "Open": "92.620003",
                "High": "92.940002",
                "Low": "91.93",
                "Close": "92.160004",
                "Volume": "2767600",
                "Adj_Close": "92.160004"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-22",
                "Open": "92.059998",
                "High": "93.419998",
                "Low": "92.050003",
                "Close": "92.559998",
                "Volume": "4475800",
                "Adj_Close": "92.559998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-21",
                "Open": "92.690002",
                "High": "93.269997",
                "Low": "91.330002",
                "Close": "92.50",
                "Volume": "4657300",
                "Adj_Close": "92.50"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-18",
                "Open": "98.00",
                "High": "98.00",
                "Low": "93.110001",
                "Close": "93.419998",
                "Volume": "12530100",
                "Adj_Close": "93.419998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-17",
                "Open": "88.660004",
                "High": "90.209999",
                "Low": "87.25",
                "Close": "89.959999",
                "Volume": "6914600",
                "Adj_Close": "89.959999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-16",
                "Open": "86.699997",
                "High": "88.480003",
                "Low": "86.400002",
                "Close": "88.169998",
                "Volume": "3383000",
                "Adj_Close": "88.169998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-15",
                "Open": "86.400002",
                "High": "87.190002",
                "Low": "86.220001",
                "Close": "86.830002",
                "Volume": "2909600",
                "Adj_Close": "86.830002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-14",
                "Open": "86.110001",
                "High": "87.75",
                "Low": "85.839996",
                "Close": "87.010002",
                "Volume": "3754500",
                "Adj_Close": "87.010002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-11",
                "Open": "85.199997",
                "High": "86.230003",
                "Low": "84.629997",
                "Close": "86.00",
                "Volume": "3330400",
                "Adj_Close": "86.00"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-10",
                "Open": "85.059998",
                "High": "86.519997",
                "Low": "83.589996",
                "Close": "84.849998",
                "Volume": "2969700",
                "Adj_Close": "84.849998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-09",
                "Open": "84.879997",
                "High": "85.290001",
                "Low": "83.25",
                "Close": "85.269997",
                "Volume": "2491500",
                "Adj_Close": "85.269997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-08",
                "Open": "84.25",
                "High": "85.949997",
                "Low": "83.169998",
                "Close": "84.349998",
                "Volume": "3245700",
                "Adj_Close": "84.349998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-07",
                "Open": "85.580002",
                "High": "85.959999",
                "Low": "84.050003",
                "Close": "85.110001",
                "Volume": "3121300",
                "Adj_Close": "85.110001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-04",
                "Open": "87.93",
                "High": "87.940002",
                "Low": "85.580002",
                "Close": "86.18",
                "Volume": "3002500",
                "Adj_Close": "86.18"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-03",
                "Open": "88.50",
                "High": "88.50",
                "Low": "85.849998",
                "Close": "87.209999",
                "Volume": "3082100",
                "Adj_Close": "87.209999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-02",
                "Open": "88.120003",
                "High": "88.550003",
                "Low": "87.260002",
                "Close": "88.389999",
                "Volume": "2863500",
                "Adj_Close": "88.389999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-03-01",
                "Open": "85.919998",
                "High": "88.400002",
                "Low": "84.589996",
                "Close": "88.370003",
                "Volume": "3603900",
                "Adj_Close": "88.370003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-29",
                "Open": "86.010002",
                "High": "86.190002",
                "Low": "85.089996",
                "Close": "85.150002",
                "Volume": "3156400",
                "Adj_Close": "85.150002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-26",
                "Open": "87.110001",
                "High": "87.480003",
                "Low": "84.099998",
                "Close": "86.599998",
                "Volume": "3723200",
                "Adj_Close": "86.599998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-25",
                "Open": "84.760002",
                "High": "86.720001",
                "Low": "84.150002",
                "Close": "86.68",
                "Volume": "3284000",
                "Adj_Close": "86.68"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-24",
                "Open": "82.220001",
                "High": "83.529999",
                "Low": "80.93",
                "Close": "83.419998",
                "Volume": "2667300",
                "Adj_Close": "83.419998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-23",
                "Open": "83.410004",
                "High": "84.489998",
                "Low": "82.860001",
                "Close": "83.07",
                "Volume": "2958400",
                "Adj_Close": "83.07"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-22",
                "Open": "82.089996",
                "High": "84.160004",
                "Low": "82.050003",
                "Close": "83.800003",
                "Volume": "3615500",
                "Adj_Close": "83.800003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-19",
                "Open": "80.32",
                "High": "80.940002",
                "Low": "79.510002",
                "Close": "80.870003",
                "Volume": "3928900",
                "Adj_Close": "80.870003"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-18",
                "Open": "82.300003",
                "High": "82.82",
                "Low": "80.139999",
                "Close": "80.529999",
                "Volume": "3560300",
                "Adj_Close": "80.529999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-17",
                "Open": "79.400002",
                "High": "82.07",
                "Low": "78.540001",
                "Close": "81.849998",
                "Volume": "4474200",
                "Adj_Close": "81.849998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-16",
                "Open": "77.129997",
                "High": "79.199997",
                "Low": "77.129997",
                "Close": "78.879997",
                "Volume": "4736400",
                "Adj_Close": "78.879997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-12",
                "Open": "75.989998",
                "High": "77.360001",
                "Low": "75.400002",
                "Close": "76.669998",
                "Volume": "4368700",
                "Adj_Close": "76.669998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-11",
                "Open": "74.040001",
                "High": "75.529999",
                "Low": "73.580002",
                "Close": "74.940002",
                "Volume": "4984700",
                "Adj_Close": "74.940002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-10",
                "Open": "74.989998",
                "High": "77.610001",
                "Low": "73.900002",
                "Close": "75.529999",
                "Volume": "6465300",
                "Adj_Close": "75.529999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-09",
                "Open": "74.760002",
                "High": "77.190002",
                "Low": "73.040001",
                "Close": "73.849998",
                "Volume": "6697400",
                "Adj_Close": "73.849998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-08",
                "Open": "77.400002",
                "High": "78.330002",
                "Low": "71.269997",
                "Close": "74.940002",
                "Volume": "12910000",
                "Adj_Close": "74.940002"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-05",
                "Open": "85.50",
                "High": "85.50",
                "Low": "77.830002",
                "Close": "79.199997",
                "Volume": "10644200",
                "Adj_Close": "79.199997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-04",
                "Open": "87.82",
                "High": "87.970001",
                "Low": "85.779999",
                "Close": "86.360001",
                "Volume": "3417400",
                "Adj_Close": "86.360001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-03",
                "Open": "88.910004",
                "High": "89.25",
                "Low": "86.669998",
                "Close": "87.989998",
                "Volume": "3185700",
                "Adj_Close": "87.989998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-02",
                "Open": "88.709999",
                "High": "89.019997",
                "Low": "87.639999",
                "Close": "87.949997",
                "Volume": "3070900",
                "Adj_Close": "87.949997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-02-01",
                "Open": "88.160004",
                "High": "90.239998",
                "Low": "87.900002",
                "Close": "89.610001",
                "Volume": "2893100",
                "Adj_Close": "89.610001"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-29",
                "Open": "85.550003",
                "High": "89.129997",
                "Low": "85.120003",
                "Close": "89.129997",
                "Volume": "4679500",
                "Adj_Close": "89.129997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-28",
                "Open": "85.540001",
                "High": "85.739998",
                "Low": "82.699997",
                "Close": "84.519997",
                "Volume": "5315500",
                "Adj_Close": "84.519997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-27",
                "Open": "87.269997",
                "High": "87.830002",
                "Low": "84.510002",
                "Close": "84.849998",
                "Volume": "3070600",
                "Adj_Close": "84.849998"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-26",
                "Open": "87.260002",
                "High": "87.580002",
                "Low": "85.470001",
                "Close": "86.889999",
                "Volume": "2745700",
                "Adj_Close": "86.889999"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-25",
                "Open": "88.389999",
                "High": "89.260002",
                "Low": "86.629997",
                "Close": "86.769997",
                "Volume": "3945000",
                "Adj_Close": "86.769997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-22",
                "Open": "89.550003",
                "High": "89.93",
                "Low": "88.480003",
                "Close": "89.629997",
                "Volume": "5390100",
                "Adj_Close": "89.629997"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-21",
                "Open": "88.639999",
                "High": "89.93",
                "Low": "87.139999",
                "Close": "88.00",
                "Volume": "4298700",
                "Adj_Close": "88.00"
            },
            {
                "Symbol": "ADBE",
                "Date": "2016-01-20",
                "Open": "87.690002",
                "High": "88.760002",
                "Low": "84.669998",
                "Close": "87.940002",
                "Volume": "3667200",
                "Adj_Close": "87.940002"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-20",
                "Open": "45.75",
                "High": "45.77",
                "Low": "45.389999",
                "Close": "45.509998",
                "Volume": "8478200",
                "Adj_Close": "44.762767"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-19",
                "Open": "45.459999",
                "High": "45.709999",
                "Low": "45.43",
                "Close": "45.630001",
                "Volume": "7761100",
                "Adj_Close": "44.8808"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-18",
                "Open": "45.689999",
                "High": "45.700001",
                "Low": "45.48",
                "Close": "45.630001",
                "Volume": "7958300",
                "Adj_Close": "44.8808"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-15",
                "Open": "45.880001",
                "High": "45.900002",
                "Low": "45.439999",
                "Close": "45.630001",
                "Volume": "10621000",
                "Adj_Close": "44.8808"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-14",
                "Open": "45.73",
                "High": "45.939999",
                "Low": "45.580002",
                "Close": "45.689999",
                "Volume": "7621200",
                "Adj_Close": "44.939812"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-13",
                "Open": "45.610001",
                "High": "45.759998",
                "Low": "45.43",
                "Close": "45.740002",
                "Volume": "8028400",
                "Adj_Close": "44.988994"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-12",
                "Open": "45.639999",
                "High": "45.709999",
                "Low": "45.18",
                "Close": "45.580002",
                "Volume": "9739000",
                "Adj_Close": "44.831621"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-11",
                "Open": "45.349998",
                "High": "45.77",
                "Low": "45.110001",
                "Close": "45.57",
                "Volume": "10937800",
                "Adj_Close": "44.821783"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-08",
                "Open": "45.299999",
                "High": "45.52",
                "Low": "45.07",
                "Close": "45.380001",
                "Volume": "11127100",
                "Adj_Close": "44.634904"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-07",
                "Open": "45.419998",
                "High": "45.52",
                "Low": "44.970001",
                "Close": "45.09",
                "Volume": "9741100",
                "Adj_Close": "44.349665"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-06",
                "Open": "45.50",
                "High": "45.549999",
                "Low": "44.919998",
                "Close": "45.27",
                "Volume": "10902600",
                "Adj_Close": "44.52671"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-05",
                "Open": "45.16",
                "High": "45.669998",
                "Low": "45.150002",
                "Close": "45.43",
                "Volume": "12339100",
                "Adj_Close": "44.684083"
            },
            {
                "Symbol": "KO",
                "Date": "2016-07-01",
                "Open": "45.330002",
                "High": "45.41",
                "Low": "45.07",
                "Close": "45.119999",
                "Volume": "11799700",
                "Adj_Close": "44.379171"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-30",
                "Open": "44.52",
                "High": "45.330002",
                "Low": "44.490002",
                "Close": "45.330002",
                "Volume": "16056500",
                "Adj_Close": "44.585726"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-29",
                "Open": "44.389999",
                "High": "44.709999",
                "Low": "44.240002",
                "Close": "44.439999",
                "Volume": "12250900",
                "Adj_Close": "43.710336"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-28",
                "Open": "44.060001",
                "High": "44.189999",
                "Low": "43.669998",
                "Close": "44.18",
                "Volume": "16509800",
                "Adj_Close": "43.454607"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-27",
                "Open": "43.669998",
                "High": "43.889999",
                "Low": "43.32",
                "Close": "43.779999",
                "Volume": "15779500",
                "Adj_Close": "43.061173"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-24",
                "Open": "44.200001",
                "High": "44.560001",
                "Low": "43.82",
                "Close": "43.93",
                "Volume": "26003700",
                "Adj_Close": "43.208711"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-23",
                "Open": "45.029999",
                "High": "45.169998",
                "Low": "44.84",
                "Close": "45.080002",
                "Volume": "9655300",
                "Adj_Close": "44.339831"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-22",
                "Open": "45.25",
                "High": "45.330002",
                "Low": "44.810001",
                "Close": "44.860001",
                "Volume": "10738900",
                "Adj_Close": "44.123442"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-21",
                "Open": "45.16",
                "High": "45.279999",
                "Low": "45.00",
                "Close": "45.130001",
                "Volume": "7919400",
                "Adj_Close": "44.389009"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-20",
                "Open": "45.09",
                "High": "45.310001",
                "Low": "44.959999",
                "Close": "44.98",
                "Volume": "10712400",
                "Adj_Close": "44.241471"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-17",
                "Open": "45.169998",
                "High": "45.220001",
                "Low": "44.380001",
                "Close": "44.790001",
                "Volume": "20805400",
                "Adj_Close": "44.054592"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-16",
                "Open": "44.869999",
                "High": "45.34",
                "Low": "44.720001",
                "Close": "45.310001",
                "Volume": "11305400",
                "Adj_Close": "44.566054"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-15",
                "Open": "45.119999",
                "High": "45.34",
                "Low": "44.880001",
                "Close": "45.009998",
                "Volume": "8360400",
                "Adj_Close": "44.270977"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-14",
                "Open": "44.849998",
                "High": "45.130001",
                "Low": "44.439999",
                "Close": "45.040001",
                "Volume": "11298200",
                "Adj_Close": "44.300487"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-13",
                "Open": "45.48",
                "High": "45.669998",
                "Low": "45.09",
                "Close": "45.119999",
                "Volume": "10613500",
                "Adj_Close": "44.379171"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-10",
                "Open": "45.619999",
                "High": "46.009998",
                "Low": "45.560001",
                "Close": "45.990002",
                "Volume": "12357000",
                "Adj_Close": "44.890636"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-09",
                "Open": "45.330002",
                "High": "45.799999",
                "Low": "45.310001",
                "Close": "45.759998",
                "Volume": "8042900",
                "Adj_Close": "44.666131"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-08",
                "Open": "45.240002",
                "High": "45.66",
                "Low": "45.189999",
                "Close": "45.549999",
                "Volume": "7915400",
                "Adj_Close": "44.461152"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-07",
                "Open": "45.349998",
                "High": "45.48",
                "Low": "45.200001",
                "Close": "45.32",
                "Volume": "9812600",
                "Adj_Close": "44.23665"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-06",
                "Open": "45.09",
                "High": "45.48",
                "Low": "45.080002",
                "Close": "45.369999",
                "Volume": "10310600",
                "Adj_Close": "44.285454"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-03",
                "Open": "44.75",
                "High": "45.049999",
                "Low": "44.68",
                "Close": "45.040001",
                "Volume": "13425700",
                "Adj_Close": "43.963345"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-02",
                "Open": "44.700001",
                "High": "44.720001",
                "Low": "44.50",
                "Close": "44.720001",
                "Volume": "6693900",
                "Adj_Close": "43.650995"
            },
            {
                "Symbol": "KO",
                "Date": "2016-06-01",
                "Open": "44.599998",
                "High": "44.779999",
                "Low": "44.490002",
                "Close": "44.700001",
                "Volume": "8916000",
                "Adj_Close": "43.631472"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-31",
                "Open": "44.98",
                "High": "44.98",
                "Low": "44.259998",
                "Close": "44.599998",
                "Volume": "18935200",
                "Adj_Close": "43.53386"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-27",
                "Open": "44.709999",
                "High": "44.959999",
                "Low": "44.650002",
                "Close": "44.779999",
                "Volume": "7802200",
                "Adj_Close": "43.709558"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-26",
                "Open": "44.529999",
                "High": "44.77",
                "Low": "44.439999",
                "Close": "44.689999",
                "Volume": "8695800",
                "Adj_Close": "43.621709"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-25",
                "Open": "44.509998",
                "High": "44.630001",
                "Low": "44.25",
                "Close": "44.380001",
                "Volume": "9218100",
                "Adj_Close": "43.319122"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-24",
                "Open": "44.099998",
                "High": "44.419998",
                "Low": "44.00",
                "Close": "44.369999",
                "Volume": "12634200",
                "Adj_Close": "43.309359"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-23",
                "Open": "44.07",
                "High": "44.16",
                "Low": "43.939999",
                "Close": "43.970001",
                "Volume": "13554700",
                "Adj_Close": "42.918923"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-20",
                "Open": "44.509998",
                "High": "44.540001",
                "Low": "43.939999",
                "Close": "43.950001",
                "Volume": "12914100",
                "Adj_Close": "42.8994"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-19",
                "Open": "44.25",
                "High": "44.389999",
                "Low": "44.040001",
                "Close": "44.32",
                "Volume": "10659500",
                "Adj_Close": "43.260555"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-18",
                "Open": "44.560001",
                "High": "44.830002",
                "Low": "44.23",
                "Close": "44.48",
                "Volume": "12524300",
                "Adj_Close": "43.41673"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-17",
                "Open": "45.450001",
                "High": "45.560001",
                "Low": "44.709999",
                "Close": "44.75",
                "Volume": "17457000",
                "Adj_Close": "43.680276"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-16",
                "Open": "45.16",
                "High": "45.73",
                "Low": "45.139999",
                "Close": "45.619999",
                "Volume": "9413600",
                "Adj_Close": "44.529478"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-13",
                "Open": "45.75",
                "High": "45.830002",
                "Low": "45.23",
                "Close": "45.349998",
                "Volume": "10341200",
                "Adj_Close": "44.265932"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-12",
                "Open": "45.549999",
                "High": "45.900002",
                "Low": "45.490002",
                "Close": "45.830002",
                "Volume": "10463400",
                "Adj_Close": "44.734461"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-11",
                "Open": "45.73",
                "High": "45.880001",
                "Low": "45.450001",
                "Close": "45.459999",
                "Volume": "8833100",
                "Adj_Close": "44.373303"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-10",
                "Open": "45.439999",
                "High": "45.84",
                "Low": "45.419998",
                "Close": "45.75",
                "Volume": "8933500",
                "Adj_Close": "44.656372"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-09",
                "Open": "45.32",
                "High": "45.50",
                "Low": "45.169998",
                "Close": "45.240002",
                "Volume": "8110600",
                "Adj_Close": "44.158565"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-06",
                "Open": "45.060001",
                "High": "45.41",
                "Low": "44.919998",
                "Close": "45.32",
                "Volume": "8524300",
                "Adj_Close": "44.23665"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-05",
                "Open": "44.93",
                "High": "45.490002",
                "Low": "44.869999",
                "Close": "45.060001",
                "Volume": "8801100",
                "Adj_Close": "43.982867"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-04",
                "Open": "44.720001",
                "High": "45.110001",
                "Low": "44.509998",
                "Close": "44.98",
                "Volume": "9350500",
                "Adj_Close": "43.904778"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-03",
                "Open": "44.869999",
                "High": "45.07",
                "Low": "44.650002",
                "Close": "44.84",
                "Volume": "10330700",
                "Adj_Close": "43.768125"
            },
            {
                "Symbol": "KO",
                "Date": "2016-05-02",
                "Open": "44.57",
                "High": "45.189999",
                "Low": "44.57",
                "Close": "44.98",
                "Volume": "12577500",
                "Adj_Close": "43.904778"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-29",
                "Open": "44.529999",
                "High": "44.860001",
                "Low": "44.50",
                "Close": "44.799999",
                "Volume": "11716000",
                "Adj_Close": "43.72908"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-28",
                "Open": "44.50",
                "High": "44.900002",
                "Low": "44.459999",
                "Close": "44.630001",
                "Volume": "10932500",
                "Adj_Close": "43.563146"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-27",
                "Open": "44.639999",
                "High": "44.860001",
                "Low": "44.25",
                "Close": "44.68",
                "Volume": "11335500",
                "Adj_Close": "43.61195"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-26",
                "Open": "44.919998",
                "High": "44.959999",
                "Low": "44.43",
                "Close": "44.529999",
                "Volume": "13935500",
                "Adj_Close": "43.465534"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-25",
                "Open": "44.50",
                "High": "44.720001",
                "Low": "44.380001",
                "Close": "44.709999",
                "Volume": "11173800",
                "Adj_Close": "43.641231"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-22",
                "Open": "43.790001",
                "High": "44.66",
                "Low": "43.790001",
                "Close": "44.540001",
                "Volume": "25134200",
                "Adj_Close": "43.475297"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-21",
                "Open": "44.259998",
                "High": "44.279999",
                "Low": "42.869999",
                "Close": "43.66",
                "Volume": "37206900",
                "Adj_Close": "42.616332"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-20",
                "Open": "45.34",
                "High": "45.380001",
                "Low": "44.060001",
                "Close": "44.369999",
                "Volume": "40360300",
                "Adj_Close": "43.309359"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-19",
                "Open": "46.310001",
                "High": "46.619999",
                "Low": "46.150002",
                "Close": "46.599998",
                "Volume": "14418300",
                "Adj_Close": "45.486051"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-18",
                "Open": "46.099998",
                "High": "46.279999",
                "Low": "45.82",
                "Close": "46.220001",
                "Volume": "11482300",
                "Adj_Close": "45.115138"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-15",
                "Open": "45.82",
                "High": "46.16",
                "Low": "45.68",
                "Close": "46.099998",
                "Volume": "13647800",
                "Adj_Close": "44.998004"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-14",
                "Open": "46.060001",
                "High": "46.220001",
                "Low": "45.75",
                "Close": "45.830002",
                "Volume": "12982200",
                "Adj_Close": "44.734461"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-13",
                "Open": "46.77",
                "High": "46.779999",
                "Low": "45.82",
                "Close": "46.040001",
                "Volume": "13234100",
                "Adj_Close": "44.93944"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-12",
                "Open": "46.41",
                "High": "46.759998",
                "Low": "46.349998",
                "Close": "46.650002",
                "Volume": "11219100",
                "Adj_Close": "45.534859"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-11",
                "Open": "46.900002",
                "High": "47.130001",
                "Low": "46.41",
                "Close": "46.439999",
                "Volume": "11880100",
                "Adj_Close": "45.329876"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-08",
                "Open": "46.439999",
                "High": "46.98",
                "Low": "46.439999",
                "Close": "46.869999",
                "Volume": "11959300",
                "Adj_Close": "45.749598"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-07",
                "Open": "46.50",
                "High": "46.580002",
                "Low": "46.16",
                "Close": "46.360001",
                "Volume": "9292000",
                "Adj_Close": "45.251791"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-06",
                "Open": "46.57",
                "High": "46.73",
                "Low": "46.380001",
                "Close": "46.709999",
                "Volume": "9122700",
                "Adj_Close": "45.593423"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-05",
                "Open": "46.619999",
                "High": "46.810001",
                "Low": "46.439999",
                "Close": "46.529999",
                "Volume": "10696700",
                "Adj_Close": "45.417725"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-04",
                "Open": "46.84",
                "High": "46.93",
                "Low": "46.50",
                "Close": "46.889999",
                "Volume": "10629800",
                "Adj_Close": "45.76912"
            },
            {
                "Symbol": "KO",
                "Date": "2016-04-01",
                "Open": "46.139999",
                "High": "46.869999",
                "Low": "46.110001",
                "Close": "46.830002",
                "Volume": "14922900",
                "Adj_Close": "45.710557"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-31",
                "Open": "46.549999",
                "High": "46.880001",
                "Low": "46.32",
                "Close": "46.389999",
                "Volume": "15544500",
                "Adj_Close": "45.281072"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-30",
                "Open": "46.630001",
                "High": "46.73",
                "Low": "46.330002",
                "Close": "46.580002",
                "Volume": "14312200",
                "Adj_Close": "45.466533"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-29",
                "Open": "45.860001",
                "High": "46.509998",
                "Low": "45.810001",
                "Close": "46.48",
                "Volume": "25010400",
                "Adj_Close": "45.368921"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-28",
                "Open": "45.560001",
                "High": "45.93",
                "Low": "45.509998",
                "Close": "45.799999",
                "Volume": "13306600",
                "Adj_Close": "44.705176"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-24",
                "Open": "45.450001",
                "High": "45.599998",
                "Low": "45.189999",
                "Close": "45.580002",
                "Volume": "10890200",
                "Adj_Close": "44.490437"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-23",
                "Open": "45.400002",
                "High": "45.709999",
                "Low": "45.349998",
                "Close": "45.459999",
                "Volume": "9292100",
                "Adj_Close": "44.373303"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-22",
                "Open": "45.549999",
                "High": "45.73",
                "Low": "45.389999",
                "Close": "45.50",
                "Volume": "13788300",
                "Adj_Close": "44.412348"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-21",
                "Open": "45.419998",
                "High": "45.869999",
                "Low": "45.360001",
                "Close": "45.669998",
                "Volume": "9740400",
                "Adj_Close": "44.578282"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-18",
                "Open": "45.84",
                "High": "45.869999",
                "Low": "45.389999",
                "Close": "45.599998",
                "Volume": "23853400",
                "Adj_Close": "44.509956"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-17",
                "Open": "45.049999",
                "High": "45.91",
                "Low": "44.970001",
                "Close": "45.77",
                "Volume": "24080000",
                "Adj_Close": "44.675894"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-16",
                "Open": "45.049999",
                "High": "45.169998",
                "Low": "44.549999",
                "Close": "45.049999",
                "Volume": "15386100",
                "Adj_Close": "43.973104"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-15",
                "Open": "45.080002",
                "High": "45.560001",
                "Low": "45.07",
                "Close": "45.240002",
                "Volume": "13686300",
                "Adj_Close": "44.158565"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-14",
                "Open": "45.040001",
                "High": "45.419998",
                "Low": "45.040001",
                "Close": "45.290001",
                "Volume": "13206700",
                "Adj_Close": "44.207369"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-11",
                "Open": "45.00",
                "High": "45.25",
                "Low": "44.93",
                "Close": "45.200001",
                "Volume": "16129300",
                "Adj_Close": "44.11952"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-10",
                "Open": "44.84",
                "High": "45.259998",
                "Low": "44.68",
                "Close": "45.23",
                "Volume": "28908600",
                "Adj_Close": "43.807169"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-09",
                "Open": "44.389999",
                "High": "44.830002",
                "Low": "44.290001",
                "Close": "44.810001",
                "Volume": "18466600",
                "Adj_Close": "43.400383"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-08",
                "Open": "43.919998",
                "High": "44.470001",
                "Low": "43.810001",
                "Close": "44.32",
                "Volume": "18900200",
                "Adj_Close": "42.925796"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-07",
                "Open": "43.91",
                "High": "44.139999",
                "Low": "43.860001",
                "Close": "44.009998",
                "Volume": "10695300",
                "Adj_Close": "42.625547"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-04",
                "Open": "43.779999",
                "High": "44.150002",
                "Low": "43.68",
                "Close": "44.110001",
                "Volume": "13691500",
                "Adj_Close": "42.722403"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-03",
                "Open": "43.610001",
                "High": "43.98",
                "Low": "43.540001",
                "Close": "43.959999",
                "Volume": "13134800",
                "Adj_Close": "42.57712"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-02",
                "Open": "43.470001",
                "High": "43.77",
                "Low": "43.419998",
                "Close": "43.77",
                "Volume": "12856300",
                "Adj_Close": "42.393099"
            },
            {
                "Symbol": "KO",
                "Date": "2016-03-01",
                "Open": "43.380001",
                "High": "43.689999",
                "Low": "43.169998",
                "Close": "43.689999",
                "Volume": "12358300",
                "Adj_Close": "42.315613"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-29",
                "Open": "43.169998",
                "High": "43.610001",
                "Low": "42.919998",
                "Close": "43.130001",
                "Volume": "15049800",
                "Adj_Close": "41.773232"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-26",
                "Open": "44.040001",
                "High": "44.060001",
                "Low": "43.110001",
                "Close": "43.139999",
                "Volume": "18421000",
                "Adj_Close": "41.782916"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-25",
                "Open": "43.959999",
                "High": "44.18",
                "Low": "43.869999",
                "Close": "44.16",
                "Volume": "10903300",
                "Adj_Close": "42.770829"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-24",
                "Open": "43.560001",
                "High": "43.939999",
                "Low": "43.369999",
                "Close": "43.91",
                "Volume": "10844200",
                "Adj_Close": "42.528694"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-23",
                "Open": "43.740002",
                "High": "44.049999",
                "Low": "43.66",
                "Close": "43.689999",
                "Volume": "11166400",
                "Adj_Close": "42.315613"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-22",
                "Open": "43.77",
                "High": "44.16",
                "Low": "43.630001",
                "Close": "43.939999",
                "Volume": "20716100",
                "Adj_Close": "42.557749"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-19",
                "Open": "43.580002",
                "High": "43.77",
                "Low": "43.279999",
                "Close": "43.77",
                "Volume": "12850000",
                "Adj_Close": "42.393099"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-18",
                "Open": "43.630001",
                "High": "43.73",
                "Low": "43.299999",
                "Close": "43.610001",
                "Volume": "11170300",
                "Adj_Close": "42.238132"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-17",
                "Open": "43.419998",
                "High": "43.619999",
                "Low": "43.279999",
                "Close": "43.490002",
                "Volume": "12332500",
                "Adj_Close": "42.121908"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-16",
                "Open": "43.32",
                "High": "43.459999",
                "Low": "43.02",
                "Close": "43.360001",
                "Volume": "12675900",
                "Adj_Close": "41.995996"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-12",
                "Open": "42.720001",
                "High": "43.139999",
                "Low": "42.560001",
                "Close": "43.110001",
                "Volume": "15222400",
                "Adj_Close": "41.753861"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-11",
                "Open": "42.029999",
                "High": "42.610001",
                "Low": "41.98",
                "Close": "42.41",
                "Volume": "16825300",
                "Adj_Close": "41.07588"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-10",
                "Open": "43.34",
                "High": "43.389999",
                "Low": "42.509998",
                "Close": "42.549999",
                "Volume": "16729600",
                "Adj_Close": "41.211476"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-09",
                "Open": "42.259998",
                "High": "43.490002",
                "Low": "42.259998",
                "Close": "43.299999",
                "Volume": "24853800",
                "Adj_Close": "41.937882"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-08",
                "Open": "42.169998",
                "High": "42.700001",
                "Low": "41.900002",
                "Close": "42.650002",
                "Volume": "17254400",
                "Adj_Close": "41.308332"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-05",
                "Open": "42.93",
                "High": "42.990002",
                "Low": "42.259998",
                "Close": "42.439999",
                "Volume": "17315700",
                "Adj_Close": "41.104935"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-04",
                "Open": "42.52",
                "High": "42.889999",
                "Low": "42.400002",
                "Close": "42.529999",
                "Volume": "14413700",
                "Adj_Close": "41.192104"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-03",
                "Open": "42.799999",
                "High": "42.939999",
                "Low": "42.279999",
                "Close": "42.720001",
                "Volume": "15958300",
                "Adj_Close": "41.37613"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-02",
                "Open": "42.700001",
                "High": "42.790001",
                "Low": "42.41",
                "Close": "42.439999",
                "Volume": "12332900",
                "Adj_Close": "41.104935"
            },
            {
                "Symbol": "KO",
                "Date": "2016-02-01",
                "Open": "42.599998",
                "High": "43.150002",
                "Low": "42.57",
                "Close": "43.00",
                "Volume": "17097800",
                "Adj_Close": "41.647321"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-29",
                "Open": "42.860001",
                "High": "43.259998",
                "Low": "42.650002",
                "Close": "42.919998",
                "Volume": "20457000",
                "Adj_Close": "41.569835"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-28",
                "Open": "42.18",
                "High": "42.720001",
                "Low": "42.060001",
                "Close": "42.57",
                "Volume": "16622800",
                "Adj_Close": "41.230847"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-27",
                "Open": "42.18",
                "High": "42.459999",
                "Low": "41.810001",
                "Close": "42.09",
                "Volume": "14167000",
                "Adj_Close": "40.765947"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-26",
                "Open": "42.16",
                "High": "42.50",
                "Low": "41.93",
                "Close": "42.080002",
                "Volume": "13018500",
                "Adj_Close": "40.756263"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-25",
                "Open": "42.240002",
                "High": "42.50",
                "Low": "41.93",
                "Close": "42.16",
                "Volume": "12505200",
                "Adj_Close": "40.833745"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-22",
                "Open": "41.639999",
                "High": "42.240002",
                "Low": "41.450001",
                "Close": "42.060001",
                "Volume": "15209200",
                "Adj_Close": "40.736892"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-21",
                "Open": "41.450001",
                "High": "41.509998",
                "Low": "41.09",
                "Close": "41.389999",
                "Volume": "15568900",
                "Adj_Close": "40.087967"
            },
            {
                "Symbol": "KO",
                "Date": "2016-01-20",
                "Open": "41.450001",
                "High": "41.619999",
                "Low": "40.75",
                "Close": "41.380001",
                "Volume": "19923500",
                "Adj_Close": "40.078283"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-20",
                "Open": "11.49",
                "High": "11.58",
                "Low": "11.40",
                "Close": "11.57",
                "Volume": "2932500",
                "Adj_Close": "11.57"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-19",
                "Open": "11.31",
                "High": "11.44",
                "Low": "11.29",
                "Close": "11.32",
                "Volume": "2524400",
                "Adj_Close": "11.32"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-18",
                "Open": "11.34",
                "High": "11.49",
                "Low": "11.27",
                "Close": "11.44",
                "Volume": "3056400",
                "Adj_Close": "11.44"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-15",
                "Open": "11.34",
                "High": "11.34",
                "Low": "11.23",
                "Close": "11.33",
                "Volume": "2840400",
                "Adj_Close": "11.33"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-14",
                "Open": "11.15",
                "High": "11.37",
                "Low": "11.12",
                "Close": "11.28",
                "Volume": "6683700",
                "Adj_Close": "11.28"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-13",
                "Open": "11.04",
                "High": "11.04",
                "Low": "10.77",
                "Close": "10.87",
                "Volume": "12970900",
                "Adj_Close": "10.87"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-12",
                "Open": "10.97",
                "High": "11.11",
                "Low": "10.90",
                "Close": "11.07",
                "Volume": "14063900",
                "Adj_Close": "11.07"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-11",
                "Open": "10.61",
                "High": "10.85",
                "Low": "10.59",
                "Close": "10.76",
                "Volume": "4835800",
                "Adj_Close": "10.76"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-08",
                "Open": "10.48",
                "High": "10.50",
                "Low": "10.32",
                "Close": "10.46",
                "Volume": "4672000",
                "Adj_Close": "10.46"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-07",
                "Open": "10.40",
                "High": "10.53",
                "Low": "10.10",
                "Close": "10.21",
                "Volume": "4893900",
                "Adj_Close": "10.21"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-06",
                "Open": "10.16",
                "High": "10.33",
                "Low": "10.01",
                "Close": "10.32",
                "Volume": "4788500",
                "Adj_Close": "10.32"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-05",
                "Open": "10.49",
                "High": "10.51",
                "Low": "10.23",
                "Close": "10.27",
                "Volume": "5821000",
                "Adj_Close": "10.27"
            },
            {
                "Symbol": "CS",
                "Date": "2016-07-01",
                "Open": "10.79",
                "High": "10.90",
                "Low": "10.76",
                "Close": "10.87",
                "Volume": "6760000",
                "Adj_Close": "10.87"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-30",
                "Open": "10.60",
                "High": "10.78",
                "Low": "10.50",
                "Close": "10.70",
                "Volume": "7374900",
                "Adj_Close": "10.70"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-29",
                "Open": "10.49",
                "High": "10.66",
                "Low": "10.43",
                "Close": "10.64",
                "Volume": "14492300",
                "Adj_Close": "10.64"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-28",
                "Open": "10.55",
                "High": "10.66",
                "Low": "10.41",
                "Close": "10.55",
                "Volume": "11414100",
                "Adj_Close": "10.55"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-27",
                "Open": "10.59",
                "High": "10.67",
                "Low": "10.39",
                "Close": "10.50",
                "Volume": "17287100",
                "Adj_Close": "10.50"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-24",
                "Open": "11.59",
                "High": "11.86",
                "Low": "11.44",
                "Close": "11.51",
                "Volume": "17461700",
                "Adj_Close": "11.51"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-23",
                "Open": "13.54",
                "High": "13.75",
                "Low": "13.42",
                "Close": "13.72",
                "Volume": "4731700",
                "Adj_Close": "13.72"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-22",
                "Open": "13.35",
                "High": "13.44",
                "Low": "13.10",
                "Close": "13.12",
                "Volume": "4893200",
                "Adj_Close": "13.12"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-21",
                "Open": "13.01",
                "High": "13.13",
                "Low": "12.86",
                "Close": "13.07",
                "Volume": "2680200",
                "Adj_Close": "13.07"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-20",
                "Open": "12.95",
                "High": "13.05",
                "Low": "12.83",
                "Close": "12.84",
                "Volume": "4241400",
                "Adj_Close": "12.84"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-17",
                "Open": "12.31",
                "High": "12.62",
                "Low": "12.28",
                "Close": "12.55",
                "Volume": "5665600",
                "Adj_Close": "12.55"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-16",
                "Open": "11.66",
                "High": "12.09",
                "Low": "11.59",
                "Close": "12.08",
                "Volume": "6286800",
                "Adj_Close": "12.08"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-15",
                "Open": "12.05",
                "High": "12.19",
                "Low": "11.91",
                "Close": "11.92",
                "Volume": "5231100",
                "Adj_Close": "11.92"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-14",
                "Open": "12.01",
                "High": "12.07",
                "Low": "11.70",
                "Close": "11.80",
                "Volume": "6155200",
                "Adj_Close": "11.80"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-13",
                "Open": "12.07",
                "High": "12.40",
                "Low": "12.05",
                "Close": "12.09",
                "Volume": "6519500",
                "Adj_Close": "12.09"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-10",
                "Open": "12.57",
                "High": "12.65",
                "Low": "12.38",
                "Close": "12.43",
                "Volume": "5383800",
                "Adj_Close": "12.43"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-09",
                "Open": "13.13",
                "High": "13.16",
                "Low": "12.97",
                "Close": "13.00",
                "Volume": "4600200",
                "Adj_Close": "13.00"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-08",
                "Open": "13.51",
                "High": "13.61",
                "Low": "13.42",
                "Close": "13.46",
                "Volume": "1969600",
                "Adj_Close": "13.46"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-07",
                "Open": "13.47",
                "High": "13.56",
                "Low": "13.45",
                "Close": "13.47",
                "Volume": "2526700",
                "Adj_Close": "13.47"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-06",
                "Open": "13.22",
                "High": "13.40",
                "Low": "13.22",
                "Close": "13.37",
                "Volume": "3412600",
                "Adj_Close": "13.37"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-03",
                "Open": "13.52",
                "High": "13.53",
                "Low": "13.27",
                "Close": "13.35",
                "Volume": "5416100",
                "Adj_Close": "13.35"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-02",
                "Open": "13.51",
                "High": "13.66",
                "Low": "13.47",
                "Close": "13.65",
                "Volume": "2633500",
                "Adj_Close": "13.65"
            },
            {
                "Symbol": "CS",
                "Date": "2016-06-01",
                "Open": "13.47",
                "High": "13.55",
                "Low": "13.37",
                "Close": "13.51",
                "Volume": "4156900",
                "Adj_Close": "13.51"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-31",
                "Open": "13.82",
                "High": "13.91",
                "Low": "13.61",
                "Close": "13.68",
                "Volume": "4275200",
                "Adj_Close": "13.68"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-27",
                "Open": "14.27",
                "High": "14.38",
                "Low": "14.22",
                "Close": "14.30",
                "Volume": "2858400",
                "Adj_Close": "14.30"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-26",
                "Open": "14.38",
                "High": "14.43",
                "Low": "14.27",
                "Close": "14.32",
                "Volume": "2386800",
                "Adj_Close": "14.32"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-25",
                "Open": "14.32",
                "High": "14.44",
                "Low": "14.28",
                "Close": "14.37",
                "Volume": "3203500",
                "Adj_Close": "14.37"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-24",
                "Open": "13.95",
                "High": "14.13",
                "Low": "13.94",
                "Close": "14.10",
                "Volume": "2389400",
                "Adj_Close": "14.10"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-23",
                "Open": "13.71",
                "High": "13.84",
                "Low": "13.67",
                "Close": "13.78",
                "Volume": "3136700",
                "Adj_Close": "13.78"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-20",
                "Open": "13.63",
                "High": "13.73",
                "Low": "13.61",
                "Close": "13.70",
                "Volume": "3672200",
                "Adj_Close": "13.70"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-19",
                "Open": "13.22",
                "High": "13.63",
                "Low": "13.22",
                "Close": "13.46",
                "Volume": "5211900",
                "Adj_Close": "13.46"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-18",
                "Open": "12.82",
                "High": "13.26",
                "Low": "12.82",
                "Close": "13.22",
                "Volume": "4998700",
                "Adj_Close": "13.22"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-17",
                "Open": "12.77",
                "High": "12.98",
                "Low": "12.70",
                "Close": "12.81",
                "Volume": "3675800",
                "Adj_Close": "12.81"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-16",
                "Open": "12.85",
                "High": "12.97",
                "Low": "12.81",
                "Close": "12.86",
                "Volume": "2736400",
                "Adj_Close": "12.86"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-13",
                "Open": "13.10",
                "High": "13.20",
                "Low": "12.80",
                "Close": "12.85",
                "Volume": "3726900",
                "Adj_Close": "12.85"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-12",
                "Open": "13.24",
                "High": "13.36",
                "Low": "13.06",
                "Close": "13.14",
                "Volume": "4696200",
                "Adj_Close": "13.14"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-11",
                "Open": "13.26",
                "High": "13.51",
                "Low": "13.22",
                "Close": "13.37",
                "Volume": "5225600",
                "Adj_Close": "13.37"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-10",
                "Open": "13.53",
                "High": "13.92",
                "Low": "13.51",
                "Close": "13.90",
                "Volume": "4643900",
                "Adj_Close": "13.90"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-09",
                "Open": "13.89",
                "High": "14.10",
                "Low": "13.79",
                "Close": "14.07",
                "Volume": "5473300",
                "Adj_Close": "13.336"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-06",
                "Open": "13.62",
                "High": "14.01",
                "Low": "13.62",
                "Close": "14.00",
                "Volume": "5198300",
                "Adj_Close": "13.269652"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-05",
                "Open": "14.32",
                "High": "14.34",
                "Low": "14.04",
                "Close": "14.09",
                "Volume": "2361800",
                "Adj_Close": "13.354957"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-04",
                "Open": "14.46",
                "High": "14.61",
                "Low": "14.20",
                "Close": "14.28",
                "Volume": "2957300",
                "Adj_Close": "13.535045"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-03",
                "Open": "14.60",
                "High": "14.66",
                "Low": "14.37",
                "Close": "14.56",
                "Volume": "4241700",
                "Adj_Close": "13.800438"
            },
            {
                "Symbol": "CS",
                "Date": "2016-05-02",
                "Open": "15.16",
                "High": "15.28",
                "Low": "15.03",
                "Close": "15.25",
                "Volume": "2583000",
                "Adj_Close": "14.454442"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-29",
                "Open": "15.26",
                "High": "15.36",
                "Low": "15.08",
                "Close": "15.21",
                "Volume": "3908200",
                "Adj_Close": "14.416529"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-28",
                "Open": "15.49",
                "High": "15.78",
                "Low": "15.43",
                "Close": "15.56",
                "Volume": "4051000",
                "Adj_Close": "14.748271"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-27",
                "Open": "15.29",
                "High": "15.53",
                "Low": "15.29",
                "Close": "15.51",
                "Volume": "4200600",
                "Adj_Close": "14.700879"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-26",
                "Open": "15.46",
                "High": "15.53",
                "Low": "15.35",
                "Close": "15.51",
                "Volume": "2982200",
                "Adj_Close": "14.700879"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-25",
                "Open": "15.38",
                "High": "15.39",
                "Low": "15.06",
                "Close": "15.21",
                "Volume": "2705300",
                "Adj_Close": "14.416529"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-22",
                "Open": "15.29",
                "High": "15.65",
                "Low": "15.28",
                "Close": "15.62",
                "Volume": "3401700",
                "Adj_Close": "14.80514"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-21",
                "Open": "15.79",
                "High": "15.80",
                "Low": "15.54",
                "Close": "15.59",
                "Volume": "3552000",
                "Adj_Close": "14.776705"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-20",
                "Open": "15.64",
                "High": "15.86",
                "Low": "15.58",
                "Close": "15.82",
                "Volume": "3958200",
                "Adj_Close": "14.994706"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-19",
                "Open": "15.35",
                "High": "15.52",
                "Low": "15.28",
                "Close": "15.42",
                "Volume": "2936200",
                "Adj_Close": "14.615574"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-18",
                "Open": "14.93",
                "High": "15.20",
                "Low": "14.89",
                "Close": "15.12",
                "Volume": "3018300",
                "Adj_Close": "14.331224"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-15",
                "Open": "14.85",
                "High": "14.96",
                "Low": "14.79",
                "Close": "14.89",
                "Volume": "2023300",
                "Adj_Close": "14.113223"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-14",
                "Open": "15.01",
                "High": "15.05",
                "Low": "14.84",
                "Close": "15.01",
                "Volume": "2387400",
                "Adj_Close": "14.226963"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-13",
                "Open": "14.94",
                "High": "15.11",
                "Low": "14.84",
                "Close": "15.08",
                "Volume": "3917300",
                "Adj_Close": "14.293311"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-12",
                "Open": "13.85",
                "High": "14.16",
                "Low": "13.68",
                "Close": "14.13",
                "Volume": "2916300",
                "Adj_Close": "13.39287"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-11",
                "Open": "13.91",
                "High": "14.00",
                "Low": "13.83",
                "Close": "13.84",
                "Volume": "2002700",
                "Adj_Close": "13.117999"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-08",
                "Open": "13.61",
                "High": "13.72",
                "Low": "13.52",
                "Close": "13.57",
                "Volume": "2418000",
                "Adj_Close": "12.862084"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-07",
                "Open": "13.36",
                "High": "13.44",
                "Low": "13.17",
                "Close": "13.19",
                "Volume": "2893800",
                "Adj_Close": "12.501907"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-06",
                "Open": "13.34",
                "High": "13.50",
                "Low": "13.26",
                "Close": "13.48",
                "Volume": "2498100",
                "Adj_Close": "12.776779"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-05",
                "Open": "13.52",
                "High": "13.52",
                "Low": "13.33",
                "Close": "13.35",
                "Volume": "5450100",
                "Adj_Close": "12.653561"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-04",
                "Open": "14.08",
                "High": "14.20",
                "Low": "13.95",
                "Close": "14.00",
                "Volume": "2737900",
                "Adj_Close": "13.269652"
            },
            {
                "Symbol": "CS",
                "Date": "2016-04-01",
                "Open": "14.01",
                "High": "14.08",
                "Low": "13.96",
                "Close": "14.06",
                "Volume": "2007700",
                "Adj_Close": "13.326522"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-31",
                "Open": "14.22",
                "High": "14.33",
                "Low": "14.11",
                "Close": "14.13",
                "Volume": "1897800",
                "Adj_Close": "13.39287"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-30",
                "Open": "14.19",
                "High": "14.36",
                "Low": "14.16",
                "Close": "14.22",
                "Volume": "2465200",
                "Adj_Close": "13.478175"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-29",
                "Open": "14.02",
                "High": "14.20",
                "Low": "13.93",
                "Close": "14.20",
                "Volume": "3056900",
                "Adj_Close": "13.459218"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-28",
                "Open": "14.39",
                "High": "14.47",
                "Low": "14.27",
                "Close": "14.41",
                "Volume": "1004200",
                "Adj_Close": "13.658263"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-24",
                "Open": "14.27",
                "High": "14.43",
                "Low": "14.22",
                "Close": "14.36",
                "Volume": "2767900",
                "Adj_Close": "13.610871"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-23",
                "Open": "15.03",
                "High": "15.12",
                "Low": "14.72",
                "Close": "14.72",
                "Volume": "2535500",
                "Adj_Close": "13.952092"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-22",
                "Open": "14.68",
                "High": "14.83",
                "Low": "14.62",
                "Close": "14.75",
                "Volume": "2198400",
                "Adj_Close": "13.980526"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-21",
                "Open": "15.18",
                "High": "15.26",
                "Low": "15.01",
                "Close": "15.04",
                "Volume": "2287600",
                "Adj_Close": "14.255398"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-18",
                "Open": "14.78",
                "High": "15.16",
                "Low": "14.78",
                "Close": "15.12",
                "Volume": "2428700",
                "Adj_Close": "14.331224"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-17",
                "Open": "14.49",
                "High": "14.91",
                "Low": "14.44",
                "Close": "14.78",
                "Volume": "2845300",
                "Adj_Close": "14.008961"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-16",
                "Open": "14.31",
                "High": "14.64",
                "Low": "14.31",
                "Close": "14.64",
                "Volume": "3368500",
                "Adj_Close": "13.876265"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-15",
                "Open": "15.19",
                "High": "15.33",
                "Low": "15.15",
                "Close": "15.31",
                "Volume": "2113400",
                "Adj_Close": "14.511313"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-14",
                "Open": "15.54",
                "High": "15.79",
                "Low": "15.49",
                "Close": "15.72",
                "Volume": "3181900",
                "Adj_Close": "14.899924"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-11",
                "Open": "15.61",
                "High": "15.93",
                "Low": "15.55",
                "Close": "15.93",
                "Volume": "3351000",
                "Adj_Close": "15.098969"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-10",
                "Open": "15.15",
                "High": "15.32",
                "Low": "14.73",
                "Close": "15.02",
                "Volume": "3086900",
                "Adj_Close": "14.236441"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-09",
                "Open": "15.15",
                "High": "15.19",
                "Low": "14.88",
                "Close": "14.96",
                "Volume": "1815600",
                "Adj_Close": "14.179571"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-08",
                "Open": "15.35",
                "High": "15.37",
                "Low": "15.01",
                "Close": "15.04",
                "Volume": "3033800",
                "Adj_Close": "14.255398"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-07",
                "Open": "15.30",
                "High": "15.53",
                "Low": "15.17",
                "Close": "15.48",
                "Volume": "2196800",
                "Adj_Close": "14.672443"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-04",
                "Open": "15.32",
                "High": "15.61",
                "Low": "15.30",
                "Close": "15.44",
                "Volume": "3101600",
                "Adj_Close": "14.63453"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-03",
                "Open": "15.46",
                "High": "15.56",
                "Low": "15.35",
                "Close": "15.54",
                "Volume": "3505400",
                "Adj_Close": "14.729314"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-02",
                "Open": "14.62",
                "High": "14.85",
                "Low": "14.52",
                "Close": "14.84",
                "Volume": "4179000",
                "Adj_Close": "14.065831"
            },
            {
                "Symbol": "CS",
                "Date": "2016-03-01",
                "Open": "13.68",
                "High": "14.14",
                "Low": "13.63",
                "Close": "14.10",
                "Volume": "4072200",
                "Adj_Close": "13.364436"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-29",
                "Open": "13.44",
                "High": "13.60",
                "Low": "13.32",
                "Close": "13.33",
                "Volume": "2788600",
                "Adj_Close": "12.634604"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-26",
                "Open": "13.61",
                "High": "13.80",
                "Low": "13.57",
                "Close": "13.65",
                "Volume": "3440400",
                "Adj_Close": "12.93791"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-25",
                "Open": "13.26",
                "High": "13.50",
                "Low": "13.22",
                "Close": "13.45",
                "Volume": "3235000",
                "Adj_Close": "12.748344"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-24",
                "Open": "12.71",
                "High": "13.18",
                "Low": "12.66",
                "Close": "13.15",
                "Volume": "4076900",
                "Adj_Close": "12.463994"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-23",
                "Open": "13.30",
                "High": "13.34",
                "Low": "12.91",
                "Close": "12.96",
                "Volume": "5781900",
                "Adj_Close": "12.283906"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-22",
                "Open": "13.17",
                "High": "13.44",
                "Low": "13.17",
                "Close": "13.36",
                "Volume": "2805800",
                "Adj_Close": "12.663039"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-19",
                "Open": "13.31",
                "High": "13.34",
                "Low": "13.09",
                "Close": "13.18",
                "Volume": "3836000",
                "Adj_Close": "12.49243"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-18",
                "Open": "13.56",
                "High": "13.57",
                "Low": "13.41",
                "Close": "13.42",
                "Volume": "2591400",
                "Adj_Close": "12.719909"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-17",
                "Open": "13.71",
                "High": "13.89",
                "Low": "13.66",
                "Close": "13.68",
                "Volume": "3987000",
                "Adj_Close": "12.966346"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-16",
                "Open": "13.51",
                "High": "13.61",
                "Low": "13.30",
                "Close": "13.56",
                "Volume": "3355500",
                "Adj_Close": "12.852606"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-12",
                "Open": "13.34",
                "High": "13.84",
                "Low": "13.06",
                "Close": "13.82",
                "Volume": "5096100",
                "Adj_Close": "13.099042"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-11",
                "Open": "12.79",
                "High": "12.97",
                "Low": "12.56",
                "Close": "12.68",
                "Volume": "4473600",
                "Adj_Close": "12.018514"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-10",
                "Open": "13.66",
                "High": "14.09",
                "Low": "13.60",
                "Close": "13.61",
                "Volume": "4098100",
                "Adj_Close": "12.899997"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-09",
                "Open": "13.39",
                "High": "13.69",
                "Low": "13.25",
                "Close": "13.47",
                "Volume": "8671700",
                "Adj_Close": "12.767301"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-08",
                "Open": "14.58",
                "High": "14.58",
                "Low": "14.28",
                "Close": "14.44",
                "Volume": "5095600",
                "Adj_Close": "13.686698"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-05",
                "Open": "15.17",
                "High": "15.21",
                "Low": "14.97",
                "Close": "14.98",
                "Volume": "3247300",
                "Adj_Close": "14.198527"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-04",
                "Open": "14.45",
                "High": "14.99",
                "Low": "14.44",
                "Close": "14.89",
                "Volume": "5400800",
                "Adj_Close": "14.113223"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-03",
                "Open": "17.219999",
                "High": "17.219999",
                "Low": "16.27",
                "Close": "16.690001",
                "Volume": "5488900",
                "Adj_Close": "15.819321"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-02",
                "Open": "16.52",
                "High": "16.66",
                "Low": "16.40",
                "Close": "16.51",
                "Volume": "2917700",
                "Adj_Close": "15.648711"
            },
            {
                "Symbol": "CS",
                "Date": "2016-02-01",
                "Open": "17.17",
                "High": "17.40",
                "Low": "17.15",
                "Close": "17.34",
                "Volume": "3244600",
                "Adj_Close": "16.435412"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-29",
                "Open": "17.370001",
                "High": "17.82",
                "Low": "17.34",
                "Close": "17.799999",
                "Volume": "2019200",
                "Adj_Close": "16.871414"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-28",
                "Open": "17.50",
                "High": "17.51",
                "Low": "17.17",
                "Close": "17.32",
                "Volume": "1956900",
                "Adj_Close": "16.416455"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-27",
                "Open": "17.450001",
                "High": "17.780001",
                "Low": "17.360001",
                "Close": "17.49",
                "Volume": "2073800",
                "Adj_Close": "16.577586"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-26",
                "Open": "17.33",
                "High": "17.610001",
                "Low": "17.280001",
                "Close": "17.559999",
                "Volume": "2220800",
                "Adj_Close": "16.643934"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-25",
                "Open": "17.379999",
                "High": "17.52",
                "Low": "17.299999",
                "Close": "17.33",
                "Volume": "2519500",
                "Adj_Close": "16.425933"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-22",
                "Open": "17.85",
                "High": "17.91",
                "Low": "17.65",
                "Close": "17.84",
                "Volume": "2093100",
                "Adj_Close": "16.909328"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-21",
                "Open": "17.40",
                "High": "17.52",
                "Low": "17.139999",
                "Close": "17.35",
                "Volume": "3710000",
                "Adj_Close": "16.444891"
            },
            {
                "Symbol": "CS",
                "Date": "2016-01-20",
                "Open": "18.02",
                "High": "18.059999",
                "Low": "17.450001",
                "Close": "17.83",
                "Volume": "2737800",
                "Adj_Close": "16.89985"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-20",
                "Open": "29.139999",
                "High": "29.139999",
                "Low": "28.190001",
                "Close": "28.780001",
                "Volume": "28606100",
                "Adj_Close": "28.283801"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-19",
                "Open": "27.950001",
                "High": "28.40",
                "Low": "27.77",
                "Close": "28.190001",
                "Volume": "21511200",
                "Adj_Close": "27.703973"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-18",
                "Open": "28.059999",
                "High": "28.23",
                "Low": "27.860001",
                "Close": "28.209999",
                "Volume": "14083900",
                "Adj_Close": "27.723627"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-15",
                "Open": "28.25",
                "High": "28.280001",
                "Low": "27.690001",
                "Close": "28.01",
                "Volume": "18519800",
                "Adj_Close": "27.527076"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-14",
                "Open": "27.799999",
                "High": "28.08",
                "Low": "27.66",
                "Close": "28.00",
                "Volume": "15436600",
                "Adj_Close": "27.517249"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-13",
                "Open": "27.450001",
                "High": "27.48",
                "Low": "26.940001",
                "Close": "27.16",
                "Volume": "12911900",
                "Adj_Close": "26.691731"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-12",
                "Open": "26.82",
                "High": "27.440001",
                "Low": "26.790001",
                "Close": "27.370001",
                "Volume": "15516900",
                "Adj_Close": "26.898111"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-11",
                "Open": "26.690001",
                "High": "26.92",
                "Low": "26.389999",
                "Close": "26.459999",
                "Volume": "13213000",
                "Adj_Close": "26.003799"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-08",
                "Open": "26.17",
                "High": "26.43",
                "Low": "26.030001",
                "Close": "26.370001",
                "Volume": "14141600",
                "Adj_Close": "25.915352"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-07",
                "Open": "25.27",
                "High": "25.92",
                "Low": "25.26",
                "Close": "25.690001",
                "Volume": "13428700",
                "Adj_Close": "25.247076"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-06",
                "Open": "24.73",
                "High": "25.23",
                "Low": "24.57",
                "Close": "25.15",
                "Volume": "14165000",
                "Adj_Close": "24.716385"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-05",
                "Open": "25.50",
                "High": "25.57",
                "Low": "24.83",
                "Close": "25.00",
                "Volume": "13317300",
                "Adj_Close": "24.568972"
            },
            {
                "Symbol": "MS",
                "Date": "2016-07-01",
                "Open": "25.77",
                "High": "26.40",
                "Low": "25.76",
                "Close": "25.92",
                "Volume": "8863400",
                "Adj_Close": "25.47311"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-30",
                "Open": "25.34",
                "High": "26.00",
                "Low": "25.18",
                "Close": "25.98",
                "Volume": "19736300",
                "Adj_Close": "25.532075"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-29",
                "Open": "24.940001",
                "High": "25.25",
                "Low": "24.639999",
                "Close": "25.23",
                "Volume": "13760800",
                "Adj_Close": "24.795006"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-28",
                "Open": "24.26",
                "High": "24.629999",
                "Low": "23.879999",
                "Close": "24.610001",
                "Volume": "19792300",
                "Adj_Close": "24.185697"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-27",
                "Open": "24.049999",
                "High": "24.110001",
                "Low": "23.110001",
                "Close": "23.610001",
                "Volume": "25434000",
                "Adj_Close": "23.202938"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-24",
                "Open": "25.07",
                "High": "25.530001",
                "Low": "24.51",
                "Close": "24.52",
                "Volume": "49311900",
                "Adj_Close": "24.097248"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-23",
                "Open": "26.93",
                "High": "27.290001",
                "Low": "26.799999",
                "Close": "27.290001",
                "Volume": "18027200",
                "Adj_Close": "26.819491"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-22",
                "Open": "26.23",
                "High": "26.68",
                "Low": "26.139999",
                "Close": "26.389999",
                "Volume": "14542900",
                "Adj_Close": "25.935006"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-21",
                "Open": "26.059999",
                "High": "26.299999",
                "Low": "25.799999",
                "Close": "26.200001",
                "Volume": "12357100",
                "Adj_Close": "25.748283"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-20",
                "Open": "25.879999",
                "High": "26.299999",
                "Low": "25.85",
                "Close": "25.90",
                "Volume": "17426400",
                "Adj_Close": "25.453455"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-17",
                "Open": "25.10",
                "High": "25.49",
                "Low": "25.049999",
                "Close": "25.309999",
                "Volume": "19295900",
                "Adj_Close": "24.873627"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-16",
                "Open": "24.450001",
                "High": "25.110001",
                "Low": "24.23",
                "Close": "25.07",
                "Volume": "16309400",
                "Adj_Close": "24.637765"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-15",
                "Open": "24.84",
                "High": "25.17",
                "Low": "24.57",
                "Close": "24.719999",
                "Volume": "17393000",
                "Adj_Close": "24.293799"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-14",
                "Open": "25.09",
                "High": "25.42",
                "Low": "24.42",
                "Close": "24.60",
                "Volume": "15812900",
                "Adj_Close": "24.175869"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-13",
                "Open": "25.309999",
                "High": "25.73",
                "Low": "25.24",
                "Close": "25.26",
                "Volume": "12824300",
                "Adj_Close": "24.82449"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-10",
                "Open": "25.639999",
                "High": "25.85",
                "Low": "25.440001",
                "Close": "25.540001",
                "Volume": "13449800",
                "Adj_Close": "25.099663"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-09",
                "Open": "26.27",
                "High": "26.309999",
                "Low": "25.950001",
                "Close": "26.08",
                "Volume": "9893000",
                "Adj_Close": "25.630352"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-08",
                "Open": "26.459999",
                "High": "26.82",
                "Low": "26.40",
                "Close": "26.540001",
                "Volume": "10311500",
                "Adj_Close": "26.082422"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-07",
                "Open": "26.91",
                "High": "26.940001",
                "Low": "26.50",
                "Close": "26.52",
                "Volume": "9949100",
                "Adj_Close": "26.062766"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-06",
                "Open": "26.620001",
                "High": "27.01",
                "Low": "26.549999",
                "Close": "26.85",
                "Volume": "10174200",
                "Adj_Close": "26.387076"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-03",
                "Open": "26.60",
                "High": "26.65",
                "Low": "26.01",
                "Close": "26.540001",
                "Volume": "14562600",
                "Adj_Close": "26.082422"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-02",
                "Open": "27.459999",
                "High": "27.549999",
                "Low": "27.219999",
                "Close": "27.280001",
                "Volume": "8077400",
                "Adj_Close": "26.809663"
            },
            {
                "Symbol": "MS",
                "Date": "2016-06-01",
                "Open": "27.110001",
                "High": "27.57",
                "Low": "26.67",
                "Close": "27.49",
                "Volume": "11175000",
                "Adj_Close": "27.016041"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-31",
                "Open": "27.639999",
                "High": "27.870001",
                "Low": "27.24",
                "Close": "27.370001",
                "Volume": "12723400",
                "Adj_Close": "26.898111"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-27",
                "Open": "27.450001",
                "High": "27.639999",
                "Low": "27.309999",
                "Close": "27.530001",
                "Volume": "10156100",
                "Adj_Close": "27.055353"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-26",
                "Open": "27.91",
                "High": "27.91",
                "Low": "27.35",
                "Close": "27.42",
                "Volume": "10080100",
                "Adj_Close": "26.947249"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-25",
                "Open": "27.610001",
                "High": "28.290001",
                "Low": "27.60",
                "Close": "27.780001",
                "Volume": "15856700",
                "Adj_Close": "27.301042"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-24",
                "Open": "27.040001",
                "High": "27.66",
                "Low": "26.959999",
                "Close": "27.41",
                "Volume": "18026100",
                "Adj_Close": "26.937421"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-23",
                "Open": "26.719999",
                "High": "26.940001",
                "Low": "26.60",
                "Close": "26.83",
                "Volume": "8913100",
                "Adj_Close": "26.367421"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-20",
                "Open": "26.85",
                "High": "27.17",
                "Low": "26.67",
                "Close": "26.77",
                "Volume": "14313000",
                "Adj_Close": "26.308456"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-19",
                "Open": "27.07",
                "High": "27.35",
                "Low": "26.440001",
                "Close": "26.610001",
                "Volume": "11487100",
                "Adj_Close": "26.151214"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-18",
                "Open": "26.190001",
                "High": "27.290001",
                "Low": "26.18",
                "Close": "27.24",
                "Volume": "20335500",
                "Adj_Close": "26.770352"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-17",
                "Open": "26.08",
                "High": "26.559999",
                "Low": "25.950001",
                "Close": "26.16",
                "Volume": "14474100",
                "Adj_Close": "25.708972"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-16",
                "Open": "25.860001",
                "High": "26.42",
                "Low": "25.85",
                "Close": "26.209999",
                "Volume": "9883900",
                "Adj_Close": "25.758109"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-13",
                "Open": "26.190001",
                "High": "26.65",
                "Low": "25.889999",
                "Close": "25.889999",
                "Volume": "13378800",
                "Adj_Close": "25.443627"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-12",
                "Open": "26.559999",
                "High": "26.73",
                "Low": "25.969999",
                "Close": "26.23",
                "Volume": "9838300",
                "Adj_Close": "25.777765"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-11",
                "Open": "26.59",
                "High": "26.99",
                "Low": "26.35",
                "Close": "26.360001",
                "Volume": "9589900",
                "Adj_Close": "25.905525"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-10",
                "Open": "26.41",
                "High": "26.790001",
                "Low": "26.280001",
                "Close": "26.629999",
                "Volume": "11200000",
                "Adj_Close": "26.170868"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-09",
                "Open": "26.24",
                "High": "26.50",
                "Low": "26.040001",
                "Close": "26.10",
                "Volume": "10734400",
                "Adj_Close": "25.650007"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-06",
                "Open": "25.99",
                "High": "26.35",
                "Low": "25.90",
                "Close": "26.25",
                "Volume": "12002200",
                "Adj_Close": "25.797421"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-05",
                "Open": "26.26",
                "High": "26.50",
                "Low": "26.00",
                "Close": "26.17",
                "Volume": "11909100",
                "Adj_Close": "25.7188"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-04",
                "Open": "26.50",
                "High": "26.620001",
                "Low": "26.049999",
                "Close": "26.280001",
                "Volume": "15144500",
                "Adj_Close": "25.826904"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-03",
                "Open": "26.879999",
                "High": "26.91",
                "Low": "26.34",
                "Close": "26.889999",
                "Volume": "16716600",
                "Adj_Close": "26.426386"
            },
            {
                "Symbol": "MS",
                "Date": "2016-05-02",
                "Open": "27.10",
                "High": "27.52",
                "Low": "26.84",
                "Close": "27.26",
                "Volume": "14987500",
                "Adj_Close": "26.790007"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-29",
                "Open": "27.01",
                "High": "27.24",
                "Low": "26.860001",
                "Close": "27.059999",
                "Volume": "15477400",
                "Adj_Close": "26.593455"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-28",
                "Open": "27.23",
                "High": "27.82",
                "Low": "27.08",
                "Close": "27.23",
                "Volume": "11096600",
                "Adj_Close": "26.760524"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-27",
                "Open": "27.33",
                "High": "27.83",
                "Low": "27.190001",
                "Close": "27.530001",
                "Volume": "12481700",
                "Adj_Close": "27.055353"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-26",
                "Open": "27.51",
                "High": "27.67",
                "Low": "27.33",
                "Close": "27.549999",
                "Volume": "13779800",
                "Adj_Close": "26.927593"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-25",
                "Open": "27.530001",
                "High": "27.709999",
                "Low": "27.23",
                "Close": "27.530001",
                "Volume": "11748800",
                "Adj_Close": "26.908046"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-22",
                "Open": "27.32",
                "High": "27.82",
                "Low": "27.290001",
                "Close": "27.700001",
                "Volume": "19084100",
                "Adj_Close": "27.074205"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-21",
                "Open": "27.35",
                "High": "27.879999",
                "Low": "27.15",
                "Close": "27.26",
                "Volume": "16579300",
                "Adj_Close": "26.644145"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-20",
                "Open": "26.48",
                "High": "27.48",
                "Low": "26.42",
                "Close": "27.41",
                "Volume": "24836300",
                "Adj_Close": "26.790756"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-19",
                "Open": "25.860001",
                "High": "26.49",
                "Low": "25.799999",
                "Close": "26.459999",
                "Volume": "23006500",
                "Adj_Close": "25.862218"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-18",
                "Open": "26.18",
                "High": "26.200001",
                "Low": "25.530001",
                "Close": "25.73",
                "Volume": "29605100",
                "Adj_Close": "25.14871"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-15",
                "Open": "26.309999",
                "High": "26.370001",
                "Low": "25.709999",
                "Close": "25.76",
                "Volume": "14899900",
                "Adj_Close": "25.178033"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-14",
                "Open": "25.74",
                "High": "26.26",
                "Low": "25.66",
                "Close": "26.17",
                "Volume": "18678400",
                "Adj_Close": "25.57877"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-13",
                "Open": "25.030001",
                "High": "25.879999",
                "Low": "24.98",
                "Close": "25.879999",
                "Volume": "18251000",
                "Adj_Close": "25.295321"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-12",
                "Open": "24.219999",
                "High": "24.85",
                "Low": "24.18",
                "Close": "24.58",
                "Volume": "14947800",
                "Adj_Close": "24.024691"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-11",
                "Open": "23.90",
                "High": "24.440001",
                "Low": "23.870001",
                "Close": "24.110001",
                "Volume": "12107600",
                "Adj_Close": "23.56531"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-08",
                "Open": "24.01",
                "High": "24.18",
                "Low": "23.66",
                "Close": "23.75",
                "Volume": "10000600",
                "Adj_Close": "23.213443"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-07",
                "Open": "24.23",
                "High": "24.309999",
                "Low": "23.51",
                "Close": "23.719999",
                "Volume": "17145400",
                "Adj_Close": "23.18412"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-06",
                "Open": "24.34",
                "High": "24.73",
                "Low": "24.27",
                "Close": "24.42",
                "Volume": "14982000",
                "Adj_Close": "23.868306"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-05",
                "Open": "24.629999",
                "High": "24.700001",
                "Low": "24.24",
                "Close": "24.379999",
                "Volume": "12860000",
                "Adj_Close": "23.829209"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-04",
                "Open": "25.49",
                "High": "25.51",
                "Low": "24.91",
                "Close": "25.040001",
                "Volume": "11408300",
                "Adj_Close": "24.4743"
            },
            {
                "Symbol": "MS",
                "Date": "2016-04-01",
                "Open": "24.889999",
                "High": "25.68",
                "Low": "24.620001",
                "Close": "25.530001",
                "Volume": "15484800",
                "Adj_Close": "24.95323"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-31",
                "Open": "24.91",
                "High": "25.540001",
                "Low": "24.889999",
                "Close": "25.01",
                "Volume": "15492000",
                "Adj_Close": "24.444977"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-30",
                "Open": "24.959999",
                "High": "25.43",
                "Low": "24.76",
                "Close": "25.07",
                "Volume": "11502400",
                "Adj_Close": "24.503621"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-29",
                "Open": "24.559999",
                "High": "24.809999",
                "Low": "24.120001",
                "Close": "24.780001",
                "Volume": "13927200",
                "Adj_Close": "24.220174"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-28",
                "Open": "24.98",
                "High": "25.07",
                "Low": "24.68",
                "Close": "24.719999",
                "Volume": "9540200",
                "Adj_Close": "24.161528"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-24",
                "Open": "24.940001",
                "High": "24.940001",
                "Low": "24.290001",
                "Close": "24.93",
                "Volume": "15777900",
                "Adj_Close": "24.366785"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-23",
                "Open": "25.83",
                "High": "25.870001",
                "Low": "25.200001",
                "Close": "25.27",
                "Volume": "10430600",
                "Adj_Close": "24.699103"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-22",
                "Open": "25.610001",
                "High": "26.02",
                "Low": "25.450001",
                "Close": "25.84",
                "Volume": "13623900",
                "Adj_Close": "25.256226"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-21",
                "Open": "26.17",
                "High": "26.610001",
                "Low": "25.860001",
                "Close": "25.940001",
                "Volume": "10054000",
                "Adj_Close": "25.353967"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-18",
                "Open": "26.049999",
                "High": "26.549999",
                "Low": "25.98",
                "Close": "26.280001",
                "Volume": "24032000",
                "Adj_Close": "25.686286"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-17",
                "Open": "25.01",
                "High": "26.030001",
                "Low": "24.58",
                "Close": "25.85",
                "Volume": "20718900",
                "Adj_Close": "25.266"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-16",
                "Open": "25.299999",
                "High": "25.790001",
                "Low": "24.709999",
                "Close": "25.16",
                "Volume": "17841100",
                "Adj_Close": "24.591588"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-15",
                "Open": "25.629999",
                "High": "25.690001",
                "Low": "25.120001",
                "Close": "25.43",
                "Volume": "15900500",
                "Adj_Close": "24.855489"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-14",
                "Open": "25.83",
                "High": "26.07",
                "Low": "25.66",
                "Close": "25.91",
                "Volume": "17603300",
                "Adj_Close": "25.324644"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-11",
                "Open": "25.15",
                "High": "26.09",
                "Low": "25.110001",
                "Close": "26.00",
                "Volume": "24457300",
                "Adj_Close": "25.412611"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-10",
                "Open": "24.91",
                "High": "25.15",
                "Low": "24.450001",
                "Close": "24.65",
                "Volume": "20117300",
                "Adj_Close": "24.09311"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-09",
                "Open": "25.200001",
                "High": "25.26",
                "Low": "24.440001",
                "Close": "24.610001",
                "Volume": "23542300",
                "Adj_Close": "24.054014"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-08",
                "Open": "25.700001",
                "High": "25.860001",
                "Low": "24.940001",
                "Close": "25.01",
                "Volume": "21715100",
                "Adj_Close": "24.444977"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-07",
                "Open": "25.84",
                "High": "26.33",
                "Low": "25.700001",
                "Close": "26.09",
                "Volume": "9835300",
                "Adj_Close": "25.500578"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-04",
                "Open": "26.26",
                "High": "26.50",
                "Low": "25.91",
                "Close": "26.129999",
                "Volume": "13629400",
                "Adj_Close": "25.539673"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-03",
                "Open": "26.10",
                "High": "26.190001",
                "Low": "25.809999",
                "Close": "26.139999",
                "Volume": "11515400",
                "Adj_Close": "25.549447"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-02",
                "Open": "26.00",
                "High": "26.290001",
                "Low": "25.83",
                "Close": "26.110001",
                "Volume": "16119300",
                "Adj_Close": "25.520126"
            },
            {
                "Symbol": "MS",
                "Date": "2016-03-01",
                "Open": "25.09",
                "High": "26.120001",
                "Low": "25.059999",
                "Close": "26.09",
                "Volume": "17197000",
                "Adj_Close": "25.500578"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-29",
                "Open": "25.01",
                "High": "25.15",
                "Low": "24.67",
                "Close": "24.700001",
                "Volume": "13301500",
                "Adj_Close": "24.141981"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-26",
                "Open": "25.00",
                "High": "25.67",
                "Low": "24.780001",
                "Close": "25.16",
                "Volume": "19258000",
                "Adj_Close": "24.591588"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-25",
                "Open": "23.799999",
                "High": "24.68",
                "Low": "23.77",
                "Close": "24.629999",
                "Volume": "17568600",
                "Adj_Close": "24.073561"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-24",
                "Open": "23.16",
                "High": "23.709999",
                "Low": "22.68",
                "Close": "23.709999",
                "Volume": "20271400",
                "Adj_Close": "23.174345"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-23",
                "Open": "24.450001",
                "High": "24.49",
                "Low": "23.68",
                "Close": "23.709999",
                "Volume": "14728800",
                "Adj_Close": "23.174345"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-22",
                "Open": "24.40",
                "High": "24.74",
                "Low": "24.33",
                "Close": "24.540001",
                "Volume": "12182000",
                "Adj_Close": "23.985596"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-19",
                "Open": "23.780001",
                "High": "24.190001",
                "Low": "23.639999",
                "Close": "24.00",
                "Volume": "12986200",
                "Adj_Close": "23.457795"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-18",
                "Open": "24.360001",
                "High": "24.540001",
                "Low": "23.780001",
                "Close": "23.959999",
                "Volume": "17521200",
                "Adj_Close": "23.418697"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-17",
                "Open": "24.219999",
                "High": "24.67",
                "Low": "24.120001",
                "Close": "24.23",
                "Volume": "19226500",
                "Adj_Close": "23.682598"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-16",
                "Open": "24.07",
                "High": "24.139999",
                "Low": "23.209999",
                "Close": "23.719999",
                "Volume": "20565500",
                "Adj_Close": "23.18412"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-12",
                "Open": "21.91",
                "High": "23.200001",
                "Low": "21.860001",
                "Close": "23.09",
                "Volume": "22802200",
                "Adj_Close": "22.568353"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-11",
                "Open": "21.67",
                "High": "22.129999",
                "Low": "21.16",
                "Close": "21.690001",
                "Volume": "29160400",
                "Adj_Close": "21.199982"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-10",
                "Open": "23.379999",
                "High": "23.780001",
                "Low": "22.639999",
                "Close": "22.700001",
                "Volume": "21564200",
                "Adj_Close": "22.187165"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-09",
                "Open": "21.889999",
                "High": "23.290001",
                "Low": "21.76",
                "Close": "22.93",
                "Volume": "25642000",
                "Adj_Close": "22.411968"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-08",
                "Open": "23.76",
                "High": "23.84",
                "Low": "22.32",
                "Close": "22.67",
                "Volume": "24258700",
                "Adj_Close": "22.157842"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-05",
                "Open": "25.09",
                "High": "25.42",
                "Low": "24.18",
                "Close": "24.35",
                "Volume": "16106100",
                "Adj_Close": "23.799888"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-04",
                "Open": "24.15",
                "High": "25.200001",
                "Low": "24.120001",
                "Close": "25.01",
                "Volume": "17497500",
                "Adj_Close": "24.444977"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-03",
                "Open": "24.43",
                "High": "24.52",
                "Low": "23.290001",
                "Close": "24.32",
                "Volume": "25132900",
                "Adj_Close": "23.770565"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-02",
                "Open": "25.360001",
                "High": "25.360001",
                "Low": "24.389999",
                "Close": "24.50",
                "Volume": "18326800",
                "Adj_Close": "23.946499"
            },
            {
                "Symbol": "MS",
                "Date": "2016-02-01",
                "Open": "25.780001",
                "High": "25.93",
                "Low": "25.42",
                "Close": "25.709999",
                "Volume": "11177900",
                "Adj_Close": "25.129162"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-29",
                "Open": "25.35",
                "High": "25.889999",
                "Low": "25.120001",
                "Close": "25.879999",
                "Volume": "18766500",
                "Adj_Close": "25.295321"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-28",
                "Open": "25.67",
                "High": "25.84",
                "Low": "24.940001",
                "Close": "25.17",
                "Volume": "16015600",
                "Adj_Close": "24.601362"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-27",
                "Open": "25.25",
                "High": "26.16",
                "Low": "25.049999",
                "Close": "25.370001",
                "Volume": "19796300",
                "Adj_Close": "24.796845"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-26",
                "Open": "25.040001",
                "High": "25.66",
                "Low": "25.030001",
                "Close": "25.49",
                "Volume": "13362900",
                "Adj_Close": "24.767521"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-25",
                "Open": "25.459999",
                "High": "25.51",
                "Low": "24.940001",
                "Close": "24.98",
                "Volume": "20144600",
                "Adj_Close": "24.271976"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-22",
                "Open": "25.26",
                "High": "25.98",
                "Low": "25.18",
                "Close": "25.610001",
                "Volume": "22498400",
                "Adj_Close": "24.884121"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-21",
                "Open": "25.290001",
                "High": "25.59",
                "Low": "24.690001",
                "Close": "24.780001",
                "Volume": "22130300",
                "Adj_Close": "24.077646"
            },
            {
                "Symbol": "MS",
                "Date": "2016-01-20",
                "Open": "25.700001",
                "High": "25.77",
                "Low": "24.67",
                "Close": "25.24",
                "Volume": "25940900",
                "Adj_Close": "24.524607"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-20",
                "Open": "23.780001",
                "High": "24.209999",
                "Low": "23.549999",
                "Close": "24.18",
                "Volume": "140600",
                "Adj_Close": "23.238611"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-19",
                "Open": "23.809999",
                "High": "23.969999",
                "Low": "23.43",
                "Close": "23.75",
                "Volume": "257400",
                "Adj_Close": "22.825352"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-18",
                "Open": "23.610001",
                "High": "23.959999",
                "Low": "23.610001",
                "Close": "23.82",
                "Volume": "145300",
                "Adj_Close": "22.892626"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-15",
                "Open": "23.50",
                "High": "23.959999",
                "Low": "23.27",
                "Close": "23.66",
                "Volume": "167800",
                "Adj_Close": "22.738855"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-14",
                "Open": "23.66",
                "High": "23.860001",
                "Low": "23.290001",
                "Close": "23.41",
                "Volume": "181200",
                "Adj_Close": "22.498589"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-13",
                "Open": "23.49",
                "High": "23.629999",
                "Low": "23.209999",
                "Close": "23.41",
                "Volume": "138400",
                "Adj_Close": "22.498589"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-12",
                "Open": "23.90",
                "High": "23.98",
                "Low": "23.440001",
                "Close": "23.530001",
                "Volume": "189200",
                "Adj_Close": "22.613917"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-11",
                "Open": "23.209999",
                "High": "23.67",
                "Low": "23.209999",
                "Close": "23.49",
                "Volume": "165900",
                "Adj_Close": "22.575474"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-08",
                "Open": "23.190001",
                "High": "23.40",
                "Low": "23.059999",
                "Close": "23.18",
                "Volume": "178000",
                "Adj_Close": "22.277544"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-07",
                "Open": "22.959999",
                "High": "23.26",
                "Low": "22.75",
                "Close": "22.959999",
                "Volume": "126000",
                "Adj_Close": "22.066107"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-06",
                "Open": "22.530001",
                "High": "23.00",
                "Low": "22.450001",
                "Close": "22.83",
                "Volume": "196600",
                "Adj_Close": "21.94117"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-05",
                "Open": "22.870001",
                "High": "23.16",
                "Low": "22.450001",
                "Close": "22.59",
                "Volume": "158600",
                "Adj_Close": "21.710514"
            },
            {
                "Symbol": "AB",
                "Date": "2016-07-01",
                "Open": "23.299999",
                "High": "23.51",
                "Low": "23.08",
                "Close": "23.17",
                "Volume": "101900",
                "Adj_Close": "22.267933"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-30",
                "Open": "22.98",
                "High": "23.370001",
                "Low": "22.98",
                "Close": "23.299999",
                "Volume": "213400",
                "Adj_Close": "22.392871"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-29",
                "Open": "22.32",
                "High": "22.969999",
                "Low": "22.32",
                "Close": "22.950001",
                "Volume": "222500",
                "Adj_Close": "22.056498"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-28",
                "Open": "21.82",
                "High": "22.280001",
                "Low": "21.77",
                "Close": "22.190001",
                "Volume": "209000",
                "Adj_Close": "21.326087"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-27",
                "Open": "22.25",
                "High": "22.34",
                "Low": "21.49",
                "Close": "21.559999",
                "Volume": "365500",
                "Adj_Close": "20.720613"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-24",
                "Open": "22.389999",
                "High": "22.780001",
                "Low": "22.10",
                "Close": "22.59",
                "Volume": "300100",
                "Adj_Close": "21.710514"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-23",
                "Open": "23.450001",
                "High": "23.60",
                "Low": "23.110001",
                "Close": "23.209999",
                "Volume": "207500",
                "Adj_Close": "22.306374"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-22",
                "Open": "23.030001",
                "High": "23.309999",
                "Low": "22.959999",
                "Close": "23.23",
                "Volume": "142200",
                "Adj_Close": "22.325596"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-21",
                "Open": "23.059999",
                "High": "23.26",
                "Low": "22.83",
                "Close": "22.959999",
                "Volume": "163100",
                "Adj_Close": "22.066107"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-20",
                "Open": "23.23",
                "High": "23.68",
                "Low": "23.040001",
                "Close": "23.049999",
                "Volume": "195100",
                "Adj_Close": "22.152604"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-17",
                "Open": "22.530001",
                "High": "23.129999",
                "Low": "22.50",
                "Close": "22.98",
                "Volume": "245300",
                "Adj_Close": "22.085329"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-16",
                "Open": "22.35",
                "High": "22.68",
                "Low": "22.200001",
                "Close": "22.540001",
                "Volume": "124900",
                "Adj_Close": "21.662461"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-15",
                "Open": "22.459999",
                "High": "23.00",
                "Low": "22.370001",
                "Close": "22.50",
                "Volume": "194700",
                "Adj_Close": "21.624017"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-14",
                "Open": "22.90",
                "High": "23.120001",
                "Low": "22.280001",
                "Close": "22.459999",
                "Volume": "189900",
                "Adj_Close": "21.585574"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-13",
                "Open": "23.059999",
                "High": "23.370001",
                "Low": "22.959999",
                "Close": "23.059999",
                "Volume": "185800",
                "Adj_Close": "22.162215"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-10",
                "Open": "23.379999",
                "High": "23.42",
                "Low": "22.93",
                "Close": "22.98",
                "Volume": "171000",
                "Adj_Close": "22.085329"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-09",
                "Open": "23.27",
                "High": "23.879999",
                "Low": "23.25",
                "Close": "23.540001",
                "Volume": "286600",
                "Adj_Close": "22.623528"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-08",
                "Open": "23.65",
                "High": "23.84",
                "Low": "23.540001",
                "Close": "23.73",
                "Volume": "188700",
                "Adj_Close": "22.80613"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-07",
                "Open": "23.73",
                "High": "24.120001",
                "Low": "23.559999",
                "Close": "23.610001",
                "Volume": "234000",
                "Adj_Close": "22.690803"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-06",
                "Open": "23.51",
                "High": "23.969999",
                "Low": "23.51",
                "Close": "23.74",
                "Volume": "183900",
                "Adj_Close": "22.815741"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-03",
                "Open": "23.34",
                "High": "23.50",
                "Low": "23.08",
                "Close": "23.469999",
                "Volume": "151200",
                "Adj_Close": "22.556252"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-02",
                "Open": "23.549999",
                "High": "23.75",
                "Low": "23.35",
                "Close": "23.57",
                "Volume": "127700",
                "Adj_Close": "22.652359"
            },
            {
                "Symbol": "AB",
                "Date": "2016-06-01",
                "Open": "23.33",
                "High": "23.68",
                "Low": "23.25",
                "Close": "23.530001",
                "Volume": "152200",
                "Adj_Close": "22.613917"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-31",
                "Open": "23.52",
                "High": "23.68",
                "Low": "23.360001",
                "Close": "23.51",
                "Volume": "158600",
                "Adj_Close": "22.594696"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-27",
                "Open": "23.33",
                "High": "23.48",
                "Low": "23.110001",
                "Close": "23.42",
                "Volume": "183500",
                "Adj_Close": "22.508199"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-26",
                "Open": "23.299999",
                "High": "23.51",
                "Low": "23.139999",
                "Close": "23.33",
                "Volume": "163100",
                "Adj_Close": "22.421703"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-25",
                "Open": "23.40",
                "High": "23.67",
                "Low": "23.280001",
                "Close": "23.379999",
                "Volume": "175500",
                "Adj_Close": "22.469756"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-24",
                "Open": "23.129999",
                "High": "23.450001",
                "Low": "23.030001",
                "Close": "23.23",
                "Volume": "406600",
                "Adj_Close": "22.325596"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-23",
                "Open": "23.200001",
                "High": "23.459999",
                "Low": "22.91",
                "Close": "22.950001",
                "Volume": "154500",
                "Adj_Close": "22.056498"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-20",
                "Open": "22.82",
                "High": "23.459999",
                "Low": "22.75",
                "Close": "23.23",
                "Volume": "368200",
                "Adj_Close": "22.325596"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-19",
                "Open": "22.809999",
                "High": "22.889999",
                "Low": "22.370001",
                "Close": "22.639999",
                "Volume": "233100",
                "Adj_Close": "21.758566"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-18",
                "Open": "22.25",
                "High": "23.08",
                "Low": "22.139999",
                "Close": "22.799999",
                "Volume": "265300",
                "Adj_Close": "21.912337"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-17",
                "Open": "22.200001",
                "High": "22.809999",
                "Low": "22.18",
                "Close": "22.360001",
                "Volume": "203300",
                "Adj_Close": "21.489469"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-16",
                "Open": "22.32",
                "High": "22.790001",
                "Low": "22.280001",
                "Close": "22.280001",
                "Volume": "253400",
                "Adj_Close": "21.412583"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-13",
                "Open": "22.92",
                "High": "23.209999",
                "Low": "22.280001",
                "Close": "22.41",
                "Volume": "231700",
                "Adj_Close": "21.537521"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-12",
                "Open": "23.00",
                "High": "23.280001",
                "Low": "22.85",
                "Close": "22.940001",
                "Volume": "153700",
                "Adj_Close": "22.046888"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-11",
                "Open": "23.07",
                "High": "23.49",
                "Low": "22.879999",
                "Close": "22.93",
                "Volume": "255900",
                "Adj_Close": "22.037277"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-10",
                "Open": "22.85",
                "High": "23.709999",
                "Low": "22.709999",
                "Close": "23.200001",
                "Volume": "309300",
                "Adj_Close": "22.296765"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-09",
                "Open": "22.860001",
                "High": "23.049999",
                "Low": "22.540001",
                "Close": "22.709999",
                "Volume": "151900",
                "Adj_Close": "21.825841"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-06",
                "Open": "22.10",
                "High": "22.870001",
                "Low": "22.10",
                "Close": "22.85",
                "Volume": "153500",
                "Adj_Close": "21.960391"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-05",
                "Open": "22.690001",
                "High": "22.940001",
                "Low": "22.190001",
                "Close": "22.33",
                "Volume": "150500",
                "Adj_Close": "21.460636"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-04",
                "Open": "22.780001",
                "High": "23.34",
                "Low": "22.76",
                "Close": "23.049999",
                "Volume": "300300",
                "Adj_Close": "21.768176"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-03",
                "Open": "23.030001",
                "High": "23.66",
                "Low": "22.75",
                "Close": "22.90",
                "Volume": "349000",
                "Adj_Close": "21.626518"
            },
            {
                "Symbol": "AB",
                "Date": "2016-05-02",
                "Open": "23.50",
                "High": "23.99",
                "Low": "23.290001",
                "Close": "23.84",
                "Volume": "285400",
                "Adj_Close": "22.514245"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-29",
                "Open": "23.450001",
                "High": "23.75",
                "Low": "23.059999",
                "Close": "23.49",
                "Volume": "263700",
                "Adj_Close": "22.183708"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-28",
                "Open": "24.18",
                "High": "24.219999",
                "Low": "23.40",
                "Close": "23.549999",
                "Volume": "269700",
                "Adj_Close": "22.240371"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-27",
                "Open": "24.27",
                "High": "24.559999",
                "Low": "24.00",
                "Close": "24.469999",
                "Volume": "177200",
                "Adj_Close": "23.109209"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-26",
                "Open": "24.50",
                "High": "24.65",
                "Low": "24.209999",
                "Close": "24.280001",
                "Volume": "145500",
                "Adj_Close": "22.929777"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-25",
                "Open": "24.18",
                "High": "24.43",
                "Low": "24.15",
                "Close": "24.40",
                "Volume": "164700",
                "Adj_Close": "23.043103"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-22",
                "Open": "24.110001",
                "High": "24.42",
                "Low": "24.040001",
                "Close": "24.33",
                "Volume": "162200",
                "Adj_Close": "22.976996"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-21",
                "Open": "24.52",
                "High": "24.65",
                "Low": "24.110001",
                "Close": "24.120001",
                "Volume": "162400",
                "Adj_Close": "22.778675"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-20",
                "Open": "24.049999",
                "High": "24.620001",
                "Low": "23.940001",
                "Close": "24.42",
                "Volume": "192500",
                "Adj_Close": "23.061991"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-19",
                "Open": "23.48",
                "High": "24.129999",
                "Low": "23.41",
                "Close": "24.049999",
                "Volume": "249500",
                "Adj_Close": "22.712566"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-18",
                "Open": "23.530001",
                "High": "23.969999",
                "Low": "23.389999",
                "Close": "23.43",
                "Volume": "354400",
                "Adj_Close": "22.127045"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-15",
                "Open": "23.75",
                "High": "23.92",
                "Low": "23.58",
                "Close": "23.68",
                "Volume": "147200",
                "Adj_Close": "22.363143"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-14",
                "Open": "23.82",
                "High": "24.00",
                "Low": "23.65",
                "Close": "23.73",
                "Volume": "218200",
                "Adj_Close": "22.410362"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-13",
                "Open": "23.85",
                "High": "24.120001",
                "Low": "23.780001",
                "Close": "23.799999",
                "Volume": "252300",
                "Adj_Close": "22.476468"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-12",
                "Open": "23.889999",
                "High": "23.950001",
                "Low": "23.52",
                "Close": "23.68",
                "Volume": "347300",
                "Adj_Close": "22.363143"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-11",
                "Open": "23.82",
                "High": "24.209999",
                "Low": "23.60",
                "Close": "23.82",
                "Volume": "175500",
                "Adj_Close": "22.495357"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-08",
                "Open": "23.65",
                "High": "24.18",
                "Low": "23.370001",
                "Close": "23.559999",
                "Volume": "169100",
                "Adj_Close": "22.249815"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-07",
                "Open": "23.870001",
                "High": "23.93",
                "Low": "23.120001",
                "Close": "23.360001",
                "Volume": "312300",
                "Adj_Close": "22.060938"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-06",
                "Open": "24.049999",
                "High": "24.280001",
                "Low": "23.799999",
                "Close": "24.01",
                "Volume": "241500",
                "Adj_Close": "22.674791"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-05",
                "Open": "24.00",
                "High": "24.200001",
                "Low": "23.59",
                "Close": "24.01",
                "Volume": "210900",
                "Adj_Close": "22.674791"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-04",
                "Open": "24.40",
                "High": "24.51",
                "Low": "24.01",
                "Close": "24.129999",
                "Volume": "315500",
                "Adj_Close": "22.788117"
            },
            {
                "Symbol": "AB",
                "Date": "2016-04-01",
                "Open": "23.24",
                "High": "24.389999",
                "Low": "23.00",
                "Close": "24.389999",
                "Volume": "324000",
                "Adj_Close": "23.033658"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-31",
                "Open": "22.43",
                "High": "23.809999",
                "Low": "22.43",
                "Close": "23.43",
                "Volume": "352200",
                "Adj_Close": "22.127045"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-30",
                "Open": "22.85",
                "High": "22.98",
                "Low": "22.139999",
                "Close": "22.43",
                "Volume": "496300",
                "Adj_Close": "21.182656"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-29",
                "Open": "22.50",
                "High": "22.84",
                "Low": "22.030001",
                "Close": "22.700001",
                "Volume": "205700",
                "Adj_Close": "21.437642"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-28",
                "Open": "22.309999",
                "High": "22.74",
                "Low": "22.120001",
                "Close": "22.530001",
                "Volume": "180500",
                "Adj_Close": "21.277095"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-24",
                "Open": "22.09",
                "High": "22.280001",
                "Low": "21.969999",
                "Close": "22.27",
                "Volume": "212100",
                "Adj_Close": "21.031554"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-23",
                "Open": "22.549999",
                "High": "22.790001",
                "Low": "22.200001",
                "Close": "22.25",
                "Volume": "287200",
                "Adj_Close": "21.012666"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-22",
                "Open": "22.799999",
                "High": "22.870001",
                "Low": "22.10",
                "Close": "22.73",
                "Volume": "174900",
                "Adj_Close": "21.465972"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-21",
                "Open": "23.33",
                "High": "23.49",
                "Low": "22.860001",
                "Close": "22.870001",
                "Volume": "241600",
                "Adj_Close": "21.598188"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-18",
                "Open": "23.27",
                "High": "23.74",
                "Low": "23.110001",
                "Close": "23.370001",
                "Volume": "207200",
                "Adj_Close": "22.070383"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-17",
                "Open": "22.450001",
                "High": "23.299999",
                "Low": "22.41",
                "Close": "23.10",
                "Volume": "380500",
                "Adj_Close": "21.815397"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-16",
                "Open": "21.58",
                "High": "22.68",
                "Low": "21.52",
                "Close": "22.530001",
                "Volume": "214600",
                "Adj_Close": "21.277095"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-15",
                "Open": "22.34",
                "High": "22.440001",
                "Low": "21.68",
                "Close": "21.75",
                "Volume": "410200",
                "Adj_Close": "20.540471"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-14",
                "Open": "22.02",
                "High": "22.65",
                "Low": "22.00",
                "Close": "22.17",
                "Volume": "214600",
                "Adj_Close": "20.937114"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-11",
                "Open": "22.34",
                "High": "22.530001",
                "Low": "22.07",
                "Close": "22.26",
                "Volume": "321600",
                "Adj_Close": "21.02211"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-10",
                "Open": "22.34",
                "High": "22.58",
                "Low": "21.799999",
                "Close": "22.00",
                "Volume": "430300",
                "Adj_Close": "20.776568"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-09",
                "Open": "21.74",
                "High": "22.049999",
                "Low": "21.620001",
                "Close": "22.040001",
                "Volume": "192800",
                "Adj_Close": "20.814345"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-08",
                "Open": "21.530001",
                "High": "21.90",
                "Low": "21.440001",
                "Close": "21.65",
                "Volume": "223800",
                "Adj_Close": "20.446032"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-07",
                "Open": "21.43",
                "High": "22.02",
                "Low": "21.43",
                "Close": "21.719999",
                "Volume": "382900",
                "Adj_Close": "20.512138"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-04",
                "Open": "21.280001",
                "High": "22.07",
                "Low": "21.280001",
                "Close": "21.559999",
                "Volume": "281900",
                "Adj_Close": "20.361036"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-03",
                "Open": "20.60",
                "High": "21.540001",
                "Low": "20.50",
                "Close": "21.27",
                "Volume": "381100",
                "Adj_Close": "20.087164"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-02",
                "Open": "20.10",
                "High": "20.73",
                "Low": "20.10",
                "Close": "20.610001",
                "Volume": "262900",
                "Adj_Close": "19.463867"
            },
            {
                "Symbol": "AB",
                "Date": "2016-03-01",
                "Open": "19.99",
                "High": "20.43",
                "Low": "19.99",
                "Close": "20.17",
                "Volume": "449300",
                "Adj_Close": "19.048336"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-29",
                "Open": "19.50",
                "High": "20.059999",
                "Low": "19.25",
                "Close": "19.780001",
                "Volume": "198100",
                "Adj_Close": "18.680024"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-26",
                "Open": "19.40",
                "High": "19.65",
                "Low": "19.27",
                "Close": "19.52",
                "Volume": "192600",
                "Adj_Close": "18.434483"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-25",
                "Open": "19.00",
                "High": "19.50",
                "Low": "18.950001",
                "Close": "19.190001",
                "Volume": "255700",
                "Adj_Close": "18.122834"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-24",
                "Open": "18.35",
                "High": "19.120001",
                "Low": "18.10",
                "Close": "18.92",
                "Volume": "220600",
                "Adj_Close": "17.867849"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-23",
                "Open": "18.77",
                "High": "18.98",
                "Low": "18.33",
                "Close": "18.629999",
                "Volume": "220300",
                "Adj_Close": "17.593975"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-22",
                "Open": "18.969999",
                "High": "18.969999",
                "Low": "18.610001",
                "Close": "18.85",
                "Volume": "147700",
                "Adj_Close": "17.801742"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-19",
                "Open": "18.99",
                "High": "19.040001",
                "Low": "18.58",
                "Close": "18.700001",
                "Volume": "257500",
                "Adj_Close": "17.660084"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-18",
                "Open": "18.74",
                "High": "19.059999",
                "Low": "18.629999",
                "Close": "19.030001",
                "Volume": "460700",
                "Adj_Close": "17.971732"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-17",
                "Open": "18.799999",
                "High": "19.280001",
                "Low": "18.73",
                "Close": "19.00",
                "Volume": "399700",
                "Adj_Close": "17.471205"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-16",
                "Open": "17.629999",
                "High": "18.67",
                "Low": "17.48",
                "Close": "18.50",
                "Volume": "572000",
                "Adj_Close": "17.011437"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-12",
                "Open": "17.059999",
                "High": "17.469999",
                "Low": "16.110001",
                "Close": "17.309999",
                "Volume": "695200",
                "Adj_Close": "15.917187"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-11",
                "Open": "16.16",
                "High": "17.200001",
                "Low": "16.16",
                "Close": "16.92",
                "Volume": "262000",
                "Adj_Close": "15.558568"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-10",
                "Open": "17.41",
                "High": "17.58",
                "Low": "17.15",
                "Close": "17.280001",
                "Volume": "200300",
                "Adj_Close": "15.889602"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-09",
                "Open": "16.51",
                "High": "17.389999",
                "Low": "16.50",
                "Close": "17.27",
                "Volume": "298100",
                "Adj_Close": "15.880407"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-08",
                "Open": "17.719999",
                "High": "17.77",
                "Low": "16.559999",
                "Close": "16.799999",
                "Volume": "305100",
                "Adj_Close": "15.448223"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-05",
                "Open": "18.040001",
                "High": "18.40",
                "Low": "17.92",
                "Close": "18.049999",
                "Volume": "192500",
                "Adj_Close": "16.597644"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-04",
                "Open": "18.030001",
                "High": "18.32",
                "Low": "17.92",
                "Close": "18.07",
                "Volume": "273300",
                "Adj_Close": "16.616036"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-03",
                "Open": "18.15",
                "High": "18.610001",
                "Low": "17.799999",
                "Close": "18.110001",
                "Volume": "200000",
                "Adj_Close": "16.652818"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-02",
                "Open": "18.549999",
                "High": "18.60",
                "Low": "17.90",
                "Close": "17.969999",
                "Volume": "234200",
                "Adj_Close": "16.524082"
            },
            {
                "Symbol": "AB",
                "Date": "2016-02-01",
                "Open": "18.450001",
                "High": "18.82",
                "Low": "18.23",
                "Close": "18.82",
                "Volume": "239200",
                "Adj_Close": "17.305688"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-29",
                "Open": "18.34",
                "High": "18.549999",
                "Low": "18.27",
                "Close": "18.440001",
                "Volume": "282600",
                "Adj_Close": "16.956265"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-28",
                "Open": "18.75",
                "High": "19.040001",
                "Low": "18.23",
                "Close": "18.24",
                "Volume": "233600",
                "Adj_Close": "16.772357"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-27",
                "Open": "19.07",
                "High": "19.27",
                "Low": "18.49",
                "Close": "18.67",
                "Volume": "278300",
                "Adj_Close": "17.167758"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-26",
                "Open": "19.129999",
                "High": "19.290001",
                "Low": "18.629999",
                "Close": "19.07",
                "Volume": "228700",
                "Adj_Close": "17.535573"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-25",
                "Open": "19.700001",
                "High": "19.82",
                "Low": "19.040001",
                "Close": "19.040001",
                "Volume": "536100",
                "Adj_Close": "17.507988"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-22",
                "Open": "18.92",
                "High": "19.790001",
                "Low": "18.719999",
                "Close": "19.75",
                "Volume": "218300",
                "Adj_Close": "18.160858"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-21",
                "Open": "18.17",
                "High": "18.99",
                "Low": "18.040001",
                "Close": "18.59",
                "Volume": "346200",
                "Adj_Close": "17.094195"
            },
            {
                "Symbol": "AB",
                "Date": "2016-01-20",
                "Open": "18.379999",
                "High": "18.52",
                "Low": "17.67",
                "Close": "18.15",
                "Volume": "677100",
                "Adj_Close": "16.689599"
            }
        ]
    }
}
}