export const stockInfo = (amount) => {
    return {
        "optimize": "profit",
        "opType": "max",
        "constraints": {
            "cost": {"max":amount},
            "AADS":{"max": (amount/7)},
            "ACCESS":{"max": (amount/7)},
            "ADB":{"max": (amount/7)},
            "AGA":{"max": (amount/7)},
            "ALW":{"max": (amount/7)},
            "AYRTN":{"max": (amount/7)},
            "BOPP":{"max": (amount/7)},
            "CAL":{"max": (amount/7)},
            "CLYD":{"max": (amount/7)},
            "CMLT":{"max": (amount/7)},
            "CPC":{"max": (amount/7)},
            "DIGICUT":{"max": (amount/7)},
            "EGH":{"max": (amount/7)},
            "EGL":{"max": (amount/7)},
            "ETI":{"max": (amount/7)},
            "FML":{"max": (amount/7)},
            "GCB":{"max": (amount/7)},
            "GGBL":{"max": (amount/7)},
            "GLD":{"max": (amount/7)},
            "GOIL":{"max": (amount/7)},
            "GSR":{"max": (amount/7)},
            "HORDS":{"max": (amount/7)},
            "IIL":{"max": (amount/7)},
            "MAC":{"max": (amount/7)},
            "MLC":{"max": (amount/7)},
            "MMH":{"max": (amount/7)},
            "MTNGH":{"max": (amount/7)},
            "PBC":{"max": (amount/7)},
            "PZC":{"max": (amount/7)},
            "RBGH":{"max": (amount/7)},
            "SAMBA":{"max": (amount/7)},
            "SCB":{"max": (amount/7)},
            "SCBPREF":{"max": (amount/7)},
            "SIC":{"max": (amount/7)},
            "SOGEGH":{"max": (amount/7)},
            "SPL":{"max": (amount/7)},
            "SWL":{"max": (amount/7)},
            "TBL":{"max": (amount/7)},
            "TLW":{"max": (amount/7)},
            "TOTAL":{"max": (amount/7)},
            "UNIL":{"max": (amount/7)},
        },
        "variables": {
          "AADS":{"cost":0.4,"profit":0.41,"AADS":0.4},
          "ACCESS":{"cost":4,"profit":4.01,"ACCESS":4},
          "ADB":{"cost":5.06,"profit":5.067,"ADB":5.06},
          "AGA":{"cost":37,"profit":37.01,"AGA":37},
          "ALW":{"cost":0.09,"profit":0.0912,"ALW":0.09},
          "AYRTN":{"cost":0.08,"profit":0.089,"AYRTN":0.08},
          "BOPP":{"cost":4.13,"profit":4.135,"BOPP":4.13},
          "CAL":{"cost":0.82,"profit":0.083,"CAL":0.82},
          "CLYD":{"cost":0.03,"profit":0.034,"CLYD":0.03},
          "CMLT":{"cost":0.1,"profit":0.103,"CMLT":0.1},
          "CPC":{"cost":0.02,"profit":0,"CPC":0.02},
          "DIGICUT":{"cost":0.09,"profit":0,"DIGICUT":0.09},
          "EGH":{"cost":7,"profit":0,"EGH":7},
          "EGL":{"cost":2,"profit":0,"EGL":2},
          "ETI":{"cost":2,"profit":0,"ETI":2},
          "FML":{"cost":8,"profit":0,"FML":8},
          "GCB":{"cost":5.01,"profit":0,"GCB":5.01},
          "GGBL":{"cost":2.18,"profit":0,"GGBL":2.18},
          "GLD":{"cost":54,"profit":0,"GLD":54},
          "GOIL":{"cost":2.36,"profit":0,"GOIL":2.36},
          "GSR":{"cost":9.5,"profit":0,"GSR":9.5},
          "HORDS":{"cost":0.1,"profit":0,"HORDS": 0.1},
          "IIL":{"cost":0.08,"profit":0,"IIL": 0.08},
          "MAC":{"cost":5.98,"profit":0,"MAC": 5.98},
          "MLC":{"cost":0.09,"profit":0,"MLC": 0.09},
          "MMH":{"cost":0.11,"profit":0,"MMH": 0.11},
          "MTNGH":{"cost":0.74,"profit":0,"MTNGH": 0.74},
          "PBC":{"cost":0.04,"profit":0,"PBC": 0.04},
          "PZC":{"cost":0.4,"profit":0,"PZC": 0.4},
          "RBGH":{"cost":0.63,"profit":0,"RBGH": 0.63},
          "SAMBA":{"cost":0.65,"profit":0,"SAMBA": 0.65},
          "SCB":{"cost":21.8,"profit":0,"SCB": 21.8},
          "SCBPREF":{"cost":0.86,"profit":0,"SCBPREF": 0.86},
          "SIC":{"cost":0.12,"profit":0,"SIC": 0.12},
          "SOGEGH":{"cost":0.72,"profit":0,"SOGEGH": 0.72},
          "SPL":{"cost":0.03,"profit":0,"SPL":0.03},
          "SWL":{"cost":0.05,"profit":0,"SWL": 0.05},
          "TBL":{"cost":0.2,"profit":0,"TBL": 0.2},
          "TLW":{"cost":11.94,"profit":0,"TLW": 11.94},
          "TOTAL":{"cost":4.6,"profit":0,"TOTAL": 4.6},
          "UNIL":{"cost":17.68,"profit":0,"UNIL": 17.68},
      },

        "ints": {
            "AADS":0.4,
            "ACCESS":4,
            "ADB":5.06,
            "AGA":37,
            "ALW":0.09,
            "AYRTN":0.08,
            "BOPP":4.13,
            "CAL":0.82,
            "CLYD":0.03,
            "CMLT":0.1,
            "CPC":1,
            "DIGICUT":1,
            "EGH":1,
            "EGL":1,
            "ETI":1,
            "FML":1,
            "GCB":1,
            "GGBL":1,
            "GLD":1,
            "GOIL":1,
            "GSR":1,
            "HORDS":0.1,
            "IIL":0.08,
            "MAC":5.98,
            "MLC":0.09,
            "MMH":0.11,
            "MTNGH":0.74,
            "PBC":0.04,
            "PZC":0.4,
            "RBGH":0.63,
            "SAMBA":0.65,
            "SCB":21.8,
            "SCBPREF":0.86,
            "SIC":0.12,
            "SOGEGH":0.72,
            "SPL":0.03,
            "SWL":0.05,
            "TBL":0.2,
            "TLW":11.94,
            "TOTAL":4.6,
            "UNIL":17.68,
        }
    }
  };
