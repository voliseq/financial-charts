var rawData = {
    "query": {
        "count": 381,
        "created": "2017-01-28T17:34:56Z",
        "lang": "pl-PL",
        "diagnostics": {
            "url": [
                {
                    "execution-start-time": "0",
                    "execution-stop-time": "2",
                    "execution-time": "2",
                    "content": "http://datatables.org/alltables.env"
                },
                {
                    "execution-start-time": "3",
                    "execution-stop-time": "7",
                    "execution-time": "4",
                    "content": "http://www.datatables.org/yahoo/finance/yahoo.finance.historicaldata.xml"
                },
                {
                    "execution-start-time": "11",
                    "execution-stop-time": "28",
                    "execution-time": "17",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO"
                },
                {
                    "execution-start-time": "31",
                    "execution-stop-time": "35",
                    "execution-time": "4",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO"
                },
                {
                    "execution-start-time": "11",
                    "execution-stop-time": "36",
                    "execution-time": "25",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT"
                },
                {
                    "execution-start-time": "12",
                    "execution-stop-time": "38",
                    "execution-time": "26",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE"
                },
                {
                    "execution-start-time": "41",
                    "execution-stop-time": "58",
                    "execution-time": "17",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE"
                },
                {
                    "execution-start-time": "40",
                    "execution-stop-time": "66",
                    "execution-time": "26",
                    "content": "http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT"
                }
            ],
            "publiclyCallable": "true",
            "cache": [
                {
                    "execution-start-time": "10",
                    "execution-stop-time": "11",
                    "execution-time": "1",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "a35a5bd1a972782328656185797c0a4c"
                },
                {
                    "execution-start-time": "10",
                    "execution-stop-time": "11",
                    "execution-time": "1",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "c86146a43cef66179299f1678131bdd5"
                },
                {
                    "execution-start-time": "10",
                    "execution-stop-time": "11",
                    "execution-time": "1",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "d138ad687536e8eddad55e3e8dbf1c6f"
                },
                {
                    "execution-start-time": "30",
                    "execution-stop-time": "30",
                    "execution-time": "0",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "d0f1a220b126d43d7ca150245362f12a"
                },
                {
                    "execution-start-time": "38",
                    "execution-stop-time": "39",
                    "execution-time": "1",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "12f9ed28fe62c15b05b634360b2f6ccb"
                },
                {
                    "execution-start-time": "40",
                    "execution-stop-time": "40",
                    "execution-time": "0",
                    "method": "GET",
                    "type": "MEMCACHED",
                    "content": "3288823e65182257df65e7871aa28d5a"
                }
            ],
            "query": [
                {
                    "execution-start-time": "11",
                    "execution-stop-time": "29",
                    "execution-time": "18",
                    "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO]}",
                    "content": "select * from csv(0,1) where url=@url"
                },
                {
                    "execution-start-time": "30",
                    "execution-stop-time": "36",
                    "execution-time": "6",
                    "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=CSCO]}",
                    "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
                },
                {
                    "execution-start-time": "11",
                    "execution-stop-time": "38",
                    "execution-time": "27",
                    "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT]}",
                    "content": "select * from csv(0,1) where url=@url"
                },
                {
                    "execution-start-time": "11",
                    "execution-stop-time": "40",
                    "execution-time": "29",
                    "params": "{url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE]}",
                    "content": "select * from csv(0,1) where url=@url"
                },
                {
                    "execution-start-time": "41",
                    "execution-stop-time": "60",
                    "execution-time": "19",
                    "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=ADBE]}",
                    "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
                },
                {
                    "execution-start-time": "39",
                    "execution-stop-time": "68",
                    "execution-time": "29",
                    "params": "{columnsNames=[Date,Open,High,Low,Close,Volume,Adj_Close], url=[http://ichart.finance.yahoo.com/table.csv?a=0&b=20&e=20&g=d&c=2016&d=6&f=2016&s=MSFT]}",
                    "content": "select * from csv(2,0) where url=@url and columns=@columnsNames"
                }
            ],
            "javascript": [
                {
                    "execution-start-time": "9",
                    "execution-stop-time": "225",
                    "execution-time": "216",
                    "instructions-used": "15575602",
                    "table-name": "yahoo.finance.historicaldata"
                },
                {
                    "execution-start-time": "9",
                    "execution-stop-time": "246",
                    "execution-time": "237",
                    "instructions-used": "17145548",
                    "table-name": "yahoo.finance.historicaldata"
                },
                {
                    "execution-start-time": "9",
                    "execution-stop-time": "300",
                    "execution-time": "290",
                    "instructions-used": "18762366",
                    "table-name": "yahoo.finance.historicaldata"
                }
            ],
            "user-time": "303",
            "service-time": "125",
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
                }
            ]
        }
    }
};