var SCHEMA = {
  "name": "PHA4GE",
  "description": "",
  "id": "https://example.com/CanCOGeN_Covid-19",
  "prefixes": {
    "linkml": {
      "prefix_prefix": "linkml",
      "prefix_reference": "https://w3id.org/linkml/"
    },
    "xsd": {
      "prefix_prefix": "xsd",
      "prefix_reference": "http://www.w3.org/2001/XMLSchema#"
    },
    "shex": {
      "prefix_prefix": "shex",
      "prefix_reference": "http://www.w3.org/ns/shex#"
    }
  },
  "default_prefix": "https://example.com/CanCOGeN_Covid-19/",
  "types": {
    "xsd:token": {
      "name": "xsd:token",
      "description": "A string that has no whitespace; i.e., after any occurrence of #x9 (tab), #xA (linefeed), or #xD (carriage return).",
      "base": "str",
      "uri": "xsd:token"
    },
    "provenance": {
      "name": "provenance",
      "description": "A DataHarmonizer prefix version stamp",
      "base": "str",
      "uri": "xsd:token"
    },
    "string": {
      "name": "string",
      "description": "A character string",
      "base": "str",
      "uri": "xsd:string"
    },
    "integer": {
      "name": "integer",
      "description": "An integer",
      "base": "int",
      "uri": "xsd:integer"
    },
    "boolean": {
      "name": "boolean",
      "description": "A binary (true or false) value",
      "base": "Bool",
      "uri": "xsd:boolean",
      "repr": "bool"
    },
    "float": {
      "name": "float",
      "description": "A real number that conforms to the xsd:float specification",
      "base": "float",
      "uri": "xsd:float"
    },
    "double": {
      "name": "double",
      "description": "A real number that conforms to the xsd:double specification",
      "base": "float",
      "uri": "xsd:double"
    },
    "decimal": {
      "name": "decimal",
      "description": "A real number with arbitrary precision that conforms to the xsd:decimal specification",
      "base": "Decimal",
      "uri": "xsd:decimal"
    },
    "time": {
      "name": "time",
      "description": "A time object represents a (local) time of day, independent of any particular day",
      "notes": [
        "URI is dateTime because OWL reasoners don't work with straight date or time"
      ],
      "base": "XSDTime",
      "uri": "xsd:dateTime",
      "repr": "str"
    },
    "date": {
      "name": "date",
      "description": "a date (year, month and day) in an idealized calendar",
      "notes": [
        "URI is dateTime because OWL reasoners don't work with straight date or time"
      ],
      "base": "XSDDate",
      "uri": "xsd:date",
      "repr": "str"
    },
    "datetime": {
      "name": "datetime",
      "description": "The combination of a date and time",
      "base": "XSDDateTime",
      "uri": "xsd:dateTime",
      "repr": "str"
    },
    "uriorcurie": {
      "name": "uriorcurie",
      "description": "a URI or a CURIE",
      "base": "URIorCURIE",
      "uri": "xsd:anyURI",
      "repr": "str"
    },
    "uri": {
      "name": "uri",
      "description": "a complete URI",
      "base": "URI",
      "uri": "xsd:anyURI",
      "repr": "str"
    },
    "ncname": {
      "name": "ncname",
      "description": "Prefix part of CURIE",
      "base": "NCName",
      "uri": "xsd:string",
      "repr": "str"
    },
    "objectidentifier": {
      "name": "objectidentifier",
      "description": "A URI or CURIE that represents an object in the model.",
      "comments": [
        "Used for inheritence and type checking"
      ],
      "base": "ElementIdentifier",
      "uri": "shex:iri",
      "repr": "str"
    },
    "nodeidentifier": {
      "name": "nodeidentifier",
      "description": "A URI, CURIE or BNODE that represents a node in a model.",
      "base": "NodeIdentifier",
      "uri": "shex:nonLiteral",
      "repr": "str"
    }
  },
  "enums": {
    "null value menu": {
      "name": "null value menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Not Applicable [GENEPIO:0001619]": {
          "text": "Not Applicable [GENEPIO:0001619]",
          "meaning": "GENEPIO:0001619"
        },
        "Not Collected [GENEPIO:0001620]": {
          "text": "Not Collected [GENEPIO:0001620]",
          "meaning": "GENEPIO:0001620"
        },
        "Not Provided [GENEPIO:0001668]": {
          "text": "Not Provided [GENEPIO:0001668]",
          "meaning": "GENEPIO:0001668"
        },
        "Missing [GENEPIO:0001618]": {
          "text": "Missing [GENEPIO:0001618]",
          "meaning": "GENEPIO:0001618"
        },
        "Restricted Access [GENEPIO:0001810]": {
          "text": "Restricted Access [GENEPIO:0001810]",
          "meaning": "GENEPIO:0001810"
        }
      }
    },
    "host age unit menu": {
      "name": "host age unit menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "month [UO:0000035]": {
          "text": "month [UO:0000035]",
          "meaning": "UO:0000035"
        },
        "year [UO:0000036]": {
          "text": "year [UO:0000036]",
          "meaning": "UO:0000036"
        }
      }
    },
    "biomaterial extracted menu": {
      "name": "biomaterial extracted menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "RNA (Total) [OBI:0000895]": {
          "text": "RNA (Total) [OBI:0000895]",
          "meaning": "OBI:0000895"
        },
        "RNA (Poly-A) [OBI:0000869]": {
          "text": "RNA (Poly-A) [OBI:0000869]",
          "meaning": "OBI:0000869"
        },
        "RNA (Ribo-Depleted) [OBI:0002627]": {
          "text": "RNA (Ribo-Depleted) [OBI:0002627]",
          "meaning": "OBI:0002627"
        },
        "mRNA (messenger RNA) [GENEPIO:0100104]": {
          "text": "mRNA (messenger RNA) [GENEPIO:0100104]",
          "meaning": "GENEPIO:0100104"
        },
        "mRNA (cDNA) [OBI:0002754]": {
          "text": "mRNA (cDNA) [OBI:0002754]",
          "meaning": "OBI:0002754"
        }
      }
    },
    "signs and symptoms menu": {
      "name": "signs and symptoms menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Abnormal lung auscultation [HP:0030829]": {
          "text": "Abnormal lung auscultation [HP:0030829]",
          "meaning": "HP:0030829"
        },
        "Abnormality of taste sensation [HP:0000223]": {
          "text": "Abnormality of taste sensation [HP:0000223]",
          "meaning": "HP:0000223"
        },
        "Ageusia (complete loss of taste) [HP:0041051]": {
          "text": "Ageusia (complete loss of taste) [HP:0041051]",
          "meaning": "HP:0041051",
          "is_a": "Abnormality of taste sensation [HP:0000223]"
        },
        "Parageusia (distorted sense of taste) [HP:0031249]": {
          "text": "Parageusia (distorted sense of taste) [HP:0031249]",
          "meaning": "HP:0031249",
          "is_a": "Abnormality of taste sensation [HP:0000223]"
        },
        "Hypogeusia (reduced sense of taste) [HP:0000224]": {
          "text": "Hypogeusia (reduced sense of taste) [HP:0000224]",
          "meaning": "HP:0000224",
          "is_a": "Abnormality of taste sensation [HP:0000223]"
        },
        "Abnormality of the sense of smell [HP:0004408]": {
          "text": "Abnormality of the sense of smell [HP:0004408]",
          "meaning": "HP:0004408"
        },
        "Anosmia (lost sense of smell) [HP:0000458]": {
          "text": "Anosmia (lost sense of smell) [HP:0000458]",
          "meaning": "HP:0000458",
          "is_a": "Abnormality of the sense of smell [HP:0004408]"
        },
        "Hyposmia (reduced sense of smell) [HP:0004409]": {
          "text": "Hyposmia (reduced sense of smell) [HP:0004409]",
          "meaning": "HP:0004409",
          "is_a": "Abnormality of the sense of smell [HP:0004408]"
        },
        "Acute Respiratory Distress Syndrome [HP:0033677]": {
          "text": "Acute Respiratory Distress Syndrome [HP:0033677]",
          "meaning": "HP:0033677"
        },
        "Altered mental status [HP:0011446]": {
          "text": "Altered mental status [HP:0011446]",
          "meaning": "HP:0011446"
        },
        "Cognitive impairment [HP:0100543]": {
          "text": "Cognitive impairment [HP:0100543]",
          "meaning": "HP:0100543",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Coma [HP:0001259]": {
          "text": "Coma [HP:0001259]",
          "meaning": "HP:0001259",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Confusion [HP:0001289]": {
          "text": "Confusion [HP:0001289]",
          "meaning": "HP:0001289",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Delirium (sudden severe confusion) [HP:0031258]": {
          "text": "Delirium (sudden severe confusion) [HP:0031258]",
          "meaning": "HP:0031258",
          "is_a": "Confusion [HP:0001289]"
        },
        "Inability to arouse (inability to stay awake) [GENEPIO:0100061]": {
          "text": "Inability to arouse (inability to stay awake) [GENEPIO:0100061]",
          "meaning": "GENEPIO:0100061",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Irritability [HP:0000737]": {
          "text": "Irritability [HP:0000737]",
          "meaning": "HP:0000737",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Loss of speech [HP:0002371]": {
          "text": "Loss of speech [HP:0002371]",
          "meaning": "HP:0002371",
          "is_a": "Altered mental status [HP:0011446]"
        },
        "Arrhythmia [HP:0011675]": {
          "text": "Arrhythmia [HP:0011675]",
          "meaning": "HP:0011675"
        },
        "Asthenia (generalized weakness) [HP:0025406]": {
          "text": "Asthenia (generalized weakness) [HP:0025406]",
          "meaning": "HP:0025406"
        },
        "Chest tightness or pressure [HP:0031352]": {
          "text": "Chest tightness or pressure [HP:0031352]",
          "meaning": "HP:0031352"
        },
        "Rigors (fever shakes) [HP:0025145]": {
          "text": "Rigors (fever shakes) [HP:0025145]",
          "meaning": "HP:0025145",
          "is_a": "Chest tightness or pressure [HP:0031352]"
        },
        "Chills (sudden cold sensation) [HP:0025143]": {
          "text": "Chills (sudden cold sensation) [HP:0025143]",
          "meaning": "HP:0025143"
        },
        "Conjunctival injection [HP:0030953]": {
          "text": "Conjunctival injection [HP:0030953]",
          "meaning": "HP:0030953"
        },
        "Conjunctivitis (pink eye) [HP:0000509]": {
          "text": "Conjunctivitis (pink eye) [HP:0000509]",
          "meaning": "HP:0000509"
        },
        "Coryza (rhinitis) [MP:0001867]": {
          "text": "Coryza (rhinitis) [MP:0001867]",
          "meaning": "MP:0001867"
        },
        "Cough [HP:0012735]": {
          "text": "Cough [HP:0012735]",
          "meaning": "HP:0012735"
        },
        "Nonproductive cough (dry cough) [HP:0031246]": {
          "text": "Nonproductive cough (dry cough) [HP:0031246]",
          "meaning": "HP:0031246",
          "is_a": "Cough [HP:0012735]"
        },
        "Productive cough (wet cough) [HP:0031245]": {
          "text": "Productive cough (wet cough) [HP:0031245]",
          "meaning": "HP:0031245",
          "is_a": "Cough [HP:0012735]"
        },
        "Cyanosis (blueish skin discolouration) [HP:0000961]": {
          "text": "Cyanosis (blueish skin discolouration) [HP:0000961]",
          "meaning": "HP:0000961"
        },
        "Acrocyanosis [HP:0001063]": {
          "text": "Acrocyanosis [HP:0001063]",
          "meaning": "HP:0001063",
          "is_a": "Cyanosis (blueish skin discolouration) [HP:0000961]"
        },
        "Circumoral cyanosis (bluish around mouth) [HP:0032556]": {
          "text": "Circumoral cyanosis (bluish around mouth) [HP:0032556]",
          "meaning": "HP:0032556",
          "is_a": "Acrocyanosis [HP:0001063]"
        },
        "Cyanotic face (bluish face) [GENEPIO:0100062]": {
          "text": "Cyanotic face (bluish face) [GENEPIO:0100062]",
          "meaning": "GENEPIO:0100062",
          "is_a": "Acrocyanosis [HP:0001063]"
        },
        "Central Cyanosis [GENEPIO:0100063]": {
          "text": "Central Cyanosis [GENEPIO:0100063]",
          "meaning": "GENEPIO:0100063",
          "is_a": "Cyanosis (blueish skin discolouration) [HP:0000961]"
        },
        "Cyanotic lips (bluish lips) [GENEPIO:0100064]": {
          "text": "Cyanotic lips (bluish lips) [GENEPIO:0100064]",
          "meaning": "GENEPIO:0100064",
          "is_a": "Central Cyanosis [GENEPIO:0100063]"
        },
        "Peripheral Cyanosis [GENEPIO:0100065]": {
          "text": "Peripheral Cyanosis [GENEPIO:0100065]",
          "meaning": "GENEPIO:0100065",
          "is_a": "Cyanosis (blueish skin discolouration) [HP:0000961]"
        },
        "Dyspnea (breathing difficulty) [HP:0002094]": {
          "text": "Dyspnea (breathing difficulty) [HP:0002094]",
          "meaning": "HP:0002094"
        },
        "Diarrhea (watery stool) [HP:0002014]": {
          "text": "Diarrhea (watery stool) [HP:0002014]",
          "meaning": "HP:0002014"
        },
        "Dry gangrene [MP:0031127]": {
          "text": "Dry gangrene [MP:0031127]",
          "meaning": "MP:0031127"
        },
        "Encephalitis (brain inflammation) [HP:0002383]": {
          "text": "Encephalitis (brain inflammation) [HP:0002383]",
          "meaning": "HP:0002383"
        },
        "Encephalopathy [HP:0001298]": {
          "text": "Encephalopathy [HP:0001298]",
          "meaning": "HP:0001298"
        },
        "Fatigue (tiredness) [HP:0012378]": {
          "text": "Fatigue (tiredness) [HP:0012378]",
          "meaning": "HP:0012378"
        },
        "Fever [HP:0001945]": {
          "text": "Fever [HP:0001945]",
          "meaning": "HP:0001945"
        },
        "Fever (>=38°C) [GENEPIO:0100066]": {
          "text": "Fever (>=38°C) [GENEPIO:0100066]",
          "meaning": "GENEPIO:0100066",
          "is_a": "Fever [HP:0001945]"
        },
        "Glossitis (inflammation of the tongue) [HP:0000206]": {
          "text": "Glossitis (inflammation of the tongue) [HP:0000206]",
          "meaning": "HP:0000206"
        },
        "Ground Glass Opacities (GGO) [GENEPIO:0100067]": {
          "text": "Ground Glass Opacities (GGO) [GENEPIO:0100067]",
          "meaning": "GENEPIO:0100067"
        },
        "Headache [HP:0002315]": {
          "text": "Headache [HP:0002315]",
          "meaning": "HP:0002315"
        },
        "Hemoptysis (coughing up blood) [HP:0002105]": {
          "text": "Hemoptysis (coughing up blood) [HP:0002105]",
          "meaning": "HP:0002105"
        },
        "Hypocapnia [HP:0012417]": {
          "text": "Hypocapnia [HP:0012417]",
          "meaning": "HP:0012417"
        },
        "Hypotension (low blood pressure) [HP:0002615]": {
          "text": "Hypotension (low blood pressure) [HP:0002615]",
          "meaning": "HP:0002615"
        },
        "Hypoxemia (low blood oxygen) [HP:0012418]": {
          "text": "Hypoxemia (low blood oxygen) [HP:0012418]",
          "meaning": "HP:0012418"
        },
        "Silent hypoxemia [GENEPIO:0100068]": {
          "text": "Silent hypoxemia [GENEPIO:0100068]",
          "meaning": "GENEPIO:0100068",
          "is_a": "Hypoxemia (low blood oxygen) [HP:0012418]"
        },
        "Internal hemorrhage (internal bleeding) [HP:0011029]": {
          "text": "Internal hemorrhage (internal bleeding) [HP:0011029]",
          "meaning": "HP:0011029"
        },
        "Loss of Fine Movements [NCIT:C121416]": {
          "text": "Loss of Fine Movements [NCIT:C121416]",
          "meaning": "NCIT:C121416"
        },
        "Low appetite [HP:0004396]": {
          "text": "Low appetite [HP:0004396]",
          "meaning": "HP:0004396"
        },
        "Malaise (general discomfort/unease) [HP:0033834]": {
          "text": "Malaise (general discomfort/unease) [HP:0033834]",
          "meaning": "HP:0033834"
        },
        "Meningismus/nuchal rigidity [HP:0031179]": {
          "text": "Meningismus/nuchal rigidity [HP:0031179]",
          "meaning": "HP:0031179"
        },
        "Muscle weakness [HP:0001324]": {
          "text": "Muscle weakness [HP:0001324]",
          "meaning": "HP:0001324"
        },
        "Nasal obstruction (stuffy nose) [HP:0001742]": {
          "text": "Nasal obstruction (stuffy nose) [HP:0001742]",
          "meaning": "HP:0001742"
        },
        "Nausea [HP:0002018]": {
          "text": "Nausea [HP:0002018]",
          "meaning": "HP:0002018"
        },
        "Nose bleed [HP:0000421]": {
          "text": "Nose bleed [HP:0000421]",
          "meaning": "HP:0000421"
        },
        "Otitis [GENEPIO:0100069]": {
          "text": "Otitis [GENEPIO:0100069]",
          "meaning": "GENEPIO:0100069"
        },
        "Pain [HP:0012531]": {
          "text": "Pain [HP:0012531]",
          "meaning": "HP:0012531"
        },
        "Abdominal pain [HP:0002027]": {
          "text": "Abdominal pain [HP:0002027]",
          "meaning": "HP:0002027",
          "is_a": "Pain [HP:0012531]"
        },
        "Arthralgia (painful joints) [HP:0002829]": {
          "text": "Arthralgia (painful joints) [HP:0002829]",
          "meaning": "HP:0002829",
          "is_a": "Pain [HP:0012531]"
        },
        "Chest pain [HP:0100749]": {
          "text": "Chest pain [HP:0100749]",
          "meaning": "HP:0100749",
          "is_a": "Pain [HP:0012531]"
        },
        "Pleuritic chest pain [HP:0033771]": {
          "text": "Pleuritic chest pain [HP:0033771]",
          "meaning": "HP:0033771",
          "is_a": "Chest pain [HP:0100749]"
        },
        "Myalgia (muscle pain) [HP:0003326]": {
          "text": "Myalgia (muscle pain) [HP:0003326]",
          "meaning": "HP:0003326",
          "is_a": "Pain [HP:0012531]"
        },
        "Pharyngitis (sore throat) [HP:0025439]": {
          "text": "Pharyngitis (sore throat) [HP:0025439]",
          "meaning": "HP:0025439"
        },
        "Pharyngeal exudate [GENEPIO:0100070]": {
          "text": "Pharyngeal exudate [GENEPIO:0100070]",
          "meaning": "GENEPIO:0100070"
        },
        "Pleural effusion [HP:0002202]": {
          "text": "Pleural effusion [HP:0002202]",
          "meaning": "HP:0002202"
        },
        "Pneumonia [HP:0002090]": {
          "text": "Pneumonia [HP:0002090]",
          "meaning": "HP:0002090"
        },
        "Pseudo-chilblains [HP:0033696]": {
          "text": "Pseudo-chilblains [HP:0033696]",
          "meaning": "HP:0033696"
        },
        "Pseudo-chilblains on fingers (covid fingers) [GENEPIO:0100072]": {
          "text": "Pseudo-chilblains on fingers (covid fingers) [GENEPIO:0100072]",
          "meaning": "GENEPIO:0100072",
          "is_a": "Pseudo-chilblains [HP:0033696]"
        },
        "Pseudo-chilblains on toes (covid toes) [GENEPIO:0100073]": {
          "text": "Pseudo-chilblains on toes (covid toes) [GENEPIO:0100073]",
          "meaning": "GENEPIO:0100073",
          "is_a": "Pseudo-chilblains [HP:0033696]"
        },
        "Rash [HP:0000988]": {
          "text": "Rash [HP:0000988]",
          "meaning": "HP:0000988"
        },
        "Rhinorrhea (runny nose) [HP:0031417]": {
          "text": "Rhinorrhea (runny nose) [HP:0031417]",
          "meaning": "HP:0031417"
        },
        "Seizure [HP:0001250]": {
          "text": "Seizure [HP:0001250]",
          "meaning": "HP:0001250"
        },
        "Motor seizure [HP:0020219]": {
          "text": "Motor seizure [HP:0020219]",
          "meaning": "HP:0020219",
          "is_a": "Seizure [HP:0001250]"
        },
        "Shivering (involuntary muscle twitching) [HP:0025144]": {
          "text": "Shivering (involuntary muscle twitching) [HP:0025144]",
          "meaning": "HP:0025144"
        },
        "Slurred speech [HP:0001350]": {
          "text": "Slurred speech [HP:0001350]",
          "meaning": "HP:0001350"
        },
        "Sneezing [HP:0025095]": {
          "text": "Sneezing [HP:0025095]",
          "meaning": "HP:0025095"
        },
        "Sputum Production [HP:0033709]": {
          "text": "Sputum Production [HP:0033709]",
          "meaning": "HP:0033709"
        },
        "Stroke [HP:0001297]": {
          "text": "Stroke [HP:0001297]",
          "meaning": "HP:0001297"
        },
        "Swollen Lymph Nodes [HP:0002716]": {
          "text": "Swollen Lymph Nodes [HP:0002716]",
          "meaning": "HP:0002716"
        },
        "Tachypnea (accelerated respiratory rate) [HP:0002789]": {
          "text": "Tachypnea (accelerated respiratory rate) [HP:0002789]",
          "meaning": "HP:0002789"
        },
        "Vertigo (dizziness) [HP:0002321]": {
          "text": "Vertigo (dizziness) [HP:0002321]",
          "meaning": "HP:0002321"
        },
        "Vomiting (throwing up) [HP:0002013]": {
          "text": "Vomiting (throwing up) [HP:0002013]",
          "meaning": "HP:0002013"
        }
      }
    },
    "host vaccination status menu": {
      "name": "host vaccination status menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Fully Vaccinated [GENEPIO:0100100]": {
          "text": "Fully Vaccinated [GENEPIO:0100100]",
          "meaning": "GENEPIO:0100100",
          "exact_mappings": [
            "NCBI_BIOSAMPLE:prior_SARS-CoV-2_vaccination:Yes"
          ]
        },
        "Partially Vaccinated [GENEPIO:0100101]": {
          "text": "Partially Vaccinated [GENEPIO:0100101]",
          "meaning": "GENEPIO:0100101",
          "exact_mappings": [
            "NCBI_BIOSAMPLE:prior_SARS-CoV-2_vaccination:Yes"
          ]
        },
        "Not Vaccinated [GENEPIO:0100102]": {
          "text": "Not Vaccinated [GENEPIO:0100102]",
          "meaning": "GENEPIO:0100102",
          "exact_mappings": [
            "NCBI_BIOSAMPLE:prior_SARS-CoV-2_vaccination:No"
          ]
        }
      }
    },
    "prior SARS-CoV-2 antiviral treatment menu": {
      "name": "prior SARS-CoV-2 antiviral treatment menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Prior antiviral treatment [GENEPIO:0100037]": {
          "text": "Prior antiviral treatment [GENEPIO:0100037]",
          "meaning": "GENEPIO:0100237",
          "exact_mappings": [
            "NCBI_BIOSAMPLE:prior_SARS-CoV-2_antiviral_treatment:Yes"
          ]
        },
        "No prior antiviral treatment [GENEPIO:0100233]": {
          "text": "No prior antiviral treatment [GENEPIO:0100233]",
          "meaning": "GENEPIO:0100233",
          "exact_mappings": [
            "NCBI_BIOSAMPLE:prior_SARS-CoV-2_antiviral_treatment:No"
          ]
        }
      }
    },
    "pre-existing conditions and risk factors menu": {
      "name": "pre-existing conditions and risk factors menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Age 60+ [VO:0004925]": {
          "text": "Age 60+ [VO:0004925]",
          "meaning": "VO:0004925"
        },
        "Anemia [HP:0001903]": {
          "text": "Anemia [HP:0001903]",
          "meaning": "HP:0001903"
        },
        "Anorexia [HP:0002039]": {
          "text": "Anorexia [HP:0002039]",
          "meaning": "HP:0002039"
        },
        "Birthing labor [NCIT:C92743]": {
          "text": "Birthing labor [NCIT:C92743]",
          "meaning": "NCIT:C92743"
        },
        "Bone marrow failure [NCIT:C80693]": {
          "text": "Bone marrow failure [NCIT:C80693]",
          "meaning": "NCIT:C80693"
        },
        "Cancer [MONDO:0004992]": {
          "text": "Cancer [MONDO:0004992]",
          "meaning": "MONDO:0004992"
        },
        "Breast cancer [MONDO:0007254]": {
          "text": "Breast cancer [MONDO:0007254]",
          "meaning": "MONDO:0007254",
          "is_a": "Cancer [MONDO:0004992]"
        },
        "Colorectal cancer [MONDO:0005575]": {
          "text": "Colorectal cancer [MONDO:0005575]",
          "meaning": "MONDO:0005575",
          "is_a": "Cancer [MONDO:0004992]"
        },
        "Hematologic malignancy (cancer of the blood) [DOID:2531]": {
          "text": "Hematologic malignancy (cancer of the blood) [DOID:2531]",
          "meaning": "DOID:2531",
          "is_a": "Cancer [MONDO:0004992]"
        },
        "Lung cancer [MONDO:0008903]": {
          "text": "Lung cancer [MONDO:0008903]",
          "meaning": "MONDO:0008903",
          "is_a": "Cancer [MONDO:0004992]"
        },
        "Metastatic disease [MONDO:0024880]": {
          "text": "Metastatic disease [MONDO:0024880]",
          "meaning": "MONDO:0024880",
          "is_a": "Cancer [MONDO:0004992]"
        },
        "Cancer treatment [NCIT:C16212]": {
          "text": "Cancer treatment [NCIT:C16212]",
          "meaning": "NCIT:C16212"
        },
        "Cancer surgery [NCIT:C157740]": {
          "text": "Cancer surgery [NCIT:C157740]",
          "meaning": "NCIT:C157740",
          "is_a": "Cancer treatment [NCIT:C16212]"
        },
        "Chemotherapy [NCIT:C15632]": {
          "text": "Chemotherapy [NCIT:C15632]",
          "meaning": "NCIT:C15632",
          "is_a": "Cancer treatment [NCIT:C16212]"
        },
        "Adjuvant chemotherapy [NCIT:C15360]": {
          "text": "Adjuvant chemotherapy [NCIT:C15360]",
          "meaning": "NCIT:C15360",
          "is_a": "Chemotherapy [NCIT:C15632]"
        },
        "Cardiac disorder [NCIT:C3079]": {
          "text": "Cardiac disorder [NCIT:C3079]",
          "meaning": "NCIT:C3079"
        },
        "Arrhythmia [HP:0011675]": {
          "text": "Arrhythmia [HP:0011675]",
          "meaning": "HP:0011675",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Cardiac disease [MONDO:0005267]": {
          "text": "Cardiac disease [MONDO:0005267]",
          "meaning": "MONDO:0005267",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Cardiomyopathy [HP:0001638]": {
          "text": "Cardiomyopathy [HP:0001638]",
          "meaning": "HP:0001638",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Cardiac injury [GENEPIO:0100074]": {
          "text": "Cardiac injury [GENEPIO:0100074]",
          "meaning": "GENEPIO:0100074",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Hypertension (high blood pressure) [HP:0000822]": {
          "text": "Hypertension (high blood pressure) [HP:0000822]",
          "meaning": "HP:0000822",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Hypotension (low blood pressure) [HP:0002615]": {
          "text": "Hypotension (low blood pressure) [HP:0002615]",
          "meaning": "HP:0002615",
          "is_a": "Cardiac disorder [NCIT:C3079]"
        },
        "Cesarean section [HP:0011410]": {
          "text": "Cesarean section [HP:0011410]",
          "meaning": "HP:0011410"
        },
        "Chronic cough [GENEPIO:0100075]": {
          "text": "Chronic cough [GENEPIO:0100075]",
          "meaning": "GENEPIO:0100075"
        },
        "Chronic gastrointestinal disease [GENEPIO:0100076]": {
          "text": "Chronic gastrointestinal disease [GENEPIO:0100076]",
          "meaning": "GENEPIO:0100076"
        },
        "Chronic lung disease [HP:0006528]": {
          "text": "Chronic lung disease [HP:0006528]",
          "meaning": "HP:0006528",
          "is_a": "Lung disease [MONDO:0005275]"
        },
        "Corticosteroids [NCIT:C211]": {
          "text": "Corticosteroids [NCIT:C211]",
          "meaning": "NCIT:C211"
        },
        "Diabetes mellitus (diabetes) [HP:0000819]": {
          "text": "Diabetes mellitus (diabetes) [HP:0000819]",
          "meaning": "HP:0000819"
        },
        "Type I diabetes mellitus (T1D) [HP:0100651]": {
          "text": "Type I diabetes mellitus (T1D) [HP:0100651]",
          "meaning": "HP:0100651",
          "is_a": "Diabetes mellitus (diabetes) [HP:0000819]"
        },
        "Type II diabetes mellitus (T2D) [HP:0005978]": {
          "text": "Type II diabetes mellitus (T2D) [HP:0005978]",
          "meaning": "HP:0005978",
          "is_a": "Diabetes mellitus (diabetes) [HP:0000819]"
        },
        "Eczema [HP:0000964]": {
          "text": "Eczema [HP:0000964]",
          "meaning": "HP:0000964"
        },
        "Electrolyte disturbance [HP:0003111]": {
          "text": "Electrolyte disturbance [HP:0003111]",
          "meaning": "HP:0003111"
        },
        "Hypocalcemia [HP:0002901]": {
          "text": "Hypocalcemia [HP:0002901]",
          "meaning": "HP:0002901",
          "is_a": "Electrolyte disturbance [HP:0003111]"
        },
        "Hypokalemia [HP:0002900]": {
          "text": "Hypokalemia [HP:0002900]",
          "meaning": "HP:0002900",
          "is_a": "Electrolyte disturbance [HP:0003111]"
        },
        "Hypomagnesemia [HP:0002917]": {
          "text": "Hypomagnesemia [HP:0002917]",
          "meaning": "HP:0002917",
          "is_a": "Electrolyte disturbance [HP:0003111]"
        },
        "Encephalitis (brain inflammation) [HP:0002383]": {
          "text": "Encephalitis (brain inflammation) [HP:0002383]",
          "meaning": "HP:0002383"
        },
        "Epilepsy [MONDO:0005027]": {
          "text": "Epilepsy [MONDO:0005027]",
          "meaning": "MONDO:0005027"
        },
        "Hemodialysis [NCIT:C15248]": {
          "text": "Hemodialysis [NCIT:C15248]",
          "meaning": "NCIT:C15248"
        },
        "Hemoglobinopathy [MONDO:0044348]": {
          "text": "Hemoglobinopathy [MONDO:0044348]",
          "meaning": "MONDO:0044348"
        },
        "Human immunodeficiency virus (HIV) [MONDO:0005109]": {
          "text": "Human immunodeficiency virus (HIV) [MONDO:0005109]",
          "meaning": "MONDO:0005109"
        },
        "Acquired immunodeficiency syndrome (AIDS) [MONDO:0012268]": {
          "text": "Acquired immunodeficiency syndrome (AIDS) [MONDO:0012268]",
          "meaning": "MONDO:0012268",
          "is_a": "Human immunodeficiency virus (HIV) [MONDO:0005109]"
        },
        "HIV and antiretroviral therapy (ART) [NCIT:C16118]": {
          "text": "HIV and antiretroviral therapy (ART) [NCIT:C16118]",
          "meaning": "NCIT:C16118",
          "is_a": "Human immunodeficiency virus (HIV) [MONDO:0005109]"
        },
        "Immunocompromised [NCIT:C14139]": {
          "text": "Immunocompromised [NCIT:C14139]",
          "meaning": "NCIT:C14139"
        },
        "Lupus [MONDO:0004670]": {
          "text": "Lupus [MONDO:0004670]",
          "meaning": "MONDO:0004670",
          "is_a": "Immunocompromised [NCIT:C14139]"
        },
        "Inflammatory bowel disease (IBD) [MONDO:0005265]": {
          "text": "Inflammatory bowel disease (IBD) [MONDO:0005265]",
          "meaning": "MONDO:0005265"
        },
        "Colitis [HP:0002583]": {
          "text": "Colitis [HP:0002583]",
          "meaning": "HP:0002583",
          "is_a": "Inflammatory bowel disease (IBD) [MONDO:0005265]"
        },
        "Ulcerative colitis [HP:0100279]": {
          "text": "Ulcerative colitis [HP:0100279]",
          "meaning": "HP:0100279",
          "is_a": "Colitis [HP:0002583]"
        },
        "Crohn's disease [HP:0100280]": {
          "text": "Crohn's disease [HP:0100280]",
          "meaning": "HP:0100280",
          "is_a": "Inflammatory bowel disease (IBD) [MONDO:0005265]"
        },
        "Renal disorder [NCIT:C3149]": {
          "text": "Renal disorder [NCIT:C3149]",
          "meaning": "NCIT:C3149"
        },
        "Renal disease [MONDO:0005240]": {
          "text": "Renal disease [MONDO:0005240]",
          "meaning": "MONDO:0005240",
          "is_a": "Renal disorder [NCIT:C3149]"
        },
        "Chronic renal disease [HP:0012622]": {
          "text": "Chronic renal disease [HP:0012622]",
          "meaning": "HP:0012622",
          "is_a": "Renal disease [MONDO:0005240]"
        },
        "Renal failure [HP:0000083]": {
          "text": "Renal failure [HP:0000083]",
          "meaning": "HP:0000083",
          "is_a": "Renal disorder [NCIT:C3149]"
        },
        "Liver disease [MONDO:0005154]": {
          "text": "Liver disease [MONDO:0005154]",
          "meaning": "MONDO:0005154"
        },
        "Chronic liver disease [NCIT:C113609]": {
          "text": "Chronic liver disease [NCIT:C113609]",
          "meaning": "NCIT:C113609",
          "is_a": "Liver disease [MONDO:0005154]"
        },
        "Fatty liver disease (FLD) [HP:0001397]": {
          "text": "Fatty liver disease (FLD) [HP:0001397]",
          "meaning": "HP:0001397",
          "is_a": "Chronic liver disease [NCIT:C113609]"
        },
        "Myalgia (muscle pain)  [HP:0003326]": {
          "text": "Myalgia (muscle pain)  [HP:0003326]",
          "meaning": "HP:0003326"
        },
        "Myalgic encephalomyelitis (ME) [MONDO:0005404]": {
          "text": "Myalgic encephalomyelitis (ME) [MONDO:0005404]",
          "meaning": "MONDO:0005404"
        },
        "Neurological disorder [MONDO:0005071]": {
          "text": "Neurological disorder [MONDO:0005071]",
          "meaning": "MONDO:0005071"
        },
        "Neuromuscular disorder [MONDO:0019056]": {
          "text": "Neuromuscular disorder [MONDO:0019056]",
          "meaning": "MONDO:0019056",
          "is_a": "Neurological disorder [MONDO:0005071]"
        },
        "Obesity [HP:0001513]": {
          "text": "Obesity [HP:0001513]",
          "meaning": "HP:0001513"
        },
        "Severe obesity [MONDO:0005139]": {
          "text": "Severe obesity [MONDO:0005139]",
          "meaning": "MONDO:0005139",
          "is_a": "Obesity [HP:0001513]"
        },
        "Respiratory disorder [MONDO:0005087]": {
          "text": "Respiratory disorder [MONDO:0005087]",
          "meaning": "MONDO:0005087"
        },
        "Asthma [HP:0002099]": {
          "text": "Asthma [HP:0002099]",
          "meaning": "HP:0002099",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Chronic bronchitis [HP:0004469]": {
          "text": "Chronic bronchitis [HP:0004469]",
          "meaning": "HP:0004469",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Chronic pulmonary disease [HP:0006528]": {
          "text": "Chronic pulmonary disease [HP:0006528]",
          "meaning": "HP:0006528",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Chronic obstructive pulmonary disease [HP:0006510]": {
          "text": "Chronic obstructive pulmonary disease [HP:0006510]",
          "meaning": "HP:0006510",
          "is_a": "Chronic pulmonary disease [HP:0006528]"
        },
        "Emphysema [HP:0002097]": {
          "text": "Emphysema [HP:0002097]",
          "meaning": "HP:0002097",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Lung disease [MONDO:0005275]": {
          "text": "Lung disease [MONDO:0005275]",
          "meaning": "MONDO:0005275",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Pulmonary fibrosis [HP:0002206]": {
          "text": "Pulmonary fibrosis [HP:0002206]",
          "meaning": "HP:0002206",
          "is_a": "Lung disease [MONDO:0005275]"
        },
        "Pneumonia [HP:0002090]": {
          "text": "Pneumonia [HP:0002090]",
          "meaning": "HP:0002090",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Respiratory failure [HP:0002878]": {
          "text": "Respiratory failure [HP:0002878]",
          "meaning": "HP:0002878",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Adult respiratory distress syndrome [HP:0033677]": {
          "text": "Adult respiratory distress syndrome [HP:0033677]",
          "meaning": "HP:0033677",
          "is_a": "Respiratory failure [HP:0002878]"
        },
        "Newborn respiratory distress syndrome [MONDO:0009971]": {
          "text": "Newborn respiratory distress syndrome [MONDO:0009971]",
          "meaning": "MONDO:0009971",
          "is_a": "Respiratory failure [HP:0002878]"
        },
        "Tuberculosis [MONDO:0018076]": {
          "text": "Tuberculosis [MONDO:0018076]",
          "meaning": "MONDO:0018076",
          "is_a": "Respiratory disorder [MONDO:0005087]"
        },
        "Postpartum (≤6 weeks) [GENEPIO:0100077]": {
          "text": "Postpartum (≤6 weeks) [GENEPIO:0100077]",
          "meaning": "GENEPIO:0100077"
        },
        "Pregnancy [NCIT:C25742]": {
          "text": "Pregnancy [NCIT:C25742]",
          "meaning": "NCIT:C25742"
        },
        "Rheumatic disease [MONDO:0005554]": {
          "text": "Rheumatic disease [MONDO:0005554]",
          "meaning": "MONDO:0005554"
        },
        "Sickle cell disease [MONDO:0011382]": {
          "text": "Sickle cell disease [MONDO:0011382]",
          "meaning": "MONDO:0011382"
        },
        "Substance use [NBO:0001845]": {
          "text": "Substance use [NBO:0001845]",
          "meaning": "NBO:0001845"
        },
        "Alcohol abuse [MONDO:0002046]": {
          "text": "Alcohol abuse [MONDO:0002046]",
          "meaning": "MONDO:0002046",
          "is_a": "Substance use [NBO:0001845]"
        },
        "Drug abuse [GENEPIO:0100078]": {
          "text": "Drug abuse [GENEPIO:0100078]",
          "meaning": "GENEPIO:0100078",
          "is_a": "Substance use [NBO:0001845]"
        },
        "Injection drug abuse [GENEPIO:0100079]": {
          "text": "Injection drug abuse [GENEPIO:0100079]",
          "meaning": "GENEPIO:0100079",
          "is_a": "Drug abuse [GENEPIO:0100078]"
        },
        "Smoking [NBO:0015005]": {
          "text": "Smoking [NBO:0015005]",
          "meaning": "NBO:0015005",
          "is_a": "Substance use [NBO:0001845]"
        },
        "Vaping [NCIT:C173621]": {
          "text": "Vaping [NCIT:C173621]",
          "meaning": "NCIT:C173621",
          "is_a": "Substance use [NBO:0001845]"
        },
        "Tachypnea (accelerated respiratory rate) [HP:0002789]": {
          "text": "Tachypnea (accelerated respiratory rate) [HP:0002789]",
          "meaning": "HP:0002789"
        },
        "Transplant [NCIT:C159659]": {
          "text": "Transplant [NCIT:C159659]",
          "meaning": "NCIT:C159659"
        },
        "Cardiac transplant [NCIT:C131759]": {
          "text": "Cardiac transplant [NCIT:C131759]",
          "meaning": "GENEPIO:0100080",
          "is_a": "Transplant [NCIT:C159659]"
        },
        "Hematopoietic stem cell transplant (bone marrow transplant) [GENEPIO:0100080]": {
          "text": "Hematopoietic stem cell transplant (bone marrow transplant) [GENEPIO:0100080]",
          "meaning": "NCIT:C131759",
          "is_a": "Transplant [NCIT:C159659]"
        },
        "Kidney transplant [NCIT:C157332]": {
          "text": "Kidney transplant [NCIT:C157332]",
          "meaning": "NCIT:C157332",
          "is_a": "Transplant [NCIT:C159659]"
        },
        "Liver transplant [GENEPIO:0100081]": {
          "text": "Liver transplant [GENEPIO:0100081]",
          "meaning": "GENEPIO:0100081",
          "is_a": "Transplant [NCIT:C159659]"
        }
      }
    },
    "variant designation menu": {
      "name": "variant designation menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Variant of Interest (VOI) [GENEPIO:0100082]": {
          "text": "Variant of Interest (VOI) [GENEPIO:0100082]",
          "meaning": "GENEPIO:0100082"
        },
        "Variant of Concern (VOC) [GENEPIO:0100083]": {
          "text": "Variant of Concern (VOC) [GENEPIO:0100083]",
          "meaning": "GENEPIO:0100083"
        },
        "Variant Under Monitoring (VUM) [GENEPIO:0100279]": {
          "text": "Variant Under Monitoring (VUM) [GENEPIO:0100279]",
          "meaning": "GENEPIO:0100279"
        }
      }
    },
    "complications menu": {
      "name": "complications menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Abnormal blood oxygen level [HP:0500165]": {
          "text": "Abnormal blood oxygen level [HP:0500165]",
          "meaning": "HP:0500165"
        },
        "Acute kidney injury [HP:0001919]": {
          "text": "Acute kidney injury [HP:0001919]",
          "meaning": "HP:0001919"
        },
        "Acute lung injury [MONDO:0015796]": {
          "text": "Acute lung injury [MONDO:0015796]",
          "meaning": "MONDO:0015796"
        },
        "Ventilation induced lung injury (VILI) [GENEPIO:0100092]": {
          "text": "Ventilation induced lung injury (VILI) [GENEPIO:0100092]",
          "meaning": "GENEPIO:0100092",
          "is_a": "Acute lung injury [MONDO:0015796]"
        },
        "Acute respiratory failure [MONDO:0001208]": {
          "text": "Acute respiratory failure [MONDO:0001208]",
          "meaning": "MONDO:0001208"
        },
        "Arrhythmia (complication) [HP:0011675]": {
          "text": "Arrhythmia (complication) [HP:0011675]",
          "meaning": "HP:0011675"
        },
        "Tachycardia [HP:0001649]": {
          "text": "Tachycardia [HP:0001649]",
          "meaning": "HP:0001649",
          "is_a": "Arrhythmia (complication) [HP:0011675]"
        },
        "Polymorphic ventricular tachycardia (VT) [HP:0031677]": {
          "text": "Polymorphic ventricular tachycardia (VT) [HP:0031677]",
          "meaning": "HP:0031677",
          "is_a": "Tachycardia [HP:0001649]"
        },
        "Tachyarrhythmia [GENEPIO:0100084]": {
          "text": "Tachyarrhythmia [GENEPIO:0100084]",
          "meaning": "GENEPIO:0100084",
          "is_a": "Tachycardia [HP:0001649]"
        },
        "Cardiac injury [GENEPIO:0100074]": {
          "text": "Cardiac injury [GENEPIO:0100074]",
          "meaning": "GENEPIO:0100087"
        },
        "Cardiac arrest [HP:0001695]": {
          "text": "Cardiac arrest [HP:0001695]",
          "meaning": "HP:0001695"
        },
        "Cardiogenic shock [HP:0030149]": {
          "text": "Cardiogenic shock [HP:0030149]",
          "meaning": "HP:0030149"
        },
        "Blood clot [HP:0001977]": {
          "text": "Blood clot [HP:0001977]",
          "meaning": "HP:0001977"
        },
        "Arterial clot [HP:0004420]": {
          "text": "Arterial clot [HP:0004420]",
          "meaning": "HP:0004420",
          "is_a": "Blood clot [HP:0001977]"
        },
        "Deep vein thrombosis (DVT) [HP:0002625]": {
          "text": "Deep vein thrombosis (DVT) [HP:0002625]",
          "meaning": "HP:0002625",
          "is_a": "Blood clot [HP:0001977]"
        },
        "Pulmonary embolism (PE) [HP:0002204]": {
          "text": "Pulmonary embolism (PE) [HP:0002204]",
          "meaning": "HP:0002204",
          "is_a": "Blood clot [HP:0001977]"
        },
        "Cardiomyopathy [HP:0001638]": {
          "text": "Cardiomyopathy [HP:0001638]",
          "meaning": "HP:0001638"
        },
        "Central nervous system invasion [MONDO:0024619]": {
          "text": "Central nervous system invasion [MONDO:0024619]",
          "meaning": "MONDO:0024619"
        },
        "Stroke (complication) [HP:0001297]": {
          "text": "Stroke (complication) [HP:0001297]",
          "meaning": "HP:0001297"
        },
        "Central Nervous System Vasculitis [MONDO:0003346]": {
          "text": "Central Nervous System Vasculitis [MONDO:0003346]",
          "meaning": "MONDO:0003346",
          "is_a": "Stroke (complication) [HP:0001297]"
        },
        "Acute ischemic stroke [HP:0002140]": {
          "text": "Acute ischemic stroke [HP:0002140]",
          "meaning": "HP:0002140",
          "is_a": "Stroke (complication) [HP:0001297]"
        },
        "Coma [HP:0001259]": {
          "text": "Coma [HP:0001259]",
          "meaning": "HP:0001259"
        },
        "Convulsions [HP:0011097]": {
          "text": "Convulsions [HP:0011097]",
          "meaning": "HP:0011097"
        },
        "COVID-19 associated coagulopathy (CAC) [NCIT:C171562]": {
          "text": "COVID-19 associated coagulopathy (CAC) [NCIT:C171562]",
          "meaning": "NCIT:C171562"
        },
        "Cystic fibrosis [MONDO:0009061]": {
          "text": "Cystic fibrosis [MONDO:0009061]",
          "meaning": "MONDO:0009061"
        },
        "Cytokine release syndrome [MONDO:0600008]": {
          "text": "Cytokine release syndrome [MONDO:0600008]",
          "meaning": "MONDO:0600008"
        },
        "Disseminated intravascular coagulation (DIC) [MPATH:108]": {
          "text": "Disseminated intravascular coagulation (DIC) [MPATH:108]",
          "meaning": "MPATH:108"
        },
        "Encephalopathy [HP:0001298]": {
          "text": "Encephalopathy [HP:0001298]",
          "meaning": "HP:0001298"
        },
        "Fulminant myocarditis [GENEPIO:0100088]": {
          "text": "Fulminant myocarditis [GENEPIO:0100088]",
          "meaning": "GENEPIO:0100088"
        },
        "Guillain-Barré syndrome [MONDO:0016218]": {
          "text": "Guillain-Barré syndrome [MONDO:0016218]",
          "meaning": "MONDO:0016218"
        },
        "Internal hemorrhage (complication; internal bleeding) [HP:0011029]": {
          "text": "Internal hemorrhage (complication; internal bleeding) [HP:0011029]",
          "meaning": "HP:0011029"
        },
        "Intracerebral haemorrhage [MONDO:0013792]": {
          "text": "Intracerebral haemorrhage [MONDO:0013792]",
          "meaning": "MONDO:0013792",
          "is_a": "Internal hemorrhage (complication; internal bleeding) [HP:0011029]"
        },
        "Kawasaki disease [MONDO:0012727]": {
          "text": "Kawasaki disease [MONDO:0012727]",
          "meaning": "MONDO:0012727"
        },
        "Complete Kawasaki disease [GENEPIO:0100089]": {
          "text": "Complete Kawasaki disease [GENEPIO:0100089]",
          "meaning": "GENEPIO:0100089",
          "is_a": "Kawasaki disease [MONDO:0012727]"
        },
        "Incomplete Kawasaki disease [GENEPIO:0100090]": {
          "text": "Incomplete Kawasaki disease [GENEPIO:0100090]",
          "meaning": "GENEPIO:0100090",
          "is_a": "Kawasaki disease [MONDO:0012727]"
        },
        "Liver dysfunction [HP:0001410]": {
          "text": "Liver dysfunction [HP:0001410]",
          "meaning": "HP:0001410"
        },
        "Acute liver injury [GENEPIO:0100091]": {
          "text": "Acute liver injury [GENEPIO:0100091]",
          "meaning": "GENEPIO:0100091",
          "is_a": "Liver dysfunction [HP:0001410]"
        },
        "Long COVID-19 [MONDO:0100233]": {
          "text": "Long COVID-19 [MONDO:0100233]",
          "meaning": "MONDO:0100233"
        },
        "Meningitis [HP:0001287]": {
          "text": "Meningitis [HP:0001287]",
          "meaning": "HP:0001287"
        },
        "Migraine [HP:0002076]": {
          "text": "Migraine [HP:0002076]",
          "meaning": "HP:0002076"
        },
        "Miscarriage [HP:0005268]": {
          "text": "Miscarriage [HP:0005268]",
          "meaning": "HP:0005268"
        },
        "Multisystem inflammatory syndrome in children (MIS-C) [MONDO:0100163]": {
          "text": "Multisystem inflammatory syndrome in children (MIS-C) [MONDO:0100163]",
          "meaning": "MONDO:0100163"
        },
        "Multisystem inflammatory syndrome in adults (MIS-A) [MONDO:0100319]": {
          "text": "Multisystem inflammatory syndrome in adults (MIS-A) [MONDO:0100319]",
          "meaning": "MONDO:0100319"
        },
        "Muscle injury [GENEPIO:0100093]": {
          "text": "Muscle injury [GENEPIO:0100093]",
          "meaning": "GENEPIO:0100093"
        },
        "Myalgic encephalomyelitis (chronic fatigue syndrome) [MONDO:0005404]": {
          "text": "Myalgic encephalomyelitis (chronic fatigue syndrome) [MONDO:0005404]",
          "meaning": "MONDO:0005404"
        },
        "Myocardial infarction (heart attack) [MONDO:0005068]": {
          "text": "Myocardial infarction (heart attack) [MONDO:0005068]",
          "meaning": "MONDO:0005068"
        },
        "Acute myocardial infarction [MONDO:0004781]": {
          "text": "Acute myocardial infarction [MONDO:0004781]",
          "meaning": "MONDO:0004781",
          "is_a": "Myocardial infarction (heart attack) [MONDO:0005068]"
        },
        "ST-segment elevation myocardial infarction [MONDO:0041656]": {
          "text": "ST-segment elevation myocardial infarction [MONDO:0041656]",
          "meaning": "MONDO:0041656",
          "is_a": "Myocardial infarction (heart attack) [MONDO:0005068]"
        },
        "Myocardial injury [HP:0001700]": {
          "text": "Myocardial injury [HP:0001700]",
          "meaning": "HP:0001700"
        },
        "Neonatal complications [NCIT:C168498]": {
          "text": "Neonatal complications [NCIT:C168498]",
          "meaning": "NCIT:C168498"
        },
        "Noncardiogenic pulmonary edema [GENEPIO:0100085]": {
          "text": "Noncardiogenic pulmonary edema [GENEPIO:0100085]",
          "meaning": "GENEPIO:0100085"
        },
        "Acute respiratory distress syndrome (ARDS) [HP:0033677]": {
          "text": "Acute respiratory distress syndrome (ARDS) [HP:0033677]",
          "meaning": "HP:0033677",
          "is_a": "Noncardiogenic pulmonary edema [GENEPIO:0100085]"
        },
        "COVID-19 associated ARDS (CARDS) [NCIT:C171551]": {
          "text": "COVID-19 associated ARDS (CARDS) [NCIT:C171551]",
          "meaning": "NCIT:C171551",
          "is_a": "Acute respiratory distress syndrome (ARDS) [HP:0033677]"
        },
        "Neurogenic pulmonary edema (NPE) [GENEPIO:0100086]": {
          "text": "Neurogenic pulmonary edema (NPE) [GENEPIO:0100086]",
          "meaning": "GENEPIO:0100086",
          "is_a": "Acute respiratory distress syndrome (ARDS) [HP:0033677]"
        },
        "Organ failure [GENEPIO:0100094]": {
          "text": "Organ failure [GENEPIO:0100094]",
          "meaning": "GENEPIO:0100094"
        },
        "Heart failure [HP:0001635]": {
          "text": "Heart failure [HP:0001635]",
          "meaning": "HP:0001635",
          "is_a": "Organ failure [GENEPIO:0100094]"
        },
        "Liver failure [MONDO:0100192]": {
          "text": "Liver failure [MONDO:0100192]",
          "meaning": "MONDO:0100192",
          "is_a": "Organ failure [GENEPIO:0100094]"
        },
        "Paralysis [HP:0003470]": {
          "text": "Paralysis [HP:0003470]",
          "meaning": "HP:0003470"
        },
        "Pneumothorax (collapsed lung) [HP:0002107]": {
          "text": "Pneumothorax (collapsed lung) [HP:0002107]",
          "meaning": "HP:0002107"
        },
        "Spontaneous pneumothorax [HP:0002108]": {
          "text": "Spontaneous pneumothorax [HP:0002108]",
          "meaning": "HP:0002108",
          "is_a": "Pneumothorax (collapsed lung) [HP:0002107]"
        },
        "Spontaneous tension pneymothorax [MONDO:0002075]": {
          "text": "Spontaneous tension pneymothorax [MONDO:0002075]",
          "meaning": "MONDO:0002075",
          "is_a": "Pneumothorax (collapsed lung) [HP:0002107]"
        },
        "Pneumonia (complication) [HP:0002090]": {
          "text": "Pneumonia (complication) [HP:0002090]",
          "meaning": "HP:0002090"
        },
        "COVID-19 pneumonia [NCIT:C171550]": {
          "text": "COVID-19 pneumonia [NCIT:C171550]",
          "meaning": "NCIT:C171550",
          "is_a": "Pneumonia (complication) [HP:0002090]"
        },
        "Pregancy complications [HP:0001197]": {
          "text": "Pregancy complications [HP:0001197]",
          "meaning": "HP:0001197"
        },
        "Rhabdomyolysis [HP:0003201]": {
          "text": "Rhabdomyolysis [HP:0003201]",
          "meaning": "HP:0003201"
        },
        "Secondary infection [IDO:0000567]": {
          "text": "Secondary infection [IDO:0000567]",
          "meaning": "IDO:0000567"
        },
        "Secondary staph infection [GENEPIO:0100095]": {
          "text": "Secondary staph infection [GENEPIO:0100095]",
          "meaning": "GENEPIO:0100095",
          "is_a": "Secondary infection [IDO:0000567]"
        },
        "Secondary strep infection [GENEPIO:0100096]": {
          "text": "Secondary strep infection [GENEPIO:0100096]",
          "meaning": "GENEPIO:0100096",
          "is_a": "Secondary infection [IDO:0000567]"
        },
        "Seizure (complication) [HP:0001250]": {
          "text": "Seizure (complication) [HP:0001250]",
          "meaning": "HP:0001250"
        },
        "Motor seizure [HP:0020219]": {
          "text": "Motor seizure [HP:0020219]",
          "meaning": "HP:0020219",
          "is_a": "Seizure (complication) [HP:0001250]"
        },
        "Sepsis/Septicemia [HP:0100806]": {
          "text": "Sepsis/Septicemia [HP:0100806]",
          "meaning": "HP:0100806"
        },
        "Sepsis (systemic inflammatory response to infection) [IDO:0000636]": {
          "text": "Sepsis (systemic inflammatory response to infection) [IDO:0000636]",
          "meaning": "IDO:0000636",
          "is_a": "Sepsis/Septicemia [HP:0100806]"
        },
        "Septicemia (bloodstream infection) [NCIT:C3364]": {
          "text": "Septicemia (bloodstream infection) [NCIT:C3364]",
          "meaning": "NCIT:C3364",
          "is_a": "Sepsis/Septicemia [HP:0100806]"
        },
        "Shock [HP:0031273]": {
          "text": "Shock [HP:0031273]",
          "meaning": "HP:0031273"
        },
        "Hyperinflammatory shock [GENEPIO:0100097]": {
          "text": "Hyperinflammatory shock [GENEPIO:0100097]",
          "meaning": "GENEPIO:0100097",
          "is_a": "Shock [HP:0031273]"
        },
        "Refractory cardiogenic shock [GENEPIO:0100098]": {
          "text": "Refractory cardiogenic shock [GENEPIO:0100098]",
          "meaning": "GENEPIO:0100098",
          "is_a": "Shock [HP:0031273]"
        },
        "Refractory cardiogenic plus vasoplegic shock [GENEPIO:0100099]": {
          "text": "Refractory cardiogenic plus vasoplegic shock [GENEPIO:0100099]",
          "meaning": "GENEPIO:0100099",
          "is_a": "Shock [HP:0031273]"
        },
        "Septic shock [NCIT:C35018]": {
          "text": "Septic shock [NCIT:C35018]",
          "meaning": "NCIT:C35018",
          "is_a": "Shock [HP:0031273]"
        },
        "Vasculitis [HP:0002633]": {
          "text": "Vasculitis [HP:0002633]",
          "meaning": "HP:0002633"
        }
      }
    },
    "sample collected in quarantine menu": {
      "name": "sample collected in quarantine menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Yes [NCIT:C49488]": {
          "text": "Yes [NCIT:C49488]",
          "meaning": "NCIT:C49488"
        },
        "No [NCIT:C49487]": {
          "text": "No [NCIT:C49487]",
          "meaning": "NCIT:C49487"
        }
      }
    },
    "anatomical material menu": {
      "name": "anatomical material menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Blood [UBERON:0000178]": {
          "text": "Blood [UBERON:0000178]",
          "meaning": "UBERON:0000178"
        },
        "Fluid [UBERON:0006314]": {
          "text": "Fluid [UBERON:0006314]",
          "meaning": "UBERON:0006314"
        },
        "Fluid (cerebrospinal (CSF)) [UBERON:0001359]": {
          "text": "Fluid (cerebrospinal (CSF)) [UBERON:0001359]",
          "meaning": "UBERON:0001359",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Fluid (pericardial) [UBERON:0002409]": {
          "text": "Fluid (pericardial) [UBERON:0002409]",
          "meaning": "UBERON:0002409",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Fluid (pleural) [UBERON:0001087]": {
          "text": "Fluid (pleural) [UBERON:0001087]",
          "meaning": "UBERON:0001087",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Fluid (vaginal) [UBERON:0036243]": {
          "text": "Fluid (vaginal) [UBERON:0036243]",
          "meaning": "UBERON:0036243",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Fluid (amniotic) [UBERON:0000173]": {
          "text": "Fluid (amniotic) [UBERON:0000173]",
          "meaning": "UBERON:0000173",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Saliva [UBERON:0001836]": {
          "text": "Saliva [UBERON:0001836]",
          "meaning": "UBERON:0001836",
          "is_a": "Fluid [UBERON:0006314]"
        },
        "Tissue [UBERON:0000479]": {
          "text": "Tissue [UBERON:0000479]",
          "meaning": "UBERON:0000479"
        }
      }
    },
    "anatomical part menu": {
      "name": "anatomical part menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Anus [UBERON:0001245]": {
          "text": "Anus [UBERON:0001245]",
          "meaning": "UBERON:0001245"
        },
        "Buccal mucosa [UBERON:0006956]": {
          "text": "Buccal mucosa [UBERON:0006956]",
          "meaning": "UBERON:0006956"
        },
        "Duodenum [UBERON:0002114]": {
          "text": "Duodenum [UBERON:0002114]",
          "meaning": "UBERON:0002114"
        },
        "Eye [UBERON:0000970]": {
          "text": "Eye [UBERON:0000970]",
          "meaning": "UBERON:0000970"
        },
        "Intestine [UBERON:0000160]": {
          "text": "Intestine [UBERON:0000160]",
          "meaning": "UBERON:0000160"
        },
        "Lower respiratory tract [UBERON:0001558]": {
          "text": "Lower respiratory tract [UBERON:0001558]",
          "meaning": "UBERON:0001558"
        },
        "Bronchus [UBERON:0002185]": {
          "text": "Bronchus [UBERON:0002185]",
          "meaning": "UBERON:0002185",
          "is_a": "Lower respiratory tract [UBERON:0001558]"
        },
        "Lung [UBERON:0002048]": {
          "text": "Lung [UBERON:0002048]",
          "meaning": "UBERON:0002048",
          "is_a": "Lower respiratory tract [UBERON:0001558]"
        },
        "Bronchiole [UBERON:0002186]": {
          "text": "Bronchiole [UBERON:0002186]",
          "meaning": "UBERON:0002186",
          "is_a": "Lung [UBERON:0002048]"
        },
        "Alveolar sac [UBERON:0002169]": {
          "text": "Alveolar sac [UBERON:0002169]",
          "meaning": "UBERON:0002169",
          "is_a": "Lung [UBERON:0002048]"
        },
        "Pleural sac [UBERON:0009778]": {
          "text": "Pleural sac [UBERON:0009778]",
          "meaning": "UBERON:0009778",
          "is_a": "Lower respiratory tract [UBERON:0001558]"
        },
        "Pleural cavity [UBERON:0002402]": {
          "text": "Pleural cavity [UBERON:0002402]",
          "meaning": "UBERON:0002402",
          "is_a": "Pleural sac [UBERON:0009778]"
        },
        "Trachea [UBERON:0003126]": {
          "text": "Trachea [UBERON:0003126]",
          "meaning": "UBERON:0003126",
          "is_a": "Lower respiratory tract [UBERON:0001558]"
        },
        "Rectum [UBERON:0001052]": {
          "text": "Rectum [UBERON:0001052]",
          "meaning": "UBERON:0001052"
        },
        "Skin [UBERON:0001003]": {
          "text": "Skin [UBERON:0001003]",
          "meaning": "UBERON:0001003"
        },
        "Stomach [UBERON:0000945]": {
          "text": "Stomach [UBERON:0000945]",
          "meaning": "UBERON:0000945"
        },
        "Upper respiratory tract [UBERON:0001557]": {
          "text": "Upper respiratory tract [UBERON:0001557]",
          "meaning": "UBERON:0001557"
        },
        "Anterior Nares [UBERON:2001427]": {
          "text": "Anterior Nares [UBERON:2001427]",
          "meaning": "UBERON:2001427",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        },
        "Esophagus [UBERON:0001043]": {
          "text": "Esophagus [UBERON:0001043]",
          "meaning": "UBERON:0001043",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        },
        "Ethmoid sinus [UBERON:0002453]": {
          "text": "Ethmoid sinus [UBERON:0002453]",
          "meaning": "UBERON:0002453",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        },
        "Nasal Cavity [UBERON:0001707]": {
          "text": "Nasal Cavity [UBERON:0001707]",
          "meaning": "UBERON:0001707",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        },
        "Middle Nasal Turbinate [UBERON:0005921]": {
          "text": "Middle Nasal Turbinate [UBERON:0005921]",
          "meaning": "UBERON:0005921",
          "is_a": "Nasal Cavity [UBERON:0001707]"
        },
        "Inferior Nasal Turbinate [UBERON:0005922]": {
          "text": "Inferior Nasal Turbinate [UBERON:0005922]",
          "meaning": "UBERON:0005922",
          "is_a": "Nasal Cavity [UBERON:0001707]"
        },
        "Nasopharynx (NP) [UBERON:0001728]": {
          "text": "Nasopharynx (NP) [UBERON:0001728]",
          "meaning": "UBERON:0001728",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        },
        "Oropharynx (OP) [UBERON:0001729]": {
          "text": "Oropharynx (OP) [UBERON:0001729]",
          "meaning": "UBERON:0001729",
          "is_a": "Upper respiratory tract [UBERON:0001557]"
        }
      }
    },
    "body product menu": {
      "name": "body product menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Breast Milk [UBERON:0001913]": {
          "text": "Breast Milk [UBERON:0001913]",
          "meaning": "UBERON:0001913"
        },
        "Feces [UBERON:0001988]": {
          "text": "Feces [UBERON:0001988]",
          "meaning": "UBERON:0001988"
        },
        "Fluid (seminal) [UBERON:0006530]": {
          "text": "Fluid (seminal) [UBERON:0006530]",
          "meaning": "UBERON:0006530"
        },
        "Mucus [UBERON:0000912]": {
          "text": "Mucus [UBERON:0000912]",
          "meaning": "UBERON:0000912"
        },
        "Sputum [UBERON:0007311]": {
          "text": "Sputum [UBERON:0007311]",
          "meaning": "UBERON:0007311",
          "is_a": "Mucus [UBERON:0000912]"
        },
        "Sweat [UBERON:0001089]": {
          "text": "Sweat [UBERON:0001089]",
          "meaning": "UBERON:0001089"
        },
        "Tear [UBERON:0001827]": {
          "text": "Tear [UBERON:0001827]",
          "meaning": "UBERON:0001827"
        },
        "Urine [UBERON:0001088]": {
          "text": "Urine [UBERON:0001088]",
          "meaning": "UBERON:0001088"
        }
      }
    },
    "environmental material menu": {
      "name": "environmental material menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Air vent [ENVO:03501208]": {
          "text": "Air vent [ENVO:03501208]",
          "meaning": "ENVO:03501208"
        },
        "Banknote [ENVO:00003896]": {
          "text": "Banknote [ENVO:00003896]",
          "meaning": "ENVO:00003896"
        },
        "Bed rail [ENVO:03501209]": {
          "text": "Bed rail [ENVO:03501209]",
          "meaning": "ENVO:03501209"
        },
        "Building floor [ENVO:01000486]": {
          "text": "Building floor [ENVO:01000486]",
          "meaning": "ENVO:01000486"
        },
        "Cloth [ENVO:02000058]": {
          "text": "Cloth [ENVO:02000058]",
          "meaning": "ENVO:02000058"
        },
        "Control panel [ENVO:03501210]": {
          "text": "Control panel [ENVO:03501210]",
          "meaning": "ENVO:03501210"
        },
        "Door [ENVO:03501220]": {
          "text": "Door [ENVO:03501220]",
          "meaning": "ENVO:03501220"
        },
        "Door handle [ENVO:03501211]": {
          "text": "Door handle [ENVO:03501211]",
          "meaning": "ENVO:03501211"
        },
        "Face mask [OBI:0002787]": {
          "text": "Face mask [OBI:0002787]",
          "meaning": "OBI:0002787"
        },
        "Face shield [OBI:0002791]": {
          "text": "Face shield [OBI:0002791]",
          "meaning": "OBI:0002791"
        },
        "Food [FOODON:00002403]": {
          "text": "Food [FOODON:00002403]",
          "meaning": "FOODON:00002403"
        },
        "Food packaging [FOODON:03490100]": {
          "text": "Food packaging [FOODON:03490100]",
          "meaning": "FOODON:03490100"
        },
        "Glass [ENVO:01000481]": {
          "text": "Glass [ENVO:01000481]",
          "meaning": "ENVO:01000481"
        },
        "Handrail [ENVO:03501212]": {
          "text": "Handrail [ENVO:03501212]",
          "meaning": "ENVO:03501212"
        },
        "Hospital gown [OBI:0002796]": {
          "text": "Hospital gown [OBI:0002796]",
          "meaning": "OBI:0002796"
        },
        "Light switch [ENVO:03501213]": {
          "text": "Light switch [ENVO:03501213]",
          "meaning": "ENVO:03501213"
        },
        "Locker [ENVO:03501214]": {
          "text": "Locker [ENVO:03501214]",
          "meaning": "ENVO:03501214"
        },
        "N95 mask [OBI:0002790]": {
          "text": "N95 mask [OBI:0002790]",
          "meaning": "OBI:0002790"
        },
        "Nurse call button [ENVO:03501215]": {
          "text": "Nurse call button [ENVO:03501215]",
          "meaning": "ENVO:03501215"
        },
        "Paper [ENVO:03501256]": {
          "text": "Paper [ENVO:03501256]",
          "meaning": "ENVO:03501256"
        },
        "Particulate matter [ENVO:01000060]": {
          "text": "Particulate matter [ENVO:01000060]",
          "meaning": "ENVO:01000060"
        },
        "Plastic [ENVO:01000404]": {
          "text": "Plastic [ENVO:01000404]",
          "meaning": "ENVO:01000404"
        },
        "PPE gown [GENEPIO:0100025]": {
          "text": "PPE gown [GENEPIO:0100025]",
          "meaning": "GENEPIO:0100025"
        },
        "Sewage [ENVO:00002018]": {
          "text": "Sewage [ENVO:00002018]",
          "meaning": "ENVO:00002018"
        },
        "Sink [ENVO:01000990]": {
          "text": "Sink [ENVO:01000990]",
          "meaning": "ENVO:01000990"
        },
        "Soil [ENVO:00001998]": {
          "text": "Soil [ENVO:00001998]",
          "meaning": "ENVO:00001998"
        },
        "Stainless steel [ENVO:03501216]": {
          "text": "Stainless steel [ENVO:03501216]",
          "meaning": "ENVO:03501216"
        },
        "Tissue paper [ENVO:03501217]": {
          "text": "Tissue paper [ENVO:03501217]",
          "meaning": "ENVO:03501217"
        },
        "Toilet bowl [ENVO:03501218]": {
          "text": "Toilet bowl [ENVO:03501218]",
          "meaning": "ENVO:03501218"
        },
        "Water [ENVO:00002006]": {
          "text": "Water [ENVO:00002006]",
          "meaning": "ENVO:00002006"
        },
        "Wastewater [ENVO:00002001]": {
          "text": "Wastewater [ENVO:00002001]",
          "meaning": "ENVO:00002001",
          "is_a": "Water [ENVO:00002006]"
        },
        "Window [ENVO:03501219]": {
          "text": "Window [ENVO:03501219]",
          "meaning": "ENVO:03501219"
        },
        "Wood [ENVO:00002040]": {
          "text": "Wood [ENVO:00002040]",
          "meaning": "ENVO:00002040"
        }
      }
    },
    "environmental site menu": {
      "name": "environmental site menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Acute care facility [ENVO:03501135]": {
          "text": "Acute care facility [ENVO:03501135]",
          "meaning": "ENVO:03501135"
        },
        "Animal house [ENVO:00003040]": {
          "text": "Animal house [ENVO:00003040]",
          "meaning": "ENVO:00003040"
        },
        "Bathroom [ENVO:01000422]": {
          "text": "Bathroom [ENVO:01000422]",
          "meaning": "ENVO:01000422"
        },
        "Clinical assessment centre [ENVO:03501136]": {
          "text": "Clinical assessment centre [ENVO:03501136]",
          "meaning": "ENVO:03501136"
        },
        "Conference venue [ENVO:03501127]": {
          "text": "Conference venue [ENVO:03501127]",
          "meaning": "ENVO:03501127"
        },
        "Corridor [ENVO:03501121]": {
          "text": "Corridor [ENVO:03501121]",
          "meaning": "ENVO:03501121"
        },
        "Daycare [ENVO:01000927]": {
          "text": "Daycare [ENVO:01000927]",
          "meaning": "ENVO:01000927"
        },
        "Emergency room (ER) [ENVO:03501145]": {
          "text": "Emergency room (ER) [ENVO:03501145]",
          "meaning": "ENVO:03501145"
        },
        "Family practice clinic [ENVO:03501186]": {
          "text": "Family practice clinic [ENVO:03501186]",
          "meaning": "ENVO:03501186"
        },
        "Group home [ENVO:03501196]": {
          "text": "Group home [ENVO:03501196]",
          "meaning": "ENVO:03501196"
        },
        "Homeless shelter [ENVO:03501133]": {
          "text": "Homeless shelter [ENVO:03501133]",
          "meaning": "ENVO:03501133"
        },
        "Hospital [ENVO:00002173]": {
          "text": "Hospital [ENVO:00002173]",
          "meaning": "ENVO:00002173"
        },
        "Intensive Care Unit (ICU) [ENVO:03501152]": {
          "text": "Intensive Care Unit (ICU) [ENVO:03501152]",
          "meaning": "ENVO:03501152"
        },
        "Long Term Care Facility [ENVO:03501194]": {
          "text": "Long Term Care Facility [ENVO:03501194]",
          "meaning": "ENVO:03501194"
        },
        "Patient room [ENVO:03501180]": {
          "text": "Patient room [ENVO:03501180]",
          "meaning": "ENVO:03501180"
        },
        "Prison [ENVO:03501204]": {
          "text": "Prison [ENVO:03501204]",
          "meaning": "ENVO:03501204"
        },
        "Production Facility [ENVO:01000536]": {
          "text": "Production Facility [ENVO:01000536]",
          "meaning": "ENVO:01000536"
        },
        "School [ENVO:03501130]": {
          "text": "School [ENVO:03501130]",
          "meaning": "ENVO:03501130"
        },
        "Sewage Plant [ENVO:00003043]": {
          "text": "Sewage Plant [ENVO:00003043]",
          "meaning": "ENVO:00003043"
        },
        "Subway train [ENVO:03501109]": {
          "text": "Subway train [ENVO:03501109]",
          "meaning": "ENVO:03501109"
        },
        "University campus [ENVO:00000467]": {
          "text": "University campus [ENVO:00000467]",
          "meaning": "ENVO:00000467"
        },
        "Wet market [ENVO:03501198]": {
          "text": "Wet market [ENVO:03501198]",
          "meaning": "ENVO:03501198"
        }
      }
    },
    "collection method menu": {
      "name": "collection method menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Amniocentesis [NCIT:C52009]": {
          "text": "Amniocentesis [NCIT:C52009]",
          "meaning": "NCIT:C52009"
        },
        "Aspiration [NCIT:C15631]": {
          "text": "Aspiration [NCIT:C15631]",
          "meaning": "NCIT:C15631"
        },
        "Suprapubic Aspiration [GENEPIO:0100028]": {
          "text": "Suprapubic Aspiration [GENEPIO:0100028]",
          "meaning": "GENEPIO:0100028",
          "is_a": "Aspiration [NCIT:C15631]"
        },
        "Tracheal Aspiration [GENEPIO:0100029]": {
          "text": "Tracheal Aspiration [GENEPIO:0100029]",
          "meaning": "GENEPIO:0100029",
          "is_a": "Aspiration [NCIT:C15631]"
        },
        "Vacuum Aspiration [GENEPIO:0100030]": {
          "text": "Vacuum Aspiration [GENEPIO:0100030]",
          "meaning": "GENEPIO:0100030",
          "is_a": "Aspiration [NCIT:C15631]"
        },
        "Biopsy [OBI:0002650]": {
          "text": "Biopsy [OBI:0002650]",
          "meaning": "OBI:0002650"
        },
        "Needle Biopsy [OBI:0002651]": {
          "text": "Needle Biopsy [OBI:0002651]",
          "meaning": "OBI:0002651",
          "is_a": "Biopsy [OBI:0002650]"
        },
        "Filtration [OBI:0302885]": {
          "text": "Filtration [OBI:0302885]",
          "meaning": "OBI:0302885"
        },
        "Air filtration [GENEPIO:0100031]": {
          "text": "Air filtration [GENEPIO:0100031]",
          "meaning": "GENEPIO:0100031",
          "is_a": "Filtration [OBI:0302885]"
        },
        "Lavage (medical wash) [OBI:0600044]": {
          "text": "Lavage (medical wash) [OBI:0600044]",
          "meaning": "OBI:0600044"
        },
        "Bronchoalveolar lavage (BAL) [GENEPIO:0100032]": {
          "text": "Bronchoalveolar lavage (BAL) [GENEPIO:0100032]",
          "meaning": "GENEPIO:0100032",
          "is_a": "Lavage (medical wash) [OBI:0600044]"
        },
        "Gastric Lavage [GENEPIO:0100033]": {
          "text": "Gastric Lavage [GENEPIO:0100033]",
          "meaning": "GENEPIO:0100033",
          "is_a": "Lavage (medical wash) [OBI:0600044]"
        },
        "Lumbar Puncture [NCIT:C15327]": {
          "text": "Lumbar Puncture [NCIT:C15327]",
          "meaning": "NCIT:C15327"
        },
        "Necropsy [MMO:0000344]": {
          "text": "Necropsy [MMO:0000344]",
          "meaning": "MMO:0000344"
        },
        "Phlebotomy [NCIT:C28221]": {
          "text": "Phlebotomy [NCIT:C28221]",
          "meaning": "NCIT:C28221"
        },
        "Rinsing (wash) [GENEPIO:0002116]": {
          "text": "Rinsing (wash) [GENEPIO:0002116]",
          "meaning": "GENEPIO:0002116"
        },
        "Saline gargle (mouth rinse and gargle) [GENEPIO:0100034]": {
          "text": "Saline gargle (mouth rinse and gargle) [GENEPIO:0100034]",
          "meaning": "GENEPIO:0100034",
          "is_a": "Rinsing (wash) [GENEPIO:0002116]"
        },
        "Scraping [GENEPIO:0100035]": {
          "text": "Scraping [GENEPIO:0100035]",
          "meaning": "GENEPIO:0100035"
        },
        "Swabbing [GENEPIO:0002117]": {
          "text": "Swabbing [GENEPIO:0002117]",
          "meaning": "GENEPIO:0002117"
        },
        "Finger Prick [GENEPIO:0100036]": {
          "text": "Finger Prick [GENEPIO:0100036]",
          "meaning": "GENEPIO:0100036"
        },
        "Washout Tear Collection [GENEPIO:0100038]": {
          "text": "Washout Tear Collection [GENEPIO:0100038]",
          "meaning": "GENEPIO:0100038"
        }
      }
    },
    "collection device menu": {
      "name": "collection device menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Air filter [ENVO:00003968]": {
          "text": "Air filter [ENVO:00003968]",
          "meaning": "ENVO:00003968"
        },
        "Blood Collection Tube [OBI:0002859]": {
          "text": "Blood Collection Tube [OBI:0002859]",
          "meaning": "OBI:0002859"
        },
        "Bronchoscope [OBI:0002826]": {
          "text": "Bronchoscope [OBI:0002826]",
          "meaning": "OBI:0002826"
        },
        "Collection Container [OBI:0002088]": {
          "text": "Collection Container [OBI:0002088]",
          "meaning": "OBI:0002088"
        },
        "Collection Cup [GENEPIO:0100026]": {
          "text": "Collection Cup [GENEPIO:0100026]",
          "meaning": "GENEPIO:0100026"
        },
        "Fibrobronchoscope Brush [OBI:0002825]": {
          "text": "Fibrobronchoscope Brush [OBI:0002825]",
          "meaning": "OBI:0002825"
        },
        "Filter [GENEPIO:0100103]": {
          "text": "Filter [GENEPIO:0100103]",
          "meaning": "GENEPIO:0100103"
        },
        "Fine Needle [OBI:0002827]": {
          "text": "Fine Needle [OBI:0002827]",
          "meaning": "OBI:0002827"
        },
        "Microcapillary tube [OBI:0002858]": {
          "text": "Microcapillary tube [OBI:0002858]",
          "meaning": "OBI:0002858"
        },
        "Micropipette [OBI:0001128]": {
          "text": "Micropipette [OBI:0001128]",
          "meaning": "OBI:0001128"
        },
        "Needle [OBI:0000436]": {
          "text": "Needle [OBI:0000436]",
          "meaning": "OBI:0000436"
        },
        "Serum Collection Tube [OBI:0002860]": {
          "text": "Serum Collection Tube [OBI:0002860]",
          "meaning": "OBI:0002860"
        },
        "Sputum Collection Tube [OBI:0002861]": {
          "text": "Sputum Collection Tube [OBI:0002861]",
          "meaning": "OBI:0002861"
        },
        "Suction Catheter [OBI:0002831]": {
          "text": "Suction Catheter [OBI:0002831]",
          "meaning": "OBI:0002831"
        },
        "Swab [GENEPIO:0100027]": {
          "text": "Swab [GENEPIO:0100027]",
          "meaning": "GENEPIO:0100027"
        },
        "Urine Collection Tube [OBI:0002862]": {
          "text": "Urine Collection Tube [OBI:0002862]",
          "meaning": "OBI:0002862"
        },
        "Virus Transport Medium [OBI:0002866]": {
          "text": "Virus Transport Medium [OBI:0002866]",
          "meaning": "OBI:0002866"
        }
      }
    },
    "host (scientific name) menu": {
      "name": "host (scientific name) menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Homo sapiens [NCBITaxon:9606]": {
          "text": "Homo sapiens [NCBITaxon:9606]",
          "meaning": "NCBITaxon:9913"
        },
        "Bos taurus [NCBITaxon:9913]": {
          "text": "Bos taurus [NCBITaxon:9913]",
          "meaning": "NCBITaxon:9615"
        },
        "Canis lupus familiaris [NCBITaxon:9615]": {
          "text": "Canis lupus familiaris [NCBITaxon:9615]",
          "meaning": "NCBITaxon:9397"
        },
        "Chiroptera [NCBITaxon:9397]": {
          "text": "Chiroptera [NCBITaxon:9397]",
          "meaning": "NCBITaxon:8930"
        },
        "Columbidae [NCBITaxon:8930]": {
          "text": "Columbidae [NCBITaxon:8930]",
          "meaning": "NCBITaxon:9685"
        },
        "Felis catus [NCBITaxon:9685]": {
          "text": "Felis catus [NCBITaxon:9685]",
          "meaning": "NCBITaxon:9031"
        },
        "Gallus gallus [NCBITaxon:9031]": {
          "text": "Gallus gallus [NCBITaxon:9031]",
          "meaning": "NCBITaxon:9606"
        },
        "Manis [NCBITaxon:9973]": {
          "text": "Manis [NCBITaxon:9973]",
          "meaning": "NCBITaxon:9973"
        },
        "Manis javanica [NCBITaxon:9974]": {
          "text": "Manis javanica [NCBITaxon:9974]",
          "meaning": "NCBITaxon:9974"
        },
        "Neovison vison [NCBITaxon:452646]": {
          "text": "Neovison vison [NCBITaxon:452646]",
          "meaning": "NCBITaxon:452646"
        },
        "Panthera leo [NCBITaxon:9689]": {
          "text": "Panthera leo [NCBITaxon:9689]",
          "meaning": "NCBITaxon:9689"
        },
        "Panthera tigris [NCBITaxon:9694]": {
          "text": "Panthera tigris [NCBITaxon:9694]",
          "meaning": "NCBITaxon:9694"
        },
        "Rhinolophidae [NCBITaxon:58055]": {
          "text": "Rhinolophidae [NCBITaxon:58055]",
          "meaning": "NCBITaxon:58055"
        },
        "Rhinolophus affinis [NCBITaxon:59477]": {
          "text": "Rhinolophus affinis [NCBITaxon:59477]",
          "meaning": "NCBITaxon:59477"
        },
        "Sus scrofa domesticus [NCBITaxon:9825]": {
          "text": "Sus scrofa domesticus [NCBITaxon:9825]",
          "meaning": "NCBITaxon:9825"
        },
        "Viverridae [NCBITaxon:9673]": {
          "text": "Viverridae [NCBITaxon:9673]",
          "meaning": "NCBITaxon:9673"
        }
      }
    },
    "host (common name) menu": {
      "name": "host (common name) menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Human [NCBITaxon:9606]": {
          "text": "Human [NCBITaxon:9606]",
          "meaning": "NCBITaxon:9605"
        },
        "Bat [NCBITaxon:9397]": {
          "text": "Bat [NCBITaxon:9397]",
          "meaning": "NCBITaxon:9397"
        },
        "Cat [NCBITaxon:9685]": {
          "text": "Cat [NCBITaxon:9685]",
          "meaning": "NCBITaxon:9685"
        },
        "Chicken [NCBITaxon:9031]": {
          "text": "Chicken [NCBITaxon:9031]",
          "meaning": "NCBITaxon:9031"
        },
        "Civets [NCBITaxon:9673]": {
          "text": "Civets [NCBITaxon:9673]",
          "meaning": "NCBITaxon:9673"
        },
        "Cow [NCBITaxon:9913]": {
          "text": "Cow [NCBITaxon:9913]",
          "meaning": "NCBITaxon:9913"
        },
        "Dog [NCBITaxon:9615]": {
          "text": "Dog [NCBITaxon:9615]",
          "meaning": "NCBITaxon:9615"
        },
        "Lion [NCBITaxon:9689]": {
          "text": "Lion [NCBITaxon:9689]",
          "meaning": "NCBITaxon:9689"
        },
        "Mink [NCBITaxon:452646]": {
          "text": "Mink [NCBITaxon:452646]",
          "meaning": "NCBITaxon:452646"
        },
        "Pangolin [NCBITaxon:9973]": {
          "text": "Pangolin [NCBITaxon:9973]",
          "meaning": "NCBITaxon:9973"
        },
        "Pig [NCBITaxon:9825]": {
          "text": "Pig [NCBITaxon:9825]",
          "meaning": "NCBITaxon:9825"
        },
        "Pigeon [NCBITaxon:8930]": {
          "text": "Pigeon [NCBITaxon:8930]",
          "meaning": "NCBITaxon:8930"
        },
        "Tiger [NCBITaxon:9694]": {
          "text": "Tiger [NCBITaxon:9694]",
          "meaning": "NCBITaxon:9694"
        }
      }
    },
    "host health state menu": {
      "name": "host health state menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Asymptomatic [NCIT:C3833]": {
          "text": "Asymptomatic [NCIT:C3833]",
          "meaning": "NCIT:C3833"
        },
        "Deceased [NCIT:C28554]": {
          "text": "Deceased [NCIT:C28554]",
          "meaning": "NCIT:C28554"
        },
        "Healthy [NCIT:C115935]": {
          "text": "Healthy [NCIT:C115935]",
          "meaning": "NCIT:C115935"
        },
        "Recovered [NCIT:C49498]": {
          "text": "Recovered [NCIT:C49498]",
          "meaning": "NCIT:C49498"
        },
        "Symptomatic [NCIT:C25269]": {
          "text": "Symptomatic [NCIT:C25269]",
          "meaning": "NCIT:C25269"
        }
      }
    },
    "host health status details menu": {
      "name": "host health status details menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Hospitalized [NCIT:C25179]": {
          "text": "Hospitalized [NCIT:C25179]",
          "meaning": "NCIT:C25179"
        },
        "Hospitalized (Non-ICU) [GENEPIO:0100045]": {
          "text": "Hospitalized (Non-ICU) [GENEPIO:0100045]",
          "meaning": "GENEPIO:0100045",
          "is_a": "Hospitalized [NCIT:C25179]"
        },
        "Hospitalized (ICU) [GENEPIO:0100046]": {
          "text": "Hospitalized (ICU) [GENEPIO:0100046]",
          "meaning": "GENEPIO:0100046",
          "is_a": "Hospitalized [NCIT:C25179]"
        },
        "Mechanical Ventilation [NCIT:C70909]": {
          "text": "Mechanical Ventilation [NCIT:C70909]",
          "meaning": "NCIT:C70909"
        },
        "Medically Isolated [GENEPIO:0100047]": {
          "text": "Medically Isolated [GENEPIO:0100047]",
          "meaning": "GENEPIO:0100047"
        },
        "Medically Isolated (Negative Pressure) [GENEPIO:0100048]": {
          "text": "Medically Isolated (Negative Pressure) [GENEPIO:0100048]",
          "meaning": "GENEPIO:0100048",
          "is_a": "Medically Isolated [GENEPIO:0100047]"
        },
        "Self-quarantining [NCIT:C173768]": {
          "text": "Self-quarantining [NCIT:C173768]",
          "meaning": "NCIT:C173768"
        }
      }
    },
    "host health outcome menu": {
      "name": "host health outcome menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Deceased [NCIT:C28554]": {
          "text": "Deceased [NCIT:C28554]",
          "meaning": "NCIT:C28554"
        },
        "Deteriorating [NCIT:C25254]": {
          "text": "Deteriorating [NCIT:C25254]",
          "meaning": "NCIT:C25254"
        },
        "Recovered [NCIT:C49498]": {
          "text": "Recovered [NCIT:C49498]",
          "meaning": "NCIT:C49498"
        },
        "Stable [NCIT:C30103]": {
          "text": "Stable [NCIT:C30103]",
          "meaning": "NCIT:C30103"
        }
      }
    },
    "organism menu": {
      "name": "organism menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Severe acute respiratory syndrome coronavirus 2 [NCBITaxon:2697049]": {
          "text": "Severe acute respiratory syndrome coronavirus 2 [NCBITaxon:2697049]",
          "meaning": "NCBITaxon:2697049"
        },
        "RaTG13 [NCBITaxon:2709072]": {
          "text": "RaTG13 [NCBITaxon:2709072]",
          "meaning": "NCBITaxon:2709072"
        },
        "RmYN02 [GENEPIO:0100000]": {
          "text": "RmYN02 [GENEPIO:0100000]",
          "meaning": "GENEPIO:0100000"
        }
      }
    },
    "purpose of sampling menu": {
      "name": "purpose of sampling menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Cluster/Outbreak investigation [GENEPIO:0100001]": {
          "text": "Cluster/Outbreak investigation [GENEPIO:0100001]",
          "meaning": "GENEPIO:0100001"
        },
        "Diagnostic testing [GENEPIO:0100002]": {
          "text": "Diagnostic testing [GENEPIO:0100002]",
          "meaning": "GENEPIO:0100002"
        },
        "Research [GENEPIO:0100003]": {
          "text": "Research [GENEPIO:0100003]",
          "meaning": "GENEPIO:0100003"
        },
        "Protocol testing [GENEPIO:0100024]": {
          "text": "Protocol testing [GENEPIO:0100024]",
          "meaning": "GENEPIO:0100024",
          "is_a": "Research [GENEPIO:0100003]"
        },
        "Surveillance [GENEPIO:0100004]": {
          "text": "Surveillance [GENEPIO:0100004]",
          "meaning": "GENEPIO:0100004"
        }
      }
    },
    "purpose of sequencing menu": {
      "name": "purpose of sequencing menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Baseline surveillance (random sampling) [GENEPIO:0100005]": {
          "text": "Baseline surveillance (random sampling) [GENEPIO:0100005]",
          "meaning": "GENEPIO:0100005"
        },
        "Targeted surveillance (non-random sampling) [GENEPIO:0100006]": {
          "text": "Targeted surveillance (non-random sampling) [GENEPIO:0100006]",
          "meaning": "GENEPIO:0100006"
        },
        "Priority surveillance project [GENEPIO:0100007]": {
          "text": "Priority surveillance project [GENEPIO:0100007]",
          "meaning": "GENEPIO:0100007",
          "is_a": "Targeted surveillance (non-random sampling) [GENEPIO:0100006]"
        },
        "Screening for Variants of Concern (VoC) [GENEPIO:0100008]": {
          "text": "Screening for Variants of Concern (VoC) [GENEPIO:0100008]",
          "meaning": "GENEPIO:0100008",
          "is_a": "Priority surveillance project [GENEPIO:0100007]"
        },
        "Sample has epidemiological link to Variant of Concern (VoC) [GENEPIO:0100273]": {
          "text": "Sample has epidemiological link to Variant of Concern (VoC) [GENEPIO:0100273]",
          "meaning": "GENEPIO:0100273",
          "is_a": "Screening for Variants of Concern (VoC) [GENEPIO:0100008]"
        },
        "Sample has epidemiological link to Omicron Variant [GENEPIO:0100274]": {
          "text": "Sample has epidemiological link to Omicron Variant [GENEPIO:0100274]",
          "meaning": "GENEPIO:0100274",
          "is_a": "Sample has epidemiological link to Variant of Concern (VoC) [GENEPIO:0100273]"
        },
        "Longitudinal surveillance (repeat sampling of individuals) [GENEPIO:0100009]": {
          "text": "Longitudinal surveillance (repeat sampling of individuals) [GENEPIO:0100009]",
          "meaning": "GENEPIO:0100009",
          "is_a": "Priority surveillance project [GENEPIO:0100007]"
        },
        "Re-infection surveillance [GENEPIO:0100010]": {
          "text": "Re-infection surveillance [GENEPIO:0100010]",
          "meaning": "GENEPIO:0100010",
          "is_a": "Priority surveillance project [GENEPIO:0100007]"
        },
        "Vaccine escape surveillance [GENEPIO:0100011]": {
          "text": "Vaccine escape surveillance [GENEPIO:0100011]",
          "meaning": "GENEPIO:0100011",
          "is_a": "Priority surveillance project [GENEPIO:0100007]"
        },
        "Travel-associated surveillance [GENEPIO:0100012]": {
          "text": "Travel-associated surveillance [GENEPIO:0100012]",
          "meaning": "GENEPIO:0100012",
          "is_a": "Priority surveillance project [GENEPIO:0100007]"
        },
        "Domestic travel surveillance [GENEPIO:0100013]": {
          "text": "Domestic travel surveillance [GENEPIO:0100013]",
          "meaning": "GENEPIO:0100013",
          "is_a": "Travel-associated surveillance [GENEPIO:0100012]"
        },
        "Interstate/ interprovincial travel surveillance [GENEPIO:0100275]": {
          "text": "Interstate/ interprovincial travel surveillance [GENEPIO:0100275]",
          "meaning": "GENEPIO:0100275",
          "is_a": "Domestic travel surveillance [GENEPIO:0100013]"
        },
        "Intra-state/ intra-provincial travel surveillance [GENEPIO:0100276]": {
          "text": "Intra-state/ intra-provincial travel surveillance [GENEPIO:0100276]",
          "meaning": "GENEPIO:0100276",
          "is_a": "Domestic travel surveillance [GENEPIO:0100013]"
        },
        "International travel surveillance [GENEPIO:0100014]": {
          "text": "International travel surveillance [GENEPIO:0100014]",
          "meaning": "GENEPIO:0100014",
          "is_a": "Travel-associated surveillance [GENEPIO:0100012]"
        },
        "Surveillance of international border crossing by air travel or ground transport [GENEPIO:0100015]": {
          "text": "Surveillance of international border crossing by air travel or ground transport [GENEPIO:0100015]",
          "meaning": "GENEPIO:0100015",
          "is_a": "International travel surveillance [GENEPIO:0100014]"
        },
        "Surveillance of international border crossing by air travel [GENEPIO:0100016]": {
          "text": "Surveillance of international border crossing by air travel [GENEPIO:0100016]",
          "meaning": "GENEPIO:0100016",
          "is_a": "International travel surveillance [GENEPIO:0100014]"
        },
        "Surveillance of international border crossing by ground transport [GENEPIO:0100017]": {
          "text": "Surveillance of international border crossing by ground transport [GENEPIO:0100017]",
          "meaning": "GENEPIO:0100017",
          "is_a": "International travel surveillance [GENEPIO:0100014]"
        },
        "Surveillance from international worker testing [GENEPIO:0100018]": {
          "text": "Surveillance from international worker testing [GENEPIO:0100018]",
          "meaning": "GENEPIO:0100018",
          "is_a": "International travel surveillance [GENEPIO:0100014]"
        },
        "Cluster/Outbreak investigation [GENEPIO:0100019]": {
          "text": "Cluster/Outbreak investigation [GENEPIO:0100019]",
          "meaning": "GENEPIO:0100019"
        },
        "Multi-jurisdictional outbreak investigation [GENEPIO:0100020]": {
          "text": "Multi-jurisdictional outbreak investigation [GENEPIO:0100020]",
          "meaning": "GENEPIO:0100020",
          "is_a": "Cluster/Outbreak investigation [GENEPIO:0100019]"
        },
        "Intra-jurisdictional outbreak investigation [GENEPIO:0100021]": {
          "text": "Intra-jurisdictional outbreak investigation [GENEPIO:0100021]",
          "meaning": "GENEPIO:0100021",
          "is_a": "Cluster/Outbreak investigation [GENEPIO:0100019]"
        },
        "Research [GENEPIO:0100022]": {
          "text": "Research [GENEPIO:0100022]",
          "meaning": "GENEPIO:0100022"
        },
        "Viral passage experiment [GENEPIO:0100023]": {
          "text": "Viral passage experiment [GENEPIO:0100023]",
          "meaning": "GENEPIO:0100023",
          "is_a": "Research [GENEPIO:0100022]"
        },
        "Protocol testing experiment [GENEPIO:0100024]": {
          "text": "Protocol testing experiment [GENEPIO:0100024]",
          "meaning": "GENEPIO:0100024",
          "is_a": "Research [GENEPIO:0100022]"
        },
        "Retrospective sequencing [GENEPIO:0100356]": {
          "text": "Retrospective sequencing [GENEPIO:0100356]",
          "meaning": "GENEPIO:0100356"
        }
      }
    },
    "specimen processing menu": {
      "name": "specimen processing menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Virus passage [GENEPIO:0100039]": {
          "text": "Virus passage [GENEPIO:0100039]",
          "meaning": "GENEPIO:0100039"
        },
        "RNA re-extraction (post RT-PCR) [GENEPIO:0100040]": {
          "text": "RNA re-extraction (post RT-PCR) [GENEPIO:0100040]",
          "meaning": "GENEPIO:0100040"
        },
        "Specimens pooled [OBI:0600016]": {
          "text": "Specimens pooled [OBI:0600016]",
          "meaning": "OBI:0600016"
        },
        "Technical replicate [EFO:0002090]": {
          "text": "Technical replicate [EFO:0002090]",
          "meaning": "EFO:0002090"
        }
      }
    },
    "lab host menu": {
      "name": "lab host menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "293/ACE2 cell line [GENEPIO:0100041]": {
          "text": "293/ACE2 cell line [GENEPIO:0100041]",
          "meaning": "GENEPIO:0100041"
        },
        "Caco2 cell line [BTO:0000195]": {
          "text": "Caco2 cell line [BTO:0000195]",
          "meaning": "BTO:0000195"
        },
        "Calu3 cell line [BTO:0002750]": {
          "text": "Calu3 cell line [BTO:0002750]",
          "meaning": "BTO:0002750"
        },
        "EFK3B cell line [GENEPIO:0100042]": {
          "text": "EFK3B cell line [GENEPIO:0100042]",
          "meaning": "GENEPIO:0100042"
        },
        "HEK293T cell line [BTO:0002181]": {
          "text": "HEK293T cell line [BTO:0002181]",
          "meaning": "BTO:0002181"
        },
        "HRCE cell line [GENEPIO:0100043]": {
          "text": "HRCE cell line [GENEPIO:0100043]",
          "meaning": "GENEPIO:0100043"
        },
        "Huh7 cell line [BTO:0001950]": {
          "text": "Huh7 cell line [BTO:0001950]",
          "meaning": "BTO:0001950"
        },
        "LLCMk2 cell line [CLO:0007330]": {
          "text": "LLCMk2 cell line [CLO:0007330]",
          "meaning": "CLO:0007330"
        },
        "MDBK cell line [BTO:0000836]": {
          "text": "MDBK cell line [BTO:0000836]",
          "meaning": "BTO:0000836"
        },
        "NHBE cell line [BTO:0002924]": {
          "text": "NHBE cell line [BTO:0002924]",
          "meaning": "BTO:0002924"
        },
        "PK-15 cell line [BTO:0001865]": {
          "text": "PK-15 cell line [BTO:0001865]",
          "meaning": "BTO:0001865"
        },
        "RK-13 cell line [BTO:0002909]": {
          "text": "RK-13 cell line [BTO:0002909]",
          "meaning": "BTO:0002909"
        },
        "U251 cell line [BTO:0002035]": {
          "text": "U251 cell line [BTO:0002035]",
          "meaning": "BTO:0002035"
        },
        "Vero cell line [BTO:0001444]": {
          "text": "Vero cell line [BTO:0001444]",
          "meaning": "BTO:0001444"
        },
        "Vero E6 cell line [BTO:0004755]": {
          "text": "Vero E6 cell line [BTO:0004755]",
          "meaning": "BTO:0004755",
          "is_a": "Vero cell line [BTO:0001444]"
        },
        "VeroE6/TMPRSS2 cell line [GENEPIO:0100044]": {
          "text": "VeroE6/TMPRSS2 cell line [GENEPIO:0100044]",
          "meaning": "GENEPIO:0100044",
          "is_a": "Vero E6 cell line [BTO:0004755]"
        }
      }
    },
    "host disease menu": {
      "name": "host disease menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "COVID-19 [MONDO:0100096]": {
          "text": "COVID-19 [MONDO:0100096]",
          "meaning": "MONDO:0100096"
        }
      }
    },
    "host age bin menu": {
      "name": "host age bin menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "0 - 9 [GENEPIO:0100049]": {
          "text": "0 - 9 [GENEPIO:0100049]",
          "meaning": "GENEPIO:0100049"
        },
        "10 - 19 [GENEPIO:0100050]": {
          "text": "10 - 19 [GENEPIO:0100050]",
          "meaning": "GENEPIO:0100050"
        },
        "20 - 29 [GENEPIO:0100051]": {
          "text": "20 - 29 [GENEPIO:0100051]",
          "meaning": "GENEPIO:0100051"
        },
        "30 - 39 [GENEPIO:0100052]": {
          "text": "30 - 39 [GENEPIO:0100052]",
          "meaning": "GENEPIO:0100052"
        },
        "40 - 49 [GENEPIO:0100053]": {
          "text": "40 - 49 [GENEPIO:0100053]",
          "meaning": "GENEPIO:0100053"
        },
        "50 - 59 [GENEPIO:0100054]": {
          "text": "50 - 59 [GENEPIO:0100054]",
          "meaning": "GENEPIO:0100054"
        },
        "60 - 69 [GENEPIO:0100055]": {
          "text": "60 - 69 [GENEPIO:0100055]",
          "meaning": "GENEPIO:0100055"
        },
        "70 - 79 [GENEPIO:0100056]": {
          "text": "70 - 79 [GENEPIO:0100056]",
          "meaning": "GENEPIO:0100056"
        },
        "80 - 89 [GENEPIO:0100057]": {
          "text": "80 - 89 [GENEPIO:0100057]",
          "meaning": "GENEPIO:0100057"
        },
        "90 - 99 [GENEPIO:0100058]": {
          "text": "90 - 99 [GENEPIO:0100058]",
          "meaning": "GENEPIO:0100058"
        },
        "100+ [GENEPIO:0100059]": {
          "text": "100+ [GENEPIO:0100059]",
          "meaning": "GENEPIO:0100059"
        }
      }
    },
    "host gender menu": {
      "name": "host gender menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Female [NCIT:C46110]": {
          "text": "Female [NCIT:C46110]",
          "meaning": "NCIT:C46110"
        },
        "Male [NCIT:C46109]": {
          "text": "Male [NCIT:C46109]",
          "meaning": "NCIT:C46109"
        },
        "Non-binary gender [GSSO:000132]": {
          "text": "Non-binary gender [GSSO:000132]",
          "meaning": "GSSO:000132"
        },
        "Transgender (Male to Female) [GSSO:004004]": {
          "text": "Transgender (Male to Female) [GSSO:004004]",
          "meaning": "GSSO:004004"
        },
        "Transgender (Female to Male) [GSSO:004005]": {
          "text": "Transgender (Female to Male) [GSSO:004005]",
          "meaning": "GSSO:004005"
        },
        "Undeclared [NCIT:C110959]": {
          "text": "Undeclared [NCIT:C110959]",
          "meaning": "NCIT:C110959"
        }
      }
    },
    "exposure event menu": {
      "name": "exposure event menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Mass Gathering [GENEPIO:0100237]": {
          "text": "Mass Gathering [GENEPIO:0100237]",
          "meaning": "GENEPIO:0100237"
        },
        "Convention [GENEPIO:0100238]": {
          "text": "Convention [GENEPIO:0100238]",
          "meaning": "GENEPIO:0100238",
          "is_a": "Mass Gathering [GENEPIO:0100237]"
        },
        "Convocation [GENEPIO:0100239]": {
          "text": "Convocation [GENEPIO:0100239]",
          "meaning": "GENEPIO:0100239",
          "is_a": "Mass Gathering [GENEPIO:0100237]"
        },
        "Agricultural Event [GENEPIO:0100240]": {
          "text": "Agricultural Event [GENEPIO:0100240]",
          "meaning": "GENEPIO:0100240",
          "is_a": "Mass Gathering [GENEPIO:0100237]"
        },
        "Religious Gathering [GENEPIO:0100241]": {
          "text": "Religious Gathering [GENEPIO:0100241]",
          "meaning": "GENEPIO:0100241"
        },
        "Mass [GENEPIO:0100242]": {
          "text": "Mass [GENEPIO:0100242]",
          "meaning": "GENEPIO:0100242",
          "is_a": "Religious Gathering [GENEPIO:0100241]"
        },
        "Social Gathering [PCO:0000033]": {
          "text": "Social Gathering [PCO:0000033]",
          "meaning": "PCO:0000033"
        },
        "Baby Shower [PCO:0000039]": {
          "text": "Baby Shower [PCO:0000039]",
          "meaning": "PCO:0000039",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Community Event [PCO:0000034]": {
          "text": "Community Event [PCO:0000034]",
          "meaning": "PCO:0000034",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Family Gathering [GENEPIO:0100243]": {
          "text": "Family Gathering [GENEPIO:0100243]",
          "meaning": "GENEPIO:0100243",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Family Reunion [GENEPIO:0100244]": {
          "text": "Family Reunion [GENEPIO:0100244]",
          "meaning": "GENEPIO:0100244",
          "is_a": "Family Gathering [GENEPIO:0100243]"
        },
        "Funeral [GENEPIO:0100245]": {
          "text": "Funeral [GENEPIO:0100245]",
          "meaning": "GENEPIO:0100245",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Party [PCO:0000035]": {
          "text": "Party [PCO:0000035]",
          "meaning": "PCO:0000035",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Potluck [PCO:0000037]": {
          "text": "Potluck [PCO:0000037]",
          "meaning": "PCO:0000037",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Wedding [PCO:0000038]": {
          "text": "Wedding [PCO:0000038]",
          "meaning": "PCO:0000038",
          "is_a": "Social Gathering [PCO:0000033]"
        },
        "Other exposure event": {
          "text": "Other exposure event"
        }
      }
    },
    "exposure contact level menu": {
      "name": "exposure contact level menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Contact with infected individual": {
          "text": "Contact with infected individual",
          "meaning": "GENEPIO:0100357"
        },
        "Direct (human-to-human contact) [TRANS:0000001]": {
          "text": "Direct (human-to-human contact) [TRANS:0000001]",
          "meaning": "TRANS:0000001",
          "is_a": "Contact with infected individual"
        },
        "Indirect contact [GENEPIO:0100246]": {
          "text": "Indirect contact [GENEPIO:0100246]",
          "meaning": "GENEPIO:0100246",
          "is_a": "Contact with infected individual"
        },
        "Close contact (face-to-face contact) [GENEPIO:0100247]": {
          "text": "Close contact (face-to-face contact) [GENEPIO:0100247]",
          "meaning": "GENEPIO:0100247",
          "is_a": "Indirect contact [GENEPIO:0100246]"
        },
        "Casual contact [GENEPIO:0100248]": {
          "text": "Casual contact [GENEPIO:0100248]",
          "meaning": "GENEPIO:0100248",
          "is_a": "Indirect contact [GENEPIO:0100246]"
        }
      }
    },
    "host role menu": {
      "name": "host role menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Attendee [GENEPIO:0100249]": {
          "text": "Attendee [GENEPIO:0100249]",
          "meaning": "GENEPIO:0100249"
        },
        "Student [OMRSE:00000058]": {
          "text": "Student [OMRSE:00000058]",
          "meaning": "OMRSE:00000058",
          "is_a": "Attendee [GENEPIO:0100249]"
        },
        "Patient [OMRSE:00000030]": {
          "text": "Patient [OMRSE:00000030]",
          "meaning": "OMRSE:00000030"
        },
        "Inpatient [NCIT:C25182]": {
          "text": "Inpatient [NCIT:C25182]",
          "meaning": "NCIT:C25182",
          "is_a": "Patient [OMRSE:00000030]"
        },
        "Outpatient [NCIT:C28293]": {
          "text": "Outpatient [NCIT:C28293]",
          "meaning": "NCIT:C28293",
          "is_a": "Patient [OMRSE:00000030]"
        },
        "Passenger [GENEPIO:0100250]": {
          "text": "Passenger [GENEPIO:0100250]",
          "meaning": "GENEPIO:0100250"
        },
        "Resident [GENEPIO:0100251]": {
          "text": "Resident [GENEPIO:0100251]",
          "meaning": "GENEPIO:0100251"
        },
        "Visitor [GENEPIO:0100252]": {
          "text": "Visitor [GENEPIO:0100252]",
          "meaning": "GENEPIO:0100252"
        },
        "Volunteer [GENEPIO:0100253]": {
          "text": "Volunteer [GENEPIO:0100253]",
          "meaning": "GENEPIO:0100253"
        },
        "Work [GENEPIO:0100254]": {
          "text": "Work [GENEPIO:0100254]",
          "meaning": "GENEPIO:0100254"
        },
        "Administrator [GENEPIO:0100255]": {
          "text": "Administrator [GENEPIO:0100255]",
          "meaning": "GENEPIO:0100255",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "First Responder [GENEPIO:0100256]": {
          "text": "First Responder [GENEPIO:0100256]",
          "meaning": "GENEPIO:0100256",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Firefighter [GENEPIO:0100257]": {
          "text": "Firefighter [GENEPIO:0100257]",
          "meaning": "GENEPIO:0100257",
          "is_a": "First Responder [GENEPIO:0100256]"
        },
        "Paramedic [GENEPIO:0100258]": {
          "text": "Paramedic [GENEPIO:0100258]",
          "meaning": "GENEPIO:0100258",
          "is_a": "First Responder [GENEPIO:0100256]"
        },
        "Police Officer [GENEPIO:0100259]": {
          "text": "Police Officer [GENEPIO:0100259]",
          "meaning": "GENEPIO:0100259",
          "is_a": "First Responder [GENEPIO:0100256]"
        },
        "Housekeeper [GENEPIO:0100260]": {
          "text": "Housekeeper [GENEPIO:0100260]",
          "meaning": "GENEPIO:0100260",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Kitchen Worker [GENEPIO:0100261]": {
          "text": "Kitchen Worker [GENEPIO:0100261]",
          "meaning": "GENEPIO:0100261",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Healthcare Worker [GENEPIO:0100334]": {
          "text": "Healthcare Worker [GENEPIO:0100334]",
          "meaning": "GENEPIO:0100334",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Community Healthcare Worker [GENEPIO:0100420]": {
          "text": "Community Healthcare Worker [GENEPIO:0100420]",
          "meaning": "GENEPIO:0100420",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Laboratory Worker [GENEPIO:0100262]": {
          "text": "Laboratory Worker [GENEPIO:0100262]",
          "meaning": "GENEPIO:0100262",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Nurse [OMRSE:00000014]": {
          "text": "Nurse [OMRSE:00000014]",
          "meaning": "OMRSE:00000014",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Personal Care Aid [GENEPIO:0100263]": {
          "text": "Personal Care Aid [GENEPIO:0100263]",
          "meaning": "GENEPIO:0100263",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Pharmacist [GENEPIO:0100264]": {
          "text": "Pharmacist [GENEPIO:0100264]",
          "meaning": "GENEPIO:0100264",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Physician [OMRSE:00000013]": {
          "text": "Physician [OMRSE:00000013]",
          "meaning": "OMRSE:00000013",
          "is_a": "Healthcare Worker [GENEPIO:0100334]"
        },
        "Rotational Worker [GENEPIO:0100354]": {
          "text": "Rotational Worker [GENEPIO:0100354]",
          "meaning": "GENEPIO:0100354",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Seasonal Worker [GENEPIO:0100355]": {
          "text": "Seasonal Worker [GENEPIO:0100355]",
          "meaning": "GENEPIO:0100355",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Veterinarian [GENEPIO:0100265]": {
          "text": "Veterinarian [GENEPIO:0100265]",
          "meaning": "GENEPIO:0100265",
          "is_a": "Work [GENEPIO:0100254]"
        },
        "Social role [OMRSE:00000001]": {
          "text": "Social role [OMRSE:00000001]",
          "meaning": "OMRSE:00000001"
        },
        "Acquaintance of case [GENEPIO:0100266]": {
          "text": "Acquaintance of case [GENEPIO:0100266]",
          "meaning": "GENEPIO:0100266",
          "is_a": "Social role [OMRSE:00000001]"
        },
        "Relative of case [GENEPIO:0100267]": {
          "text": "Relative of case [GENEPIO:0100267]",
          "meaning": "GENEPIO:0100267",
          "is_a": "Social role [OMRSE:00000001]"
        },
        "Child of case [GENEPIO:0100268]": {
          "text": "Child of case [GENEPIO:0100268]",
          "meaning": "GENEPIO:0100268",
          "is_a": "Relative of case [GENEPIO:0100267]"
        },
        "Parent of case [GENEPIO:0100269]": {
          "text": "Parent of case [GENEPIO:0100269]",
          "meaning": "GENEPIO:0100269",
          "is_a": "Relative of case [GENEPIO:0100267]"
        },
        "Father of case [GENEPIO:0100270]": {
          "text": "Father of case [GENEPIO:0100270]",
          "meaning": "GENEPIO:0100270",
          "is_a": "Parent of case [GENEPIO:0100269]"
        },
        "Mother of case [GENEPIO:0100271]": {
          "text": "Mother of case [GENEPIO:0100271]",
          "meaning": "GENEPIO:0100271",
          "is_a": "Parent of case [GENEPIO:0100269]"
        },
        "Spouse of case [GENEPIO:0100272]": {
          "text": "Spouse of case [GENEPIO:0100272]",
          "meaning": "GENEPIO:0100272",
          "is_a": "Social role [OMRSE:00000001]"
        },
        "Other Host Role": {
          "text": "Other Host Role"
        }
      }
    },
    "exposure setting menu": {
      "name": "exposure setting menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Human Exposure [ECTO:3000005]": {
          "text": "Human Exposure [ECTO:3000005]",
          "meaning": "ECTO:3000005"
        },
        "Contact with Known COVID-19 Case [GENEPIO:0100184]": {
          "text": "Contact with Known COVID-19 Case [GENEPIO:0100184]",
          "meaning": "GENEPIO:0100184",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Contact with Patient [GENEPIO:0100185]": {
          "text": "Contact with Patient [GENEPIO:0100185]",
          "meaning": "GENEPIO:0100185",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Contact with Probable COVID-19 Case [GENEPIO:0100186]": {
          "text": "Contact with Probable COVID-19 Case [GENEPIO:0100186]",
          "meaning": "GENEPIO:0100186",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Contact with Person with Acute Respiratory Illness [GENEPIO:0100187]": {
          "text": "Contact with Person with Acute Respiratory Illness [GENEPIO:0100187]",
          "meaning": "GENEPIO:0100187",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Contact with Person with Fever and/or Cough [GENEPIO:0100188]": {
          "text": "Contact with Person with Fever and/or Cough [GENEPIO:0100188]",
          "meaning": "GENEPIO:0100188",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Contact with Person who Recently Travelled [GENEPIO:0100189]": {
          "text": "Contact with Person who Recently Travelled [GENEPIO:0100189]",
          "meaning": "GENEPIO:0100189",
          "is_a": "Human Exposure [ECTO:3000005]"
        },
        "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]": {
          "text": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]",
          "meaning": "GENEPIO:0100190"
        },
        "Abbatoir [ECTO:1000033]": {
          "text": "Abbatoir [ECTO:1000033]",
          "meaning": "ECTO:1000033",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Animal Rescue [GENEPIO:0100191]": {
          "text": "Animal Rescue [GENEPIO:0100191]",
          "meaning": "GENEPIO:0100191",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Childcare [GENEPIO:0100192]": {
          "text": "Childcare [GENEPIO:0100192]",
          "meaning": "GENEPIO:0100192",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Daycare [GENEPIO:0100193]": {
          "text": "Daycare [GENEPIO:0100193]",
          "meaning": "GENEPIO:0100193",
          "is_a": "Childcare [GENEPIO:0100192]"
        },
        "Nursery [GENEPIO:0100194]": {
          "text": "Nursery [GENEPIO:0100194]",
          "meaning": "GENEPIO:0100194",
          "is_a": "Childcare [GENEPIO:0100192]"
        },
        "Community Service Centre [GENEPIO:0100195]": {
          "text": "Community Service Centre [GENEPIO:0100195]",
          "meaning": "GENEPIO:0100195",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Correctional Facility [GENEPIO:0100196]": {
          "text": "Correctional Facility [GENEPIO:0100196]",
          "meaning": "GENEPIO:0100196",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Dormitory [GENEPIO:0100197]": {
          "text": "Dormitory [GENEPIO:0100197]",
          "meaning": "GENEPIO:0100197",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Farm [ECTO:1000034]": {
          "text": "Farm [ECTO:1000034]",
          "meaning": "ECTO:1000034",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "First Nations Reserve [GENEPIO:0100198]": {
          "text": "First Nations Reserve [GENEPIO:0100198]",
          "meaning": "GENEPIO:0100198",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Funeral Home [GENEPIO:0100199]": {
          "text": "Funeral Home [GENEPIO:0100199]",
          "meaning": "GENEPIO:0100199",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Group Home [GENEPIO:0100200]": {
          "text": "Group Home [GENEPIO:0100200]",
          "meaning": "GENEPIO:0100200",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Healthcare Setting [GENEPIO:0100201]": {
          "text": "Healthcare Setting [GENEPIO:0100201]",
          "meaning": "GENEPIO:0100201",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Ambulance [GENEPIO:0100202]": {
          "text": "Ambulance [GENEPIO:0100202]",
          "meaning": "GENEPIO:0100202",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Acute Care Facility [GENEPIO:0100203]": {
          "text": "Acute Care Facility [GENEPIO:0100203]",
          "meaning": "GENEPIO:0100203",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Clinic [GENEPIO:0100204]": {
          "text": "Clinic [GENEPIO:0100204]",
          "meaning": "GENEPIO:0100204",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Community Healthcare (At-Home) Setting [GENEPIO:0100415]": {
          "text": "Community Healthcare (At-Home) Setting [GENEPIO:0100415]",
          "meaning": "GENEPIO:0100415",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Community Health Centre [GENEPIO:0100205]": {
          "text": "Community Health Centre [GENEPIO:0100205]",
          "meaning": "GENEPIO:0100205",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Hospital [ECTO:1000035]": {
          "text": "Hospital [ECTO:1000035]",
          "meaning": "ECTO:1000035",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Emergency Department [GENEPIO:0100206]": {
          "text": "Emergency Department [GENEPIO:0100206]",
          "meaning": "GENEPIO:0100206",
          "is_a": "Hospital [ECTO:1000035]"
        },
        "ICU [GENEPIO:0100207]": {
          "text": "ICU [GENEPIO:0100207]",
          "meaning": "GENEPIO:0100207",
          "is_a": "Hospital [ECTO:1000035]"
        },
        "Ward [GENEPIO:0100208]": {
          "text": "Ward [GENEPIO:0100208]",
          "meaning": "GENEPIO:0100208",
          "is_a": "Hospital [ECTO:1000035]"
        },
        "Laboratory [ECTO:1000036]": {
          "text": "Laboratory [ECTO:1000036]",
          "meaning": "ECTO:1000036",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Long-Term Care Facility [GENEPIO:0100209]": {
          "text": "Long-Term Care Facility [GENEPIO:0100209]",
          "meaning": "GENEPIO:0100209",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Pharmacy [GENEPIO:0100210]": {
          "text": "Pharmacy [GENEPIO:0100210]",
          "meaning": "GENEPIO:0100210",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Physician's Office [GENEPIO:0100211]": {
          "text": "Physician's Office [GENEPIO:0100211]",
          "meaning": "GENEPIO:0100211",
          "is_a": "Healthcare Setting [GENEPIO:0100201]"
        },
        "Household [GENEPIO:0100212]": {
          "text": "Household [GENEPIO:0100212]",
          "meaning": "GENEPIO:0100212",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Insecure Housing (Homeless) [GENEPIO:0100213]": {
          "text": "Insecure Housing (Homeless) [GENEPIO:0100213]",
          "meaning": "GENEPIO:0100213",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Occupational Exposure [GENEPIO:0100214]": {
          "text": "Occupational Exposure [GENEPIO:0100214]",
          "meaning": "GENEPIO:0100214",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Worksite [GENEPIO:0100215]": {
          "text": "Worksite [GENEPIO:0100215]",
          "meaning": "GENEPIO:0100215",
          "is_a": "Occupational Exposure [GENEPIO:0100214]"
        },
        "Office [ECTO:1000037]": {
          "text": "Office [ECTO:1000037]",
          "meaning": "ECTO:1000037",
          "is_a": "Worksite [GENEPIO:0100215]"
        },
        "Outdoors [GENEPIO:0100216]": {
          "text": "Outdoors [GENEPIO:0100216]",
          "meaning": "GENEPIO:0100216",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Camp/camping [ECTO:5000009]": {
          "text": "Camp/camping [ECTO:5000009]",
          "meaning": "ECTO:5000009",
          "is_a": "Outdoors [GENEPIO:0100216]"
        },
        "Hiking Trail [GENEPIO:0100217]": {
          "text": "Hiking Trail [GENEPIO:0100217]",
          "meaning": "GENEPIO:0100217",
          "is_a": "Outdoors [GENEPIO:0100216]"
        },
        "Hunting Ground [ECTO:6000030]": {
          "text": "Hunting Ground [ECTO:6000030]",
          "meaning": "ECTO:6000030",
          "is_a": "Outdoors [GENEPIO:0100216]"
        },
        "Ski Resort [GENEPIO:0100218]": {
          "text": "Ski Resort [GENEPIO:0100218]",
          "meaning": "GENEPIO:0100218",
          "is_a": "Outdoors [GENEPIO:0100216]"
        },
        "Petting zoo [ECTO:5000008]": {
          "text": "Petting zoo [ECTO:5000008]",
          "meaning": "ECTO:5000008",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Place of Worship [GENEPIO:0100220]": {
          "text": "Place of Worship [GENEPIO:0100220]",
          "meaning": "GENEPIO:0100220",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Church [GENEPIO:0100221]": {
          "text": "Church [GENEPIO:0100221]",
          "meaning": "GENEPIO:0100221",
          "is_a": "Place of Worship [GENEPIO:0100220]"
        },
        "Mosque [GENEPIO:0100222]": {
          "text": "Mosque [GENEPIO:0100222]",
          "meaning": "GENEPIO:0100222",
          "is_a": "Place of Worship [GENEPIO:0100220]"
        },
        "Temple [GENEPIO:0100223]": {
          "text": "Temple [GENEPIO:0100223]",
          "meaning": "GENEPIO:0100223",
          "is_a": "Place of Worship [GENEPIO:0100220]"
        },
        "Restaurant [ECTO:1000040]": {
          "text": "Restaurant [ECTO:1000040]",
          "meaning": "ECTO:1000040",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Retail Store [ECTO:1000041]": {
          "text": "Retail Store [ECTO:1000041]",
          "meaning": "ECTO:1000041",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "School [GENEPIO:0100224]": {
          "text": "School [GENEPIO:0100224]",
          "meaning": "GENEPIO:0100224",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Temporary Residence [GENEPIO:0100225]": {
          "text": "Temporary Residence [GENEPIO:0100225]",
          "meaning": "GENEPIO:0100225",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Homeless Shelter [GENEPIO:0100226]": {
          "text": "Homeless Shelter [GENEPIO:0100226]",
          "meaning": "GENEPIO:0100226",
          "is_a": "Temporary Residence [GENEPIO:0100225]"
        },
        "Hotel [GENEPIO:0100227]": {
          "text": "Hotel [GENEPIO:0100227]",
          "meaning": "GENEPIO:0100227",
          "is_a": "Temporary Residence [GENEPIO:0100225]"
        },
        "Veterinary Care Clinic [GENEPIO:0100228]": {
          "text": "Veterinary Care Clinic [GENEPIO:0100228]",
          "meaning": "GENEPIO:0100228",
          "is_a": "Occupational, Residency or Patronage Exposure [GENEPIO:0100190]"
        },
        "Travel Exposure [GENEPIO:0100229]": {
          "text": "Travel Exposure [GENEPIO:0100229]",
          "meaning": "GENEPIO:0100229"
        },
        "Travelled on a Cruise Ship [GENEPIO:0100230]": {
          "text": "Travelled on a Cruise Ship [GENEPIO:0100230]",
          "meaning": "GENEPIO:0100230",
          "is_a": "Travel Exposure [GENEPIO:0100229]"
        },
        "Travelled on a Plane [GENEPIO:0100231]": {
          "text": "Travelled on a Plane [GENEPIO:0100231]",
          "meaning": "GENEPIO:0100231",
          "is_a": "Travel Exposure [GENEPIO:0100229]"
        },
        "Travelled on Ground Transport [GENEPIO:0100232]": {
          "text": "Travelled on Ground Transport [GENEPIO:0100232]",
          "meaning": "GENEPIO:0100232",
          "is_a": "Travel Exposure [GENEPIO:0100229]"
        },
        "Travelled outside Province/Territory [GENEPIO:0001118]": {
          "text": "Travelled outside Province/Territory [GENEPIO:0001118]",
          "meaning": "GENEPIO:0001118",
          "is_a": "Travel Exposure [GENEPIO:0100229]"
        },
        "Travelled outside Canada [GENEPIO:0001119]": {
          "text": "Travelled outside Canada [GENEPIO:0001119]",
          "meaning": "GENEPIO:0001119",
          "is_a": "Travel Exposure [GENEPIO:0100229]"
        },
        "Other Exposure Setting [GENEPIO:0100235]": {
          "text": "Other Exposure Setting [GENEPIO:0100235]",
          "meaning": "GENEPIO:0100235"
        },
        "Prior antiviral treatment [GENEPIO:0100037]": {
          "text": "Prior antiviral treatment [GENEPIO:0100037]",
          "meaning": "GENEPIO:0100037"
        },
        "No prior antiviral treatment [GENEPIO:0100233]": {
          "text": "No prior antiviral treatment [GENEPIO:0100233]",
          "meaning": "GENEPIO:0100233"
        }
      }
    },
    "prior SARS-CoV-2 infection menu": {
      "name": "prior SARS-CoV-2 infection menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Prior infection [GENEPIO:0100234]": {
          "text": "Prior infection [GENEPIO:0100234]",
          "meaning": "GENEPIO:0100234"
        },
        "No prior infection [GENEPIO:0100236]": {
          "text": "No prior infection [GENEPIO:0100236]",
          "meaning": "GENEPIO:0100236"
        }
      }
    },
    "sequencing instrument menu": {
      "name": "sequencing instrument menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Illumina sequencing instrument [GENEPIO:0100105]": {
          "text": "Illumina sequencing instrument [GENEPIO:0100105]",
          "meaning": "GENEPIO:0100105",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina Genome Analyzer [GENEPIO:0100106]": {
          "text": "Illumina Genome Analyzer [GENEPIO:0100106]",
          "meaning": "GENEPIO:0100106",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina Genome Analyzer"
          ]
        },
        "Illumina Genome Analyzer II [GENEPIO:0100107]": {
          "text": "Illumina Genome Analyzer II [GENEPIO:0100107]",
          "meaning": "GENEPIO:0100107",
          "is_a": "Illumina Genome Analyzer [GENEPIO:0100106]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina Genome Analyzer II"
          ]
        },
        "Illumina Genome Analyzer IIx [GENEPIO:0100108]": {
          "text": "Illumina Genome Analyzer IIx [GENEPIO:0100108]",
          "meaning": "GENEPIO:0100108",
          "is_a": "Illumina Genome Analyzer [GENEPIO:0100106]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina Genome Analyzer IIx"
          ]
        },
        "Illumina HiScanSQ [GENEPIO:0100109]": {
          "text": "Illumina HiScanSQ [GENEPIO:0100109]",
          "meaning": "GENEPIO:0100109",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina HiScanSQ"
          ]
        },
        "Illumina HiSeq [GENEPIO:0100110]": {
          "text": "Illumina HiSeq [GENEPIO:0100110]",
          "meaning": "GENEPIO:0100110",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina HiSeq X [GENEPIO:0100111]": {
          "text": "Illumina HiSeq X [GENEPIO:0100111]",
          "meaning": "GENEPIO:0100111",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina HiSeq X Five [GENEPIO:0100112]": {
          "text": "Illumina HiSeq X Five [GENEPIO:0100112]",
          "meaning": "GENEPIO:0100112",
          "is_a": "Illumina HiSeq X [GENEPIO:0100111]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model: Illumina HiSeq X Five"
          ]
        },
        "Illumina HiSeq X Ten [GENEPIO:0100113]": {
          "text": "Illumina HiSeq X Ten [GENEPIO:0100113]",
          "meaning": "GENEPIO:0100113",
          "is_a": "Illumina HiSeq X [GENEPIO:0100111]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina HiSeq X Ten"
          ]
        },
        "Illumina HiSeq 1000 [GENEPIO:0100114]": {
          "text": "Illumina HiSeq 1000 [GENEPIO:0100114]",
          "meaning": "GENEPIO:0100114",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina HiSeq 1000"
          ]
        },
        "Illumina HiSeq 1500 [GENEPIO:0100115]": {
          "text": "Illumina HiSeq 1500 [GENEPIO:0100115]",
          "meaning": "GENEPIO:0100115",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina HiSeq 2000 [GENEPIO:0100116]": {
          "text": "Illumina HiSeq 2000 [GENEPIO:0100116]",
          "meaning": "GENEPIO:0100116",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina HiSeq 2000"
          ]
        },
        "Illumina HiSeq 2500 [GENEPIO:0100117]": {
          "text": "Illumina HiSeq 2500 [GENEPIO:0100117]",
          "meaning": "GENEPIO:0100117",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina HiSeq 2500"
          ]
        },
        "Illumina HiSeq 3000 [GENEPIO:0100118]": {
          "text": "Illumina HiSeq 3000 [GENEPIO:0100118]",
          "meaning": "GENEPIO:0100118",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina HiSeq 4000 [GENEPIO:0100119]": {
          "text": "Illumina HiSeq 4000 [GENEPIO:0100119]",
          "meaning": "GENEPIO:0100119",
          "is_a": "Illumina HiSeq [GENEPIO:0100110]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina iSeq [GENEPIO:0100120]": {
          "text": "Illumina iSeq [GENEPIO:0100120]",
          "meaning": "GENEPIO:0100120",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina iSeq 100 [GENEPIO:0100121]": {
          "text": "Illumina iSeq 100 [GENEPIO:0100121]",
          "meaning": "GENEPIO:0100121",
          "is_a": "Illumina iSeq [GENEPIO:0100120]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina NovaSeq [GENEPIO:0100122]": {
          "text": "Illumina NovaSeq [GENEPIO:0100122]",
          "meaning": "GENEPIO:0100122",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina NovaSeq 6000 [GENEPIO:0100123]": {
          "text": "Illumina NovaSeq 6000 [GENEPIO:0100123]",
          "meaning": "GENEPIO:0100123",
          "is_a": "Illumina NovaSeq [GENEPIO:0100122]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina MiniSeq [GENEPIO:0100124]": {
          "text": "Illumina MiniSeq [GENEPIO:0100124]",
          "meaning": "GENEPIO:0100124",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina MiSeq [GENEPIO:0100125]": {
          "text": "Illumina MiSeq [GENEPIO:0100125]",
          "meaning": "GENEPIO:0100125",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina MiSeq"
          ]
        },
        "Illumina NextSeq [GENEPIO:0100126]": {
          "text": "Illumina NextSeq [GENEPIO:0100126]",
          "meaning": "GENEPIO:0100126",
          "is_a": "Illumina sequencing instrument [GENEPIO:0100105]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina NextSeq 500 [GENEPIO:0100127]": {
          "text": "Illumina NextSeq 500 [GENEPIO:0100127]",
          "meaning": "GENEPIO:0100127",
          "is_a": "Illumina NextSeq [GENEPIO:0100126]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA",
            "NCBI_SRA:instrument_model:Illumina NextSeq 500"
          ]
        },
        "Illumina NextSeq 550 [GENEPIO:0100128]": {
          "text": "Illumina NextSeq 550 [GENEPIO:0100128]",
          "meaning": "GENEPIO:0100128",
          "is_a": "Illumina NextSeq [GENEPIO:0100126]",
          "exact_mappings": [
            "NCBI_SRA:platform:ILLUMINA"
          ]
        },
        "Illumina NextSeq 2000 [GENEPIO:0100129]": {
          "text": "Illumina NextSeq 2000 [GENEPIO:0100129]",
          "meaning": "GENEPIO:0100129",
          "is_a": "Illumina NextSeq [GENEPIO:0100126]"
        },
        "Pacific Biosciences sequencing instrument [GENEPIO:0100130]": {
          "text": "Pacific Biosciences sequencing instrument [GENEPIO:0100130]",
          "meaning": "GENEPIO:0100130",
          "exact_mappings": [
            "NCBI_SRA:platform:PACBIO_SMRT"
          ]
        },
        "PacBio RS [GENEPIO:0100131]": {
          "text": "PacBio RS [GENEPIO:0100131]",
          "meaning": "GENEPIO:0100131",
          "is_a": "Pacific Biosciences sequencing instrument [GENEPIO:0100130]",
          "exact_mappings": [
            "NCBI_SRA:platform:PACBIO_SMRT",
            "NCBI_SRA:instrument_model:PacBio RS"
          ]
        },
        "PacBio RS II [GENEPIO:0100132]": {
          "text": "PacBio RS II [GENEPIO:0100132]",
          "meaning": "GENEPIO:0100132",
          "is_a": "Pacific Biosciences sequencing instrument [GENEPIO:0100130]",
          "exact_mappings": [
            "NCBI_SRA:platform:PACBIO_SMRT",
            "NCBI_SRA:instrument_model:PacBio RS II"
          ]
        },
        "PacBio Sequel [GENEPIO:0100133]": {
          "text": "PacBio Sequel [GENEPIO:0100133]",
          "meaning": "GENEPIO:0100133",
          "is_a": "Pacific Biosciences sequencing instrument [GENEPIO:0100130]",
          "exact_mappings": [
            "NCBI_SRA:platform:PACBIO_SMRT"
          ]
        },
        "PacBio Sequel II [GENEPIO:0100134]": {
          "text": "PacBio Sequel II [GENEPIO:0100134]",
          "meaning": "GENEPIO:0100134",
          "is_a": "Pacific Biosciences sequencing instrument [GENEPIO:0100130]",
          "exact_mappings": [
            "NCBI_SRA:platform:PACBIO_SMRT"
          ]
        },
        "Ion Torrent sequencing instrument [GENEPIO:0100135]": {
          "text": "Ion Torrent sequencing instrument [GENEPIO:0100135]",
          "meaning": "GENEPIO:0100135",
          "exact_mappings": [
            "NCBI_SRA:platform:ION_TORRENT"
          ]
        },
        "Ion Torrent PGM [GENEPIO:0100136]": {
          "text": "Ion Torrent PGM [GENEPIO:0100136]",
          "meaning": "GENEPIO:0100136",
          "is_a": "Ion Torrent sequencing instrument [GENEPIO:0100135]",
          "exact_mappings": [
            "NCBI_SRA:platform:ION_TORRENT",
            "NCBI_SRA:instrument_model:Ion Torrent PGM"
          ]
        },
        "Ion Torrent Proton [GENEPIO:0100137]": {
          "text": "Ion Torrent Proton [GENEPIO:0100137]",
          "meaning": "GENEPIO:0100137",
          "is_a": "Ion Torrent sequencing instrument [GENEPIO:0100135]",
          "exact_mappings": [
            "NCBI_SRA:platform:ION_TORRENT",
            "NCBI_SRA:instrument_model:Ion Torrent Proton"
          ]
        },
        "Ion Torrent S5 XL [GENEPIO:0100138]": {
          "text": "Ion Torrent S5 XL [GENEPIO:0100138]",
          "meaning": "GENEPIO:0100138",
          "is_a": "Ion Torrent sequencing instrument [GENEPIO:0100135]",
          "exact_mappings": [
            "NCBI_SRA:platform:ION_TORRENT"
          ]
        },
        "Ion Torrent S5 [GENEPIO:0100139]": {
          "text": "Ion Torrent S5 [GENEPIO:0100139]",
          "meaning": "GENEPIO:0100139",
          "is_a": "Ion Torrent sequencing instrument [GENEPIO:0100135]",
          "exact_mappings": [
            "NCBI_SRA:platform:ION_TORRENT"
          ]
        },
        "Oxford Nanopore sequencing instrument [GENEPIO:0100140]": {
          "text": "Oxford Nanopore sequencing instrument [GENEPIO:0100140]",
          "meaning": "GENEPIO:0100140",
          "exact_mappings": [
            "NCBI_SRA:platform:OXFORD_NANOPORE"
          ]
        },
        "Oxford Nanopore GridION [GENEPIO:0100141]": {
          "text": "Oxford Nanopore GridION [GENEPIO:0100141]",
          "meaning": "GENEPIO:0100141",
          "is_a": "Oxford Nanopore sequencing instrument [GENEPIO:0100140]",
          "exact_mappings": [
            "NCBI_SRA:platform:OXFORD_NANOPORE",
            "NCBI_SRA:instrument_model:GridION"
          ]
        },
        "Oxford Nanopore MinION [GENEPIO:0100142]": {
          "text": "Oxford Nanopore MinION [GENEPIO:0100142]",
          "meaning": "GENEPIO:0100142",
          "is_a": "Oxford Nanopore sequencing instrument [GENEPIO:0100140]",
          "exact_mappings": [
            "NCBI_SRA:platform:OXFORD_NANOPORE",
            "NCBI_SRA:instrument_model:MinION"
          ]
        },
        "Oxford Nanopore PromethION [GENEPIO:0100143]": {
          "text": "Oxford Nanopore PromethION [GENEPIO:0100143]",
          "meaning": "GENEPIO:0100143",
          "is_a": "Oxford Nanopore sequencing instrument [GENEPIO:0100140]",
          "exact_mappings": [
            "NCBI_SRA:platform:OXFORD_NANOPORE"
          ]
        },
        "BGI Genomics sequencing instrument [GENEPIO:0100144]": {
          "text": "BGI Genomics sequencing instrument [GENEPIO:0100144]",
          "meaning": "GENEPIO:0100144"
        },
        "BGI Genomics BGISEQ-500 [GENEPIO:0100145]": {
          "text": "BGI Genomics BGISEQ-500 [GENEPIO:0100145]",
          "meaning": "GENEPIO:0100145",
          "is_a": "BGI Genomics sequencing instrument [GENEPIO:0100144]"
        },
        "MGI sequencing instrument [GENEPIO:0100146]": {
          "text": "MGI sequencing instrument [GENEPIO:0100146]",
          "meaning": "GENEPIO:0100146"
        },
        "MGI DNBSEQ-T7 [GENEPIO:0100147]": {
          "text": "MGI DNBSEQ-T7 [GENEPIO:0100147]",
          "meaning": "GENEPIO:0100147",
          "is_a": "MGI sequencing instrument [GENEPIO:0100146]"
        },
        "MGI DNBSEQ-G400 [GENEPIO:0100148]": {
          "text": "MGI DNBSEQ-G400 [GENEPIO:0100148]",
          "meaning": "GENEPIO:0100148",
          "is_a": "MGI sequencing instrument [GENEPIO:0100146]"
        },
        "MGI DNBSEQ-G400RS FAST [GENEPIO:0100149]": {
          "text": "MGI DNBSEQ-G400RS FAST [GENEPIO:0100149]",
          "meaning": "GENEPIO:0100149",
          "is_a": "MGI sequencing instrument [GENEPIO:0100146]"
        },
        "MGI DNBSEQ-G50 [GENEPIO:0100150]": {
          "text": "MGI DNBSEQ-G50 [GENEPIO:0100150]",
          "meaning": "GENEPIO:0100150",
          "is_a": "MGI sequencing instrument [GENEPIO:0100146]"
        }
      }
    },
    "gene name menu": {
      "name": "gene name menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "E gene (orf4) [GENEPIO:0100151]": {
          "text": "E gene (orf4) [GENEPIO:0100151]",
          "meaning": "GENEPIO:0100151"
        },
        "M gene (orf5) [GENEPIO:0100152]": {
          "text": "M gene (orf5) [GENEPIO:0100152]",
          "meaning": "GENEPIO:0100152"
        },
        "N gene (orf9) [GENEPIO:0100153]": {
          "text": "N gene (orf9) [GENEPIO:0100153]",
          "meaning": "GENEPIO:0100153"
        },
        "Spike gene (orf2) [GENEPIO:0100154]": {
          "text": "Spike gene (orf2) [GENEPIO:0100154]",
          "meaning": "GENEPIO:0100154"
        },
        "orf1ab (rep) [GENEPIO:0100155]": {
          "text": "orf1ab (rep) [GENEPIO:0100155]",
          "meaning": "GENEPIO:0100155"
        },
        "orf1a (pp1a) [GENEPIO:0100156]": {
          "text": "orf1a (pp1a) [GENEPIO:0100156]",
          "meaning": "GENEPIO:0100156",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp11 [GENEPIO:0100157]": {
          "text": "nsp11 [GENEPIO:0100157]",
          "meaning": "GENEPIO:0100157",
          "is_a": "orf1a (pp1a) [GENEPIO:0100156]"
        },
        "nsp1 [GENEPIO:0100158]": {
          "text": "nsp1 [GENEPIO:0100158]",
          "meaning": "GENEPIO:0100158",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp2 [GENEPIO:0100159]": {
          "text": "nsp2 [GENEPIO:0100159]",
          "meaning": "GENEPIO:0100159",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp3 [GENEPIO:0100160]": {
          "text": "nsp3 [GENEPIO:0100160]",
          "meaning": "GENEPIO:0100160",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp4 [GENEPIO:0100161]": {
          "text": "nsp4 [GENEPIO:0100161]",
          "meaning": "GENEPIO:0100161",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp5 [GENEPIO:0100162]": {
          "text": "nsp5 [GENEPIO:0100162]",
          "meaning": "GENEPIO:0100162",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp6 [GENEPIO:0100163]": {
          "text": "nsp6 [GENEPIO:0100163]",
          "meaning": "GENEPIO:0100163",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp7 [GENEPIO:0100164]": {
          "text": "nsp7 [GENEPIO:0100164]",
          "meaning": "GENEPIO:0100164",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp8 [GENEPIO:0100165]": {
          "text": "nsp8 [GENEPIO:0100165]",
          "meaning": "GENEPIO:0100165",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp9 [GENEPIO:0100166]": {
          "text": "nsp9 [GENEPIO:0100166]",
          "meaning": "GENEPIO:0100166",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp10 [GENEPIO:0100167]": {
          "text": "nsp10 [GENEPIO:0100167]",
          "meaning": "GENEPIO:0100167",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "RdRp gene (nsp12) [GENEPIO:0100168]": {
          "text": "RdRp gene (nsp12) [GENEPIO:0100168]",
          "meaning": "GENEPIO:0100168",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "hel gene (nsp13) [GENEPIO:0100169]": {
          "text": "hel gene (nsp13) [GENEPIO:0100169]",
          "meaning": "GENEPIO:0100169",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "exoN gene (nsp14) [GENEPIO:0100170]": {
          "text": "exoN gene (nsp14) [GENEPIO:0100170]",
          "meaning": "GENEPIO:0100170",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp15 [GENEPIO:0100171]": {
          "text": "nsp15 [GENEPIO:0100171]",
          "meaning": "GENEPIO:0100171",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "nsp16 [GENEPIO:0100172]": {
          "text": "nsp16 [GENEPIO:0100172]",
          "meaning": "GENEPIO:0100172",
          "is_a": "orf1ab (rep) [GENEPIO:0100155]"
        },
        "orf3a [GENEPIO:0100173]": {
          "text": "orf3a [GENEPIO:0100173]",
          "meaning": "GENEPIO:0100173"
        },
        "orf3b [GENEPIO:0100174]": {
          "text": "orf3b [GENEPIO:0100174]",
          "meaning": "GENEPIO:0100174"
        },
        "orf6 (ns6) [GENEPIO:0100175]": {
          "text": "orf6 (ns6) [GENEPIO:0100175]",
          "meaning": "GENEPIO:0100175"
        },
        "orf7a [GENEPIO:0100176]": {
          "text": "orf7a [GENEPIO:0100176]",
          "meaning": "GENEPIO:0100176"
        },
        "orf7b (ns7b) [GENEPIO:0100177]": {
          "text": "orf7b (ns7b) [GENEPIO:0100177]",
          "meaning": "GENEPIO:0100177"
        },
        "orf8 (ns8) [GENEPIO:0100178]": {
          "text": "orf8 (ns8) [GENEPIO:0100178]",
          "meaning": "GENEPIO:0100178"
        },
        "orf9b [GENEPIO:0100179]": {
          "text": "orf9b [GENEPIO:0100179]",
          "meaning": "GENEPIO:0100179"
        },
        "orf9c [GENEPIO:0100180]": {
          "text": "orf9c [GENEPIO:0100180]",
          "meaning": "GENEPIO:0100180"
        },
        "orf10 [GENEPIO:0100181]": {
          "text": "orf10 [GENEPIO:0100181]",
          "meaning": "GENEPIO:0100181"
        },
        "orf14 [GENEPIO:0100182]": {
          "text": "orf14 [GENEPIO:0100182]",
          "meaning": "GENEPIO:0100182"
        },
        "SARS-COV-2 5' UTR [GENEPIO:0100183]": {
          "text": "SARS-COV-2 5' UTR [GENEPIO:0100183]",
          "meaning": "GENEPIO:0100183"
        }
      }
    },
    "geo_loc_name (country) menu": {
      "name": "geo_loc_name (country) menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "Afghanistan [GAZ:00006882]": {
          "text": "Afghanistan [GAZ:00006882]",
          "meaning": "GAZ:00006882"
        },
        "Albania [GAZ:00002953]": {
          "text": "Albania [GAZ:00002953]",
          "meaning": "GAZ:00002953"
        },
        "Algeria [GAZ:00000563]": {
          "text": "Algeria [GAZ:00000563]",
          "meaning": "GAZ:00000563"
        },
        "American Samoa [GAZ:00003957]": {
          "text": "American Samoa [GAZ:00003957]",
          "meaning": "GAZ:00003957"
        },
        "Andorra [GAZ:00002948]": {
          "text": "Andorra [GAZ:00002948]",
          "meaning": "GAZ:00002948"
        },
        "Angola [GAZ:00001095]": {
          "text": "Angola [GAZ:00001095]",
          "meaning": "GAZ:00001095"
        },
        "Anguilla [GAZ:00009159]": {
          "text": "Anguilla [GAZ:00009159]",
          "meaning": "GAZ:00009159"
        },
        "Antarctica [GAZ:00000462]": {
          "text": "Antarctica [GAZ:00000462]",
          "meaning": "GAZ:00000462"
        },
        "Antigua and Barbuda [GAZ:00006883]": {
          "text": "Antigua and Barbuda [GAZ:00006883]",
          "meaning": "GAZ:00006883"
        },
        "Argentina [GAZ:00002928]": {
          "text": "Argentina [GAZ:00002928]",
          "meaning": "GAZ:00002928"
        },
        "Armenia [GAZ:00004094]": {
          "text": "Armenia [GAZ:00004094]",
          "meaning": "GAZ:00004094"
        },
        "Aruba [GAZ:00004025]": {
          "text": "Aruba [GAZ:00004025]",
          "meaning": "GAZ:00004025"
        },
        "Ashmore and Cartier Islands [GAZ:00005901]": {
          "text": "Ashmore and Cartier Islands [GAZ:00005901]",
          "meaning": "GAZ:00005901"
        },
        "Australia [GAZ:00000463]": {
          "text": "Australia [GAZ:00000463]",
          "meaning": "GAZ:00000463"
        },
        "Austria [GAZ:00002942]": {
          "text": "Austria [GAZ:00002942]",
          "meaning": "GAZ:00002942"
        },
        "Azerbaijan [GAZ:00004941]": {
          "text": "Azerbaijan [GAZ:00004941]",
          "meaning": "GAZ:00004941"
        },
        "Bahamas [GAZ:00002733]": {
          "text": "Bahamas [GAZ:00002733]",
          "meaning": "GAZ:00002733"
        },
        "Bahrain [GAZ:00005281]": {
          "text": "Bahrain [GAZ:00005281]",
          "meaning": "GAZ:00005281"
        },
        "Baker Island [GAZ:00007117]": {
          "text": "Baker Island [GAZ:00007117]",
          "meaning": "GAZ:00007117"
        },
        "Bangladesh [GAZ:00003750]": {
          "text": "Bangladesh [GAZ:00003750]",
          "meaning": "GAZ:00003750"
        },
        "Barbados [GAZ:00001251]": {
          "text": "Barbados [GAZ:00001251]",
          "meaning": "GAZ:00001251"
        },
        "Bassas da India [GAZ:00005810]": {
          "text": "Bassas da India [GAZ:00005810]",
          "meaning": "GAZ:00005810"
        },
        "Belarus [GAZ:00006886]": {
          "text": "Belarus [GAZ:00006886]",
          "meaning": "GAZ:00006886"
        },
        "Belgium [GAZ:00002938]": {
          "text": "Belgium [GAZ:00002938]",
          "meaning": "GAZ:00002938"
        },
        "Belize [GAZ:00002934]": {
          "text": "Belize [GAZ:00002934]",
          "meaning": "GAZ:00002934"
        },
        "Benin [GAZ:00000904]": {
          "text": "Benin [GAZ:00000904]",
          "meaning": "GAZ:00000904"
        },
        "Bermuda [GAZ:00001264]": {
          "text": "Bermuda [GAZ:00001264]",
          "meaning": "GAZ:00001264"
        },
        "Bhutan [GAZ:00003920]": {
          "text": "Bhutan [GAZ:00003920]",
          "meaning": "GAZ:00003920"
        },
        "Bolivia [GAZ:00002511]": {
          "text": "Bolivia [GAZ:00002511]",
          "meaning": "GAZ:00002511"
        },
        "Borneo [GAZ:00025355]": {
          "text": "Borneo [GAZ:00025355]",
          "meaning": "GAZ:00025355"
        },
        "Bosnia and Herzegovina [GAZ:00006887]": {
          "text": "Bosnia and Herzegovina [GAZ:00006887]",
          "meaning": "GAZ:00006887"
        },
        "Botswana [GAZ:00001097]": {
          "text": "Botswana [GAZ:00001097]",
          "meaning": "GAZ:00001097"
        },
        "Bouvet Island [GAZ:00001453]": {
          "text": "Bouvet Island [GAZ:00001453]",
          "meaning": "GAZ:00001453"
        },
        "Brazil [GAZ:00002828]": {
          "text": "Brazil [GAZ:00002828]",
          "meaning": "GAZ:00002828"
        },
        "British Virgin Islands [GAZ:00003961]": {
          "text": "British Virgin Islands [GAZ:00003961]",
          "meaning": "GAZ:00003961"
        },
        "Brunei [GAZ:00003901]": {
          "text": "Brunei [GAZ:00003901]",
          "meaning": "GAZ:00003901"
        },
        "Bulgaria [GAZ:00002950]": {
          "text": "Bulgaria [GAZ:00002950]",
          "meaning": "GAZ:00002950"
        },
        "Burkina Faso [GAZ:00000905]": {
          "text": "Burkina Faso [GAZ:00000905]",
          "meaning": "GAZ:00000905"
        },
        "Burundi [GAZ:00001090]": {
          "text": "Burundi [GAZ:00001090]",
          "meaning": "GAZ:00001090"
        },
        "Cambodia [GAZ:00006888]": {
          "text": "Cambodia [GAZ:00006888]",
          "meaning": "GAZ:00006888"
        },
        "Cameroon [GAZ:00001093]": {
          "text": "Cameroon [GAZ:00001093]",
          "meaning": "GAZ:00001093"
        },
        "Canada [GAZ:00002560]": {
          "text": "Canada [GAZ:00002560]",
          "meaning": "GAZ:00002560"
        },
        "Cape Verde [GAZ:00001227]": {
          "text": "Cape Verde [GAZ:00001227]",
          "meaning": "GAZ:00001227"
        },
        "Cayman Islands [GAZ:00003986]": {
          "text": "Cayman Islands [GAZ:00003986]",
          "meaning": "GAZ:00003986"
        },
        "Central African Republic [GAZ:00001089]": {
          "text": "Central African Republic [GAZ:00001089]",
          "meaning": "GAZ:00001089"
        },
        "Chad [GAZ:00000586]": {
          "text": "Chad [GAZ:00000586]",
          "meaning": "GAZ:00000586"
        },
        "Chile [GAZ:00002825]": {
          "text": "Chile [GAZ:00002825]",
          "meaning": "GAZ:00002825"
        },
        "China [GAZ:00002845]": {
          "text": "China [GAZ:00002845]",
          "meaning": "GAZ:00002845"
        },
        "Christmas Island [GAZ:00005915]": {
          "text": "Christmas Island [GAZ:00005915]",
          "meaning": "GAZ:00005915"
        },
        "Clipperton Island [GAZ:00005838]": {
          "text": "Clipperton Island [GAZ:00005838]",
          "meaning": "GAZ:00005838"
        },
        "Cocos Islands [GAZ:00009721]": {
          "text": "Cocos Islands [GAZ:00009721]",
          "meaning": "GAZ:00009721"
        },
        "Colombia [GAZ:00002929]": {
          "text": "Colombia [GAZ:00002929]",
          "meaning": "GAZ:00002929"
        },
        "Comoros [GAZ:00005820]": {
          "text": "Comoros [GAZ:00005820]",
          "meaning": "GAZ:00005820"
        },
        "Cook Islands [GAZ:00053798]": {
          "text": "Cook Islands [GAZ:00053798]",
          "meaning": "GAZ:00053798"
        },
        "Coral Sea Islands [GAZ:00005917]": {
          "text": "Coral Sea Islands [GAZ:00005917]",
          "meaning": "GAZ:00005917"
        },
        "Costa Rica [GAZ:00002901]": {
          "text": "Costa Rica [GAZ:00002901]",
          "meaning": "GAZ:00002901"
        },
        "Cote d'Ivoire [GAZ:00000906]": {
          "text": "Cote d'Ivoire [GAZ:00000906]",
          "meaning": "GAZ:00000906"
        },
        "Croatia [GAZ:00002719]": {
          "text": "Croatia [GAZ:00002719]",
          "meaning": "GAZ:00002719"
        },
        "Cuba [GAZ:00003762]": {
          "text": "Cuba [GAZ:00003762]",
          "meaning": "GAZ:00003762"
        },
        "Curacao [GAZ:00012582]": {
          "text": "Curacao [GAZ:00012582]",
          "meaning": "GAZ:00012582"
        },
        "Cyprus [GAZ:00004006]": {
          "text": "Cyprus [GAZ:00004006]",
          "meaning": "GAZ:00004006"
        },
        "Czech Republic [GAZ:00002954]": {
          "text": "Czech Republic [GAZ:00002954]",
          "meaning": "GAZ:00002954"
        },
        "Democratic Republic of the Congo [GAZ:00001086]": {
          "text": "Democratic Republic of the Congo [GAZ:00001086]",
          "meaning": "GAZ:00001086"
        },
        "Denmark [GAZ:00005852]": {
          "text": "Denmark [GAZ:00005852]",
          "meaning": "GAZ:00005852"
        },
        "Djibouti [GAZ:00000582]": {
          "text": "Djibouti [GAZ:00000582]",
          "meaning": "GAZ:00000582"
        },
        "Dominica [GAZ:00006890]": {
          "text": "Dominica [GAZ:00006890]",
          "meaning": "GAZ:00006890"
        },
        "Dominican Republic [GAZ:00003952]": {
          "text": "Dominican Republic [GAZ:00003952]",
          "meaning": "GAZ:00003952"
        },
        "Ecuador [GAZ:00002912]": {
          "text": "Ecuador [GAZ:00002912]",
          "meaning": "GAZ:00002912"
        },
        "Egypt [GAZ:00003934]": {
          "text": "Egypt [GAZ:00003934]",
          "meaning": "GAZ:00003934"
        },
        "El Salvador [GAZ:00002935]": {
          "text": "El Salvador [GAZ:00002935]",
          "meaning": "GAZ:00002935"
        },
        "Equatorial Guinea [GAZ:00001091]": {
          "text": "Equatorial Guinea [GAZ:00001091]",
          "meaning": "GAZ:00001091"
        },
        "Eritrea [GAZ:00000581]": {
          "text": "Eritrea [GAZ:00000581]",
          "meaning": "GAZ:00000581"
        },
        "Estonia [GAZ:00002959]": {
          "text": "Estonia [GAZ:00002959]",
          "meaning": "GAZ:00002959"
        },
        "Eswatini [GAZ:00001099]": {
          "text": "Eswatini [GAZ:00001099]",
          "meaning": "GAZ:00001099"
        },
        "Ethiopia [GAZ:00000567]": {
          "text": "Ethiopia [GAZ:00000567]",
          "meaning": "GAZ:00000567"
        },
        "Europa Island [GAZ:00005811]": {
          "text": "Europa Island [GAZ:00005811]",
          "meaning": "GAZ:00005811"
        },
        "Falkland Islands (Islas Malvinas) [GAZ:00001412]": {
          "text": "Falkland Islands (Islas Malvinas) [GAZ:00001412]",
          "meaning": "GAZ:00001412"
        },
        "Faroe Islands [GAZ:00059206]": {
          "text": "Faroe Islands [GAZ:00059206]",
          "meaning": "GAZ:00059206"
        },
        "Fiji [GAZ:00006891]": {
          "text": "Fiji [GAZ:00006891]",
          "meaning": "GAZ:00006891"
        },
        "Finland [GAZ:00002937]": {
          "text": "Finland [GAZ:00002937]",
          "meaning": "GAZ:00002937"
        },
        "France [GAZ:00003940]": {
          "text": "France [GAZ:00003940]",
          "meaning": "GAZ:00003940"
        },
        "French Guiana [GAZ:00002516]": {
          "text": "French Guiana [GAZ:00002516]",
          "meaning": "GAZ:00002516"
        },
        "French Polynesia [GAZ:00002918]": {
          "text": "French Polynesia [GAZ:00002918]",
          "meaning": "GAZ:00002918"
        },
        "French Southern and Antarctic Lands [GAZ:00003753]": {
          "text": "French Southern and Antarctic Lands [GAZ:00003753]",
          "meaning": "GAZ:00003753"
        },
        "Gabon [GAZ:00001092]": {
          "text": "Gabon [GAZ:00001092]",
          "meaning": "GAZ:00001092"
        },
        "Gambia [GAZ:00000907]": {
          "text": "Gambia [GAZ:00000907]",
          "meaning": "GAZ:00000907"
        },
        "Gaza Strip [GAZ:00009571]": {
          "text": "Gaza Strip [GAZ:00009571]",
          "meaning": "GAZ:00009571"
        },
        "Georgia [GAZ:00004942]": {
          "text": "Georgia [GAZ:00004942]",
          "meaning": "GAZ:00004942"
        },
        "Germany [GAZ:00002646]": {
          "text": "Germany [GAZ:00002646]",
          "meaning": "GAZ:00002646"
        },
        "Ghana [GAZ:00000908]": {
          "text": "Ghana [GAZ:00000908]",
          "meaning": "GAZ:00000908"
        },
        "Gibraltar [GAZ:00003987]": {
          "text": "Gibraltar [GAZ:00003987]",
          "meaning": "GAZ:00003987"
        },
        "Glorioso Islands [GAZ:00005808]": {
          "text": "Glorioso Islands [GAZ:00005808]",
          "meaning": "GAZ:00005808"
        },
        "Greece [GAZ:00002945]": {
          "text": "Greece [GAZ:00002945]",
          "meaning": "GAZ:00002945"
        },
        "Greenland [GAZ:00001507]": {
          "text": "Greenland [GAZ:00001507]",
          "meaning": "GAZ:00001507"
        },
        "Grenada [GAZ:02000573]": {
          "text": "Grenada [GAZ:02000573]",
          "meaning": "GAZ:02000573"
        },
        "Guadeloupe [GAZ:00067142]": {
          "text": "Guadeloupe [GAZ:00067142]",
          "meaning": "GAZ:00067142"
        },
        "Guam [GAZ:00003706]": {
          "text": "Guam [GAZ:00003706]",
          "meaning": "GAZ:00003706"
        },
        "Guatemala [GAZ:00002936]": {
          "text": "Guatemala [GAZ:00002936]",
          "meaning": "GAZ:00002936"
        },
        "Guernsey [GAZ:00001550]": {
          "text": "Guernsey [GAZ:00001550]",
          "meaning": "GAZ:00001550"
        },
        "Guinea [GAZ:00000909]": {
          "text": "Guinea [GAZ:00000909]",
          "meaning": "GAZ:00000909"
        },
        "Guinea-Bissau [GAZ:00000910]": {
          "text": "Guinea-Bissau [GAZ:00000910]",
          "meaning": "GAZ:00000910"
        },
        "Guyana [GAZ:00002522]": {
          "text": "Guyana [GAZ:00002522]",
          "meaning": "GAZ:00002522"
        },
        "Haiti [GAZ:00003953]": {
          "text": "Haiti [GAZ:00003953]",
          "meaning": "GAZ:00003953"
        },
        "Heard Island and McDonald Islands [GAZ:00009718]": {
          "text": "Heard Island and McDonald Islands [GAZ:00009718]",
          "meaning": "GAZ:00009718"
        },
        "Honduras [GAZ:00002894]": {
          "text": "Honduras [GAZ:00002894]",
          "meaning": "GAZ:00002894"
        },
        "Hong Kong [GAZ:00003203]": {
          "text": "Hong Kong [GAZ:00003203]",
          "meaning": "GAZ:00003203"
        },
        "Howland Island [GAZ:00007120]": {
          "text": "Howland Island [GAZ:00007120]",
          "meaning": "GAZ:00007120"
        },
        "Hungary [GAZ:00002952]": {
          "text": "Hungary [GAZ:00002952]",
          "meaning": "GAZ:00002952"
        },
        "Iceland [GAZ:00000843]": {
          "text": "Iceland [GAZ:00000843]",
          "meaning": "GAZ:00000843"
        },
        "India [GAZ:00002839]": {
          "text": "India [GAZ:00002839]",
          "meaning": "GAZ:00002839"
        },
        "Indonesia [GAZ:00003727]": {
          "text": "Indonesia [GAZ:00003727]",
          "meaning": "GAZ:00003727"
        },
        "Iran [GAZ:00004474]": {
          "text": "Iran [GAZ:00004474]",
          "meaning": "GAZ:00004474"
        },
        "Iraq [GAZ:00004483]": {
          "text": "Iraq [GAZ:00004483]",
          "meaning": "GAZ:00004483"
        },
        "Ireland [GAZ:00002943]": {
          "text": "Ireland [GAZ:00002943]",
          "meaning": "GAZ:00002943"
        },
        "Isle of Man [GAZ:00052477]": {
          "text": "Isle of Man [GAZ:00052477]",
          "meaning": "GAZ:00052477"
        },
        "Israel [GAZ:00002476]": {
          "text": "Israel [GAZ:00002476]",
          "meaning": "GAZ:00002476"
        },
        "Italy [GAZ:00002650]": {
          "text": "Italy [GAZ:00002650]",
          "meaning": "GAZ:00002650"
        },
        "Jamaica [GAZ:00003781]": {
          "text": "Jamaica [GAZ:00003781]",
          "meaning": "GAZ:00003781"
        },
        "Jan Mayen [GAZ:00005853]": {
          "text": "Jan Mayen [GAZ:00005853]",
          "meaning": "GAZ:00005853"
        },
        "Japan [GAZ:00002747]": {
          "text": "Japan [GAZ:00002747]",
          "meaning": "GAZ:00002747"
        },
        "Jarvis Island [GAZ:00007118]": {
          "text": "Jarvis Island [GAZ:00007118]",
          "meaning": "GAZ:00007118"
        },
        "Jersey [GAZ:00001551]": {
          "text": "Jersey [GAZ:00001551]",
          "meaning": "GAZ:00001551"
        },
        "Johnston Atoll [GAZ:00007114]": {
          "text": "Johnston Atoll [GAZ:00007114]",
          "meaning": "GAZ:00007114"
        },
        "Jordan [GAZ:00002473]": {
          "text": "Jordan [GAZ:00002473]",
          "meaning": "GAZ:00002473"
        },
        "Juan de Nova Island [GAZ:00005809]": {
          "text": "Juan de Nova Island [GAZ:00005809]",
          "meaning": "GAZ:00005809"
        },
        "Kazakhstan [GAZ:00004999]": {
          "text": "Kazakhstan [GAZ:00004999]",
          "meaning": "GAZ:00004999"
        },
        "Kenya [GAZ:00001101]": {
          "text": "Kenya [GAZ:00001101]",
          "meaning": "GAZ:00001101"
        },
        "Kerguelen Archipelago [GAZ:00005682]": {
          "text": "Kerguelen Archipelago [GAZ:00005682]",
          "meaning": "GAZ:00005682"
        },
        "Kingman Reef [GAZ:00007116]": {
          "text": "Kingman Reef [GAZ:00007116]",
          "meaning": "GAZ:00007116"
        },
        "Kiribati [GAZ:00006894]": {
          "text": "Kiribati [GAZ:00006894]",
          "meaning": "GAZ:00006894"
        },
        "Kosovo [GAZ:00011337]": {
          "text": "Kosovo [GAZ:00011337]",
          "meaning": "GAZ:00011337"
        },
        "Kuwait [GAZ:00005285]": {
          "text": "Kuwait [GAZ:00005285]",
          "meaning": "GAZ:00005285"
        },
        "Kyrgyzstan [GAZ:00006893]": {
          "text": "Kyrgyzstan [GAZ:00006893]",
          "meaning": "GAZ:00006893"
        },
        "Laos [GAZ:00006889]": {
          "text": "Laos [GAZ:00006889]",
          "meaning": "GAZ:00006889"
        },
        "Latvia [GAZ:00002958]": {
          "text": "Latvia [GAZ:00002958]",
          "meaning": "GAZ:00002958"
        },
        "Lebanon [GAZ:00002478]": {
          "text": "Lebanon [GAZ:00002478]",
          "meaning": "GAZ:00002478"
        },
        "Lesotho [GAZ:00001098]": {
          "text": "Lesotho [GAZ:00001098]",
          "meaning": "GAZ:00001098"
        },
        "Liberia [GAZ:00000911]": {
          "text": "Liberia [GAZ:00000911]",
          "meaning": "GAZ:00000911"
        },
        "Libya [GAZ:00000566]": {
          "text": "Libya [GAZ:00000566]",
          "meaning": "GAZ:00000566"
        },
        "Liechtenstein [GAZ:00003858]": {
          "text": "Liechtenstein [GAZ:00003858]",
          "meaning": "GAZ:00003858"
        },
        "Line Islands [GAZ:00007144]": {
          "text": "Line Islands [GAZ:00007144]",
          "meaning": "GAZ:00007144"
        },
        "Lithuania [GAZ:00002960]": {
          "text": "Lithuania [GAZ:00002960]",
          "meaning": "GAZ:00002960"
        },
        "Luxembourg [GAZ:00002947]": {
          "text": "Luxembourg [GAZ:00002947]",
          "meaning": "GAZ:00002947"
        },
        "Macau [GAZ:00003202]": {
          "text": "Macau [GAZ:00003202]",
          "meaning": "GAZ:00003202"
        },
        "Madagascar [GAZ:00001108]": {
          "text": "Madagascar [GAZ:00001108]",
          "meaning": "GAZ:00001108"
        },
        "Malawi [GAZ:00001105]": {
          "text": "Malawi [GAZ:00001105]",
          "meaning": "GAZ:00001105"
        },
        "Malaysia [GAZ:00003902]": {
          "text": "Malaysia [GAZ:00003902]",
          "meaning": "GAZ:00003902"
        },
        "Maldives [GAZ:00006924]": {
          "text": "Maldives [GAZ:00006924]",
          "meaning": "GAZ:00006924"
        },
        "Mali [GAZ:00000584]": {
          "text": "Mali [GAZ:00000584]",
          "meaning": "GAZ:00000584"
        },
        "Malta [GAZ:00004017]": {
          "text": "Malta [GAZ:00004017]",
          "meaning": "GAZ:00004017"
        },
        "Marshall Islands [GAZ:00007161]": {
          "text": "Marshall Islands [GAZ:00007161]",
          "meaning": "GAZ:00007161"
        },
        "Martinique [GAZ:00067143]": {
          "text": "Martinique [GAZ:00067143]",
          "meaning": "GAZ:00067143"
        },
        "Mauritania [GAZ:00000583]": {
          "text": "Mauritania [GAZ:00000583]",
          "meaning": "GAZ:00000583"
        },
        "Mauritius [GAZ:00003745]": {
          "text": "Mauritius [GAZ:00003745]",
          "meaning": "GAZ:00003745"
        },
        "Mayotte [GAZ:00003943]": {
          "text": "Mayotte [GAZ:00003943]",
          "meaning": "GAZ:00003943"
        },
        "Mexico [GAZ:00002852]": {
          "text": "Mexico [GAZ:00002852]",
          "meaning": "GAZ:00002852"
        },
        "Micronesia [GAZ:00005862]": {
          "text": "Micronesia [GAZ:00005862]",
          "meaning": "GAZ:00005862"
        },
        "Midway Islands [GAZ:00007112]": {
          "text": "Midway Islands [GAZ:00007112]",
          "meaning": "GAZ:00007112"
        },
        "Moldova [GAZ:00003897]": {
          "text": "Moldova [GAZ:00003897]",
          "meaning": "GAZ:00003897"
        },
        "Monaco [GAZ:00003857]": {
          "text": "Monaco [GAZ:00003857]",
          "meaning": "GAZ:00003857"
        },
        "Mongolia [GAZ:00008744]": {
          "text": "Mongolia [GAZ:00008744]",
          "meaning": "GAZ:00008744"
        },
        "Montenegro [GAZ:00006898]": {
          "text": "Montenegro [GAZ:00006898]",
          "meaning": "GAZ:00006898"
        },
        "Montserrat [GAZ:00003988]": {
          "text": "Montserrat [GAZ:00003988]",
          "meaning": "GAZ:00003988"
        },
        "Morocco [GAZ:00000565]": {
          "text": "Morocco [GAZ:00000565]",
          "meaning": "GAZ:00000565"
        },
        "Mozambique [GAZ:00001100]": {
          "text": "Mozambique [GAZ:00001100]",
          "meaning": "GAZ:00001100"
        },
        "Myanmar [GAZ:00006899]": {
          "text": "Myanmar [GAZ:00006899]",
          "meaning": "GAZ:00006899"
        },
        "Namibia [GAZ:00001096]": {
          "text": "Namibia [GAZ:00001096]",
          "meaning": "GAZ:00001096"
        },
        "Nauru [GAZ:00006900]": {
          "text": "Nauru [GAZ:00006900]",
          "meaning": "GAZ:00006900"
        },
        "Navassa Island [GAZ:00007119]": {
          "text": "Navassa Island [GAZ:00007119]",
          "meaning": "GAZ:00007119"
        },
        "Nepal [GAZ:00004399]": {
          "text": "Nepal [GAZ:00004399]",
          "meaning": "GAZ:00004399"
        },
        "Netherlands [GAZ:00002946]": {
          "text": "Netherlands [GAZ:00002946]",
          "meaning": "GAZ:00002946"
        },
        "New Caledonia [GAZ:00005206]": {
          "text": "New Caledonia [GAZ:00005206]",
          "meaning": "GAZ:00005206"
        },
        "New Zealand [GAZ:00000469]": {
          "text": "New Zealand [GAZ:00000469]",
          "meaning": "GAZ:00000469"
        },
        "Nicaragua [GAZ:00002978]": {
          "text": "Nicaragua [GAZ:00002978]",
          "meaning": "GAZ:00002978"
        },
        "Niger [GAZ:00000585]": {
          "text": "Niger [GAZ:00000585]",
          "meaning": "GAZ:00000585"
        },
        "Nigeria [GAZ:00000912]": {
          "text": "Nigeria [GAZ:00000912]",
          "meaning": "GAZ:00000912"
        },
        "Niue [GAZ:00006902]": {
          "text": "Niue [GAZ:00006902]",
          "meaning": "GAZ:00006902"
        },
        "Norfolk Island [GAZ:00005908]": {
          "text": "Norfolk Island [GAZ:00005908]",
          "meaning": "GAZ:00005908"
        },
        "North Korea [GAZ:00002801]": {
          "text": "North Korea [GAZ:00002801]",
          "meaning": "GAZ:00002801"
        },
        "North Macedonia [GAZ:00006895]": {
          "text": "North Macedonia [GAZ:00006895]",
          "meaning": "GAZ:00006895"
        },
        "North Sea [GAZ:00002284]": {
          "text": "North Sea [GAZ:00002284]",
          "meaning": "GAZ:00002284"
        },
        "Northern Mariana Islands [GAZ:00003958]": {
          "text": "Northern Mariana Islands [GAZ:00003958]",
          "meaning": "GAZ:00003958"
        },
        "Norway [GAZ:00002699]": {
          "text": "Norway [GAZ:00002699]",
          "meaning": "GAZ:00002699"
        },
        "Oman [GAZ:00005283]": {
          "text": "Oman [GAZ:00005283]",
          "meaning": "GAZ:00005283"
        },
        "Pakistan [GAZ:00005246]": {
          "text": "Pakistan [GAZ:00005246]",
          "meaning": "GAZ:00005246"
        },
        "Palau [GAZ:00006905]": {
          "text": "Palau [GAZ:00006905]",
          "meaning": "GAZ:00006905"
        },
        "Panama [GAZ:00002892]": {
          "text": "Panama [GAZ:00002892]",
          "meaning": "GAZ:00002892"
        },
        "Papua New Guinea [GAZ:00003922]": {
          "text": "Papua New Guinea [GAZ:00003922]",
          "meaning": "GAZ:00003922"
        },
        "Paracel Islands [GAZ:00010832]": {
          "text": "Paracel Islands [GAZ:00010832]",
          "meaning": "GAZ:00010832"
        },
        "Paraguay [GAZ:00002933]": {
          "text": "Paraguay [GAZ:00002933]",
          "meaning": "GAZ:00002933"
        },
        "Peru [GAZ:00002932]": {
          "text": "Peru [GAZ:00002932]",
          "meaning": "GAZ:00002932"
        },
        "Philippines [GAZ:00004525]": {
          "text": "Philippines [GAZ:00004525]",
          "meaning": "GAZ:00004525"
        },
        "Pitcairn Islands [GAZ:00005867]": {
          "text": "Pitcairn Islands [GAZ:00005867]",
          "meaning": "GAZ:00005867"
        },
        "Poland [GAZ:00002939]": {
          "text": "Poland [GAZ:00002939]",
          "meaning": "GAZ:00002939"
        },
        "Portugal [GAZ:00004126]": {
          "text": "Portugal [GAZ:00004126]",
          "meaning": "GAZ:00004126"
        },
        "Puerto Rico [GAZ:00006935]": {
          "text": "Puerto Rico [GAZ:00006935]",
          "meaning": "GAZ:00006935"
        },
        "Qatar [GAZ:00005286]": {
          "text": "Qatar [GAZ:00005286]",
          "meaning": "GAZ:00005286"
        },
        "Republic of the Congo [GAZ:00001088]": {
          "text": "Republic of the Congo [GAZ:00001088]",
          "meaning": "GAZ:00001088"
        },
        "Reunion [GAZ:00003945]": {
          "text": "Reunion [GAZ:00003945]",
          "meaning": "GAZ:00003945"
        },
        "Romania [GAZ:00002951]": {
          "text": "Romania [GAZ:00002951]",
          "meaning": "GAZ:00002951"
        },
        "Ross Sea [GAZ:00023304]": {
          "text": "Ross Sea [GAZ:00023304]",
          "meaning": "GAZ:00023304"
        },
        "Russia [GAZ:00002721]": {
          "text": "Russia [GAZ:00002721]",
          "meaning": "GAZ:00002721"
        },
        "Rwanda [GAZ:00001087]": {
          "text": "Rwanda [GAZ:00001087]",
          "meaning": "GAZ:00001087"
        },
        "Saint Helena [GAZ:00000849]": {
          "text": "Saint Helena [GAZ:00000849]",
          "meaning": "GAZ:00000849"
        },
        "Saint Kitts and Nevis [GAZ:00006906]": {
          "text": "Saint Kitts and Nevis [GAZ:00006906]",
          "meaning": "GAZ:00006906"
        },
        "Saint Lucia [GAZ:00006909]": {
          "text": "Saint Lucia [GAZ:00006909]",
          "meaning": "GAZ:00006909"
        },
        "Saint Pierre and Miquelon [GAZ:00003942]": {
          "text": "Saint Pierre and Miquelon [GAZ:00003942]",
          "meaning": "GAZ:00003942"
        },
        "Saint Martin [GAZ:00005841]": {
          "text": "Saint Martin [GAZ:00005841]",
          "meaning": "GAZ:00005841"
        },
        "Saint Vincent and the Grenadines [GAZ:02000565]": {
          "text": "Saint Vincent and the Grenadines [GAZ:02000565]",
          "meaning": "GAZ:02000565"
        },
        "Samoa [GAZ:00006910]": {
          "text": "Samoa [GAZ:00006910]",
          "meaning": "GAZ:00006910"
        },
        "San Marino [GAZ:00003102]": {
          "text": "San Marino [GAZ:00003102]",
          "meaning": "GAZ:00003102"
        },
        "Sao Tome and Principe [GAZ:00006927]": {
          "text": "Sao Tome and Principe [GAZ:00006927]",
          "meaning": "GAZ:00006927"
        },
        "Saudi Arabia [GAZ:00005279]": {
          "text": "Saudi Arabia [GAZ:00005279]",
          "meaning": "GAZ:00005279"
        },
        "Senegal [GAZ:00000913]": {
          "text": "Senegal [GAZ:00000913]",
          "meaning": "GAZ:00000913"
        },
        "Serbia [GAZ:00002957]": {
          "text": "Serbia [GAZ:00002957]",
          "meaning": "GAZ:00002957"
        },
        "Seychelles [GAZ:00006922]": {
          "text": "Seychelles [GAZ:00006922]",
          "meaning": "GAZ:00006922"
        },
        "Sierra Leone [GAZ:00000914]": {
          "text": "Sierra Leone [GAZ:00000914]",
          "meaning": "GAZ:00000914"
        },
        "Singapore [GAZ:00003923]": {
          "text": "Singapore [GAZ:00003923]",
          "meaning": "GAZ:00003923"
        },
        "Sint Maarten [GAZ:00012579]": {
          "text": "Sint Maarten [GAZ:00012579]",
          "meaning": "GAZ:00012579"
        },
        "Slovakia [GAZ:00002956]": {
          "text": "Slovakia [GAZ:00002956]",
          "meaning": "GAZ:00002956"
        },
        "Slovenia [GAZ:00002955]": {
          "text": "Slovenia [GAZ:00002955]",
          "meaning": "GAZ:00002955"
        },
        "Solomon Islands [GAZ:00005275]": {
          "text": "Solomon Islands [GAZ:00005275]",
          "meaning": "GAZ:00005275"
        },
        "Somalia [GAZ:00001104]": {
          "text": "Somalia [GAZ:00001104]",
          "meaning": "GAZ:00001104"
        },
        "South Africa [GAZ:00001094]": {
          "text": "South Africa [GAZ:00001094]",
          "meaning": "GAZ:00001094"
        },
        "South Georgia and the South Sandwich Islands [GAZ:00003990]": {
          "text": "South Georgia and the South Sandwich Islands [GAZ:00003990]",
          "meaning": "GAZ:00003990"
        },
        "South Korea [GAZ:00002802]": {
          "text": "South Korea [GAZ:00002802]",
          "meaning": "GAZ:00002802"
        },
        "South Sudan [GAZ:00233439]": {
          "text": "South Sudan [GAZ:00233439]",
          "meaning": "GAZ:00233439"
        },
        "Spain [GAZ:00003936]": {
          "text": "Spain [GAZ:00003936]",
          "meaning": "GAZ:00003936"
        },
        "Spratly Islands [GAZ:00010831]": {
          "text": "Spratly Islands [GAZ:00010831]",
          "meaning": "GAZ:00010831"
        },
        "Sri Lanka [GAZ:00003924]": {
          "text": "Sri Lanka [GAZ:00003924]",
          "meaning": "GAZ:00003924"
        },
        "State of Palestine [GAZ:00002475]": {
          "text": "State of Palestine [GAZ:00002475]",
          "meaning": "GAZ:00002475"
        },
        "Sudan [GAZ:00000560]": {
          "text": "Sudan [GAZ:00000560]",
          "meaning": "GAZ:00000560"
        },
        "Suriname [GAZ:00002525]": {
          "text": "Suriname [GAZ:00002525]",
          "meaning": "GAZ:00002525"
        },
        "Svalbard [GAZ:00005396]": {
          "text": "Svalbard [GAZ:00005396]",
          "meaning": "GAZ:00005396"
        },
        "Swaziland [GAZ:00001099]": {
          "text": "Swaziland [GAZ:00001099]",
          "meaning": "GAZ:00001099"
        },
        "Sweden [GAZ:00002729]": {
          "text": "Sweden [GAZ:00002729]",
          "meaning": "GAZ:00002729"
        },
        "Switzerland [GAZ:00002941]": {
          "text": "Switzerland [GAZ:00002941]",
          "meaning": "GAZ:00002941"
        },
        "Syria [GAZ:00002474]": {
          "text": "Syria [GAZ:00002474]",
          "meaning": "GAZ:00002474"
        },
        "Taiwan [GAZ:00005341]": {
          "text": "Taiwan [GAZ:00005341]",
          "meaning": "GAZ:00005341"
        },
        "Tajikistan [GAZ:00006912]": {
          "text": "Tajikistan [GAZ:00006912]",
          "meaning": "GAZ:00006912"
        },
        "Tanzania [GAZ:00001103]": {
          "text": "Tanzania [GAZ:00001103]",
          "meaning": "GAZ:00001103"
        },
        "Thailand [GAZ:00003744]": {
          "text": "Thailand [GAZ:00003744]",
          "meaning": "GAZ:00003744"
        },
        "Timor-Leste [GAZ:00006913]": {
          "text": "Timor-Leste [GAZ:00006913]",
          "meaning": "GAZ:00006913"
        },
        "Togo [GAZ:00000915]": {
          "text": "Togo [GAZ:00000915]",
          "meaning": "GAZ:00000915"
        },
        "Tokelau [GAZ:00260188]": {
          "text": "Tokelau [GAZ:00260188]",
          "meaning": "GAZ:00260188"
        },
        "Tonga [GAZ:00006916]": {
          "text": "Tonga [GAZ:00006916]",
          "meaning": "GAZ:00006916"
        },
        "Trinidad and Tobago [GAZ:00003767]": {
          "text": "Trinidad and Tobago [GAZ:00003767]",
          "meaning": "GAZ:00003767"
        },
        "Tromelin Island [GAZ:00005812]": {
          "text": "Tromelin Island [GAZ:00005812]",
          "meaning": "GAZ:00005812"
        },
        "Tunisia [GAZ:00000562]": {
          "text": "Tunisia [GAZ:00000562]",
          "meaning": "GAZ:00000562"
        },
        "Turkey [GAZ:00000558]": {
          "text": "Turkey [GAZ:00000558]",
          "meaning": "GAZ:00000558"
        },
        "Turkmenistan [GAZ:00005018]": {
          "text": "Turkmenistan [GAZ:00005018]",
          "meaning": "GAZ:00005018"
        },
        "Turks and Caicos Islands [GAZ:00003955]": {
          "text": "Turks and Caicos Islands [GAZ:00003955]",
          "meaning": "GAZ:00003955"
        },
        "Tuvalu [GAZ:00009715]": {
          "text": "Tuvalu [GAZ:00009715]",
          "meaning": "GAZ:00009715"
        },
        "United States of America [GAZ:00002459]": {
          "text": "United States of America [GAZ:00002459]",
          "meaning": "GAZ:00002459"
        },
        "Uganda [GAZ:00001102]": {
          "text": "Uganda [GAZ:00001102]",
          "meaning": "GAZ:00001102"
        },
        "Ukraine [GAZ:00002724]": {
          "text": "Ukraine [GAZ:00002724]",
          "meaning": "GAZ:00002724"
        },
        "United Arab Emirates [GAZ:00005282]": {
          "text": "United Arab Emirates [GAZ:00005282]",
          "meaning": "GAZ:00005282"
        },
        "United Kingdom [GAZ:00002637]": {
          "text": "United Kingdom [GAZ:00002637]",
          "meaning": "GAZ:00002637"
        },
        "Uruguay [GAZ:00002930]": {
          "text": "Uruguay [GAZ:00002930]",
          "meaning": "GAZ:00002930"
        },
        "Uzbekistan [GAZ:00004979]": {
          "text": "Uzbekistan [GAZ:00004979]",
          "meaning": "GAZ:00004979"
        },
        "Vanuatu [GAZ:00006918]": {
          "text": "Vanuatu [GAZ:00006918]",
          "meaning": "GAZ:00006918"
        },
        "Venezuela [GAZ:00002931]": {
          "text": "Venezuela [GAZ:00002931]",
          "meaning": "GAZ:00002931"
        },
        "Viet Nam [GAZ:00003756]": {
          "text": "Viet Nam [GAZ:00003756]",
          "meaning": "GAZ:00003756"
        },
        "Virgin Islands [GAZ:00003959]": {
          "text": "Virgin Islands [GAZ:00003959]",
          "meaning": "GAZ:00003959"
        },
        "Wake Island [GAZ:00007111]": {
          "text": "Wake Island [GAZ:00007111]",
          "meaning": "GAZ:00007111"
        },
        "Wallis and Futuna [GAZ:00007191]": {
          "text": "Wallis and Futuna [GAZ:00007191]",
          "meaning": "GAZ:00007191"
        },
        "West Bank [GAZ:00009572]": {
          "text": "West Bank [GAZ:00009572]",
          "meaning": "GAZ:00009572"
        },
        "Western Sahara [GAZ:00000564]": {
          "text": "Western Sahara [GAZ:00000564]",
          "meaning": "GAZ:00000564"
        },
        "Yemen [GAZ:00005284]": {
          "text": "Yemen [GAZ:00005284]",
          "meaning": "GAZ:00005284"
        },
        "Zambia [GAZ:00001107]": {
          "text": "Zambia [GAZ:00001107]",
          "meaning": "GAZ:00001107"
        },
        "Zimbabwe [GAZ:00001106]": {
          "text": "Zimbabwe [GAZ:00001106]",
          "meaning": "GAZ:00001106"
        }
      }
    },
    "library_strategy menu": {
      "name": "library_strategy menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "WGA": {
          "text": "WGA"
        },
        "WGS": {
          "text": "WGS"
        },
        "WXS": {
          "text": "WXS"
        },
        "RNA-Seq": {
          "text": "RNA-Seq"
        },
        "miRNA-Seq": {
          "text": "miRNA-Seq"
        },
        "WCS": {
          "text": "WCS"
        },
        "CLONE": {
          "text": "CLONE"
        },
        "POOLCLONE": {
          "text": "POOLCLONE"
        },
        "AMPLICON": {
          "text": "AMPLICON"
        },
        "CLONEEND": {
          "text": "CLONEEND"
        },
        "FINISHING": {
          "text": "FINISHING"
        },
        "ChIP-Seq": {
          "text": "ChIP-Seq"
        },
        "MNase-Seq": {
          "text": "MNase-Seq"
        },
        "DNase-Hypersensitivity": {
          "text": "DNase-Hypersensitivity"
        },
        "Bisulfite-Seq": {
          "text": "Bisulfite-Seq"
        },
        "Tn-Seq": {
          "text": "Tn-Seq"
        },
        "EST": {
          "text": "EST"
        },
        "FL-cDNA": {
          "text": "FL-cDNA"
        },
        "CTS": {
          "text": "CTS"
        },
        "MRE-Seq": {
          "text": "MRE-Seq"
        },
        "MeDIP-Seq": {
          "text": "MeDIP-Seq"
        },
        "MBD-Seq": {
          "text": "MBD-Seq"
        },
        "OTHER": {
          "text": "OTHER"
        }
      }
    },
    "library_source menu": {
      "name": "library_source menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "GENOMIC": {
          "text": "GENOMIC"
        },
        "TRANSCRIPTOMIC": {
          "text": "TRANSCRIPTOMIC"
        },
        "METAGENOMIC": {
          "text": "METAGENOMIC"
        },
        "METATRANSCRIPTOMIC": {
          "text": "METATRANSCRIPTOMIC"
        },
        "SYNTHETIC": {
          "text": "SYNTHETIC"
        },
        "VIRAL RNA": {
          "text": "VIRAL RNA"
        },
        "OTHER": {
          "text": "OTHER"
        }
      }
    },
    "library_selection menu": {
      "name": "library_selection menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "RANDOM": {
          "text": "RANDOM"
        },
        "PCR": {
          "text": "PCR"
        },
        "RANDOM PCR": {
          "text": "RANDOM PCR"
        },
        "RT-PCR": {
          "text": "RT-PCR"
        },
        "HMPR": {
          "text": "HMPR"
        },
        "MF": {
          "text": "MF"
        },
        "CF-S": {
          "text": "CF-S"
        },
        "CF-M": {
          "text": "CF-M"
        },
        "CF-H": {
          "text": "CF-H"
        },
        "CF-T": {
          "text": "CF-T"
        },
        "MDA": {
          "text": "MDA"
        },
        "MSLL": {
          "text": "MSLL"
        },
        "cDNA": {
          "text": "cDNA"
        },
        "ChIP": {
          "text": "ChIP"
        },
        "MNase": {
          "text": "MNase"
        },
        "DNAse": {
          "text": "DNAse"
        },
        "Hybrid Selection": {
          "text": "Hybrid Selection"
        },
        "Reduced Representation": {
          "text": "Reduced Representation"
        },
        "Restriction Digest": {
          "text": "Restriction Digest"
        },
        "5-methylcytidine antibody": {
          "text": "5-methylcytidine antibody"
        },
        "MBD2 protein methyl-CpG binding domain": {
          "text": "MBD2 protein methyl-CpG binding domain"
        },
        "CAGE": {
          "text": "CAGE"
        },
        "RACE": {
          "text": "RACE"
        },
        "size fractionation": {
          "text": "size fractionation"
        },
        "Padlock probes capture method": {
          "text": "Padlock probes capture method"
        },
        "other": {
          "text": "other"
        },
        "unspecified": {
          "text": "unspecified"
        }
      }
    },
    "library_layout menu": {
      "name": "library_layout menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "single": {
          "text": "single"
        },
        "paired": {
          "text": "paired"
        }
      }
    },
    "filetype menu": {
      "name": "filetype menu",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "permissible_values": {
        "bam": {
          "text": "bam"
        },
        "sra": {
          "text": "sra"
        },
        "kar": {
          "text": "kar"
        },
        "srf": {
          "text": "srf"
        },
        "sff": {
          "text": "sff"
        },
        "fastq": {
          "text": "fastq"
        },
        "tab": {
          "text": "tab"
        },
        "454_native": {
          "text": "454_native"
        },
        "Helicos_native": {
          "text": "Helicos_native"
        },
        "SOLiD_native": {
          "text": "SOLiD_native"
        },
        "PacBio_HDF5": {
          "text": "PacBio_HDF5"
        },
        "CompleteGenomics_native": {
          "text": "CompleteGenomics_native"
        }
      }
    }
  },
  "slots": {
    "specimen collector sample ID": {
      "name": "specimen collector sample ID",
      "description": "The user-defined name for the sample.",
      "title": "specimen collector sample ID",
      "comments": [
        "Every Sample ID from a single submitter must be unique. It can have any format, but we suggest that you make it concise, unique and consistent within your lab, and as informative as possible."
      ],
      "examples": [
        {
          "value": "prov_rona_99"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Sample ID given by the sample provider",
        "GISAID:Sample ID given by the submitting laboratory",
        "NCBI_BIOSAMPLE:sample_name",
        "NCBI_SRA:sample_name",
        "NCBI_Genbank:sample_name",
        "NCBI_Genbank_source_modifiers:Sequence_ID"
      ],
      "slot_uri": "GENEPIO:0001123",
      "range": "xsd:token",
      "required": true
    },
    "umbrella bioproject accession": {
      "name": "umbrella bioproject accession",
      "description": "The INSDC umbrella accession number of the BioProject to which the BioSample belongs.",
      "title": "umbrella bioproject accession",
      "comments": [
        "Required if submission is linked to an umbrella BioProject. An umbrella BioProject links together related BioProjects. A valid BioProject umbrella accession has prefix PRJN, PRJE or PRJD. Your laboratory can have one or many BioProjects."
      ],
      "examples": [
        {
          "value": "PRJNA623807"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001133",
      "range": "xsd:token"
    },
    "bioproject accession": {
      "name": "bioproject accession",
      "description": "The INSDC accession number of the BioProject(s) to which the BioSample belongs.",
      "title": "bioproject accession",
      "comments": [
        "Required if submission is linked to a BioProject. BioProjects are an organizing tool that links together raw sequence data, assemblies, and their associated metadata. A valid BioProject accession has prefix PRJN, PRJE or PRJD, e.g., PRJNA12345 and is created once at the beginning of a new sequencing project. Your laboratory can have one or many BioProjects."
      ],
      "examples": [
        {
          "value": "PRJNA12345"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:bioproject_accession",
        "NCBI_SRA:bioproject_accession",
        "NCBI_Genbank_source_modifiers:BioProject"
      ],
      "slot_uri": "GENEPIO:0001136",
      "range": "xsd:token"
    },
    "biosample accession": {
      "name": "biosample accession",
      "description": "The identifier assigned to a BioSample in INSDC archives.",
      "title": "biosample accession",
      "comments": [
        "Store the accession returned from the BioSample submission. NCBI BioSamples will have the prefix SAMN, while ENA BioSamples will have the prefix SAMEA."
      ],
      "examples": [
        {
          "value": "SAMN14180202"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:biosample_accession",
        "NCBI_Genbank:biosample_accession",
        "NCBI_Genbank_source_modifiers:BioSample"
      ],
      "slot_uri": "GENEPIO:0001139",
      "range": "xsd:token",
      "recommended": true
    },
    "SRA accession": {
      "name": "SRA accession",
      "description": "The Sequence Read Archive (SRA), European Nucleotide Archive (ENA) or DDBJ Sequence Read Archive (DRA) identifier linking raw read data, methodological metadata and quality control metrics submitted to the INSDC.",
      "title": "SRA accession",
      "comments": [
        "Store the accession assigned to the submitted \"run\". NCBI-SRA accessions start with SRR, EBI-ENA runs start with ERR and DRA accessions start with DRR."
      ],
      "examples": [
        {
          "value": "SRR11177792"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001142",
      "range": "xsd:token"
    },
    "GenBank/ENA/DDBJ accession": {
      "name": "GenBank/ENA/DDBJ accession",
      "description": "The GenBank/ENA/DDBJ identifier assigned to the sequence in the INSDC archives.",
      "title": "GenBank/ENA/DDBJ accession",
      "comments": [
        "Store the accession returned from a GenBank/ENA/DDBJ submission (viral genome assembly)."
      ],
      "examples": [
        {
          "value": "MN908947.3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001145",
      "range": "xsd:token"
    },
    "GISAID accession": {
      "name": "GISAID accession",
      "description": "The GISAID accession number assigned to the sequence.",
      "title": "GISAID accession",
      "comments": [
        "Store the accession returned from the GISAID submission."
      ],
      "examples": [
        {
          "value": "EPI_ISL_123456"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:gisaid_accession"
      ],
      "slot_uri": "GENEPIO:0001147",
      "range": "xsd:token"
    },
    "GISAID virus name": {
      "name": "GISAID virus name",
      "description": "The user-defined GISAID virus name assigned to the sequence.",
      "title": "GISAID virus name",
      "comments": [
        "GISAID virus names should be in the format \"hCoV-19/Country/Identifier/year\"."
      ],
      "examples": [
        {
          "value": "hCoV-19/Canada/prov_rona_99/2020"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Virus name",
        "NCBI_BIOSAMPLE:gisaid_virus_name"
      ],
      "slot_uri": "GENEPIO:0100282",
      "range": "xsd:token"
    },
    "host specimen voucher": {
      "name": "host specimen voucher",
      "description": "Identifier for the physical specimen.",
      "title": "host specimen voucher",
      "comments": [
        "Include a URI (Uniform Resource Identifier) in the form of a URL providing a direct link to the physical host specimen. If the specimen was destroyed in the process of analysis, electronic images (e-vouchers) are an adequate substitute for a physical host voucher specimen. If a URI is not available, a museum-provided globally unique identifier (GUID) can be used. If no persistent unique identifier is available, follow the INSDC guidance for populating the voucher_specimen attribute using standard triplets for institution codes (i.e., /specimen_voucher=\"[<institution-code>:[<collection-code>:]]<specimen_id>\"): http://www.insdc.org/controlled-vocabulary-specimenvoucher-qualifier"
      ],
      "examples": [
        {
          "value": "URI example: http://portal.vertnet.org/o/fmnh/mammals?id=33e55cfe-330b-40d9-aaae-8d042cba7542, INSDC triplet example: UAM:Mamm:52179"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_specimen_voucher"
      ],
      "slot_uri": "GENEPIO:0100283",
      "range": "xsd:token"
    },
    "sample collected by": {
      "name": "sample collected by",
      "description": "The name of the organization with which the sample collector is affiliated.",
      "title": "sample collected by",
      "comments": [
        "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multiple submissions."
      ],
      "examples": [
        {
          "value": "Public Health Agency of Canada"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Originating lab",
        "NCBI_BIOSAMPLE:collected_by"
      ],
      "slot_uri": "GENEPIO:0001153",
      "required": true,
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sample collector contact email": {
      "name": "sample collector contact email",
      "description": "The email address of the contact responsible for follow-up regarding the sample.",
      "title": "sample collector contact email",
      "comments": [
        "The email address can represent a specific individual or laboratory."
      ],
      "examples": [
        {
          "value": "johnnyblogs@lab.ca"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001156",
      "range": "xsd:token"
    },
    "sample collector contact address": {
      "name": "sample collector contact address",
      "description": "The mailing address of the agency submitting the sample.",
      "title": "sample collector contact address",
      "comments": [
        "The mailing address should be in the format: Street number and name, City, State/Province/Region, Country, Postal Code/Zip Code"
      ],
      "examples": [
        {
          "value": "655 Lab St, Vancouver, British Columbia, V5N 2A2, Canada"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Address"
      ],
      "slot_uri": "GENEPIO:0001158",
      "range": "xsd:token"
    },
    "sequence submitted by": {
      "name": "sequence submitted by",
      "description": "The name of the agency that generated the sequence.",
      "title": "sequence submitted by",
      "comments": [
        "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multiple submissions."
      ],
      "examples": [
        {
          "value": "Centers for Disease Control and Prevention"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Submitting lab",
        "NCBI_BIOSAMPLE:sequenced_by"
      ],
      "slot_uri": "GENEPIO:0001159",
      "required": true,
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sequence submitter contact email": {
      "name": "sequence submitter contact email",
      "description": "The email address of the contact responsible for follow-up regarding the sequence.",
      "title": "sequence submitter contact email",
      "comments": [
        "The email address can represent a specific individual or laboratory."
      ],
      "examples": [
        {
          "value": "RespLab@lab.ca"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:sequence_submitter_contact_email"
      ],
      "slot_uri": "GENEPIO:0001165",
      "range": "xsd:token"
    },
    "sequence submitter contact address": {
      "name": "sequence submitter contact address",
      "description": "The mailing address of the agency submitting the sequence.",
      "title": "sequence submitter contact address",
      "comments": [
        "The mailing address should be in the format: Street number and name, City, State/Province/Region, Country, Postal Code/Zip Code"
      ],
      "examples": [
        {
          "value": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Address"
      ],
      "slot_uri": "GENEPIO:0001167",
      "range": "xsd:token"
    },
    "sample collection date": {
      "name": "sample collection date",
      "description": "The date on which the sample was collected.",
      "title": "sample collection date",
      "comments": [
        "Record the collection date accurately in the template. Required granularity includes year, month and day. Before sharing this data, ensure this date is not considered identifiable information. If this date is considered identifiable, it is acceptable to add \"jitter\" to the collection date by adding or subtracting calendar days. Do not change the collection date in your original records. Alternatively, ”received date” may be used as a substitute in the data you share. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-19"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Collection date",
        "NCBI_BIOSAMPLE:collection_date",
        "NCBI_Genbank_source_modifiers:collection-date"
      ],
      "slot_uri": "GENEPIO:0001174",
      "required": true,
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sample received date": {
      "name": "sample received date",
      "description": "The date on which the sample was received.",
      "title": "sample received date",
      "comments": [
        "The date the sample was received by a lab that was not the point of collection. ISO 8601 standard \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-20"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001179",
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "geo_loc name (country)": {
      "name": "geo_loc name (country)",
      "description": "The country of origin of the sample.",
      "title": "geo_loc name (country)",
      "comments": [
        "Provide the country name from the pick list in the template"
      ],
      "examples": [
        {
          "value": "South Africa [GAZ:00001094]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Location",
        "NCBI_BIOSAMPLE:geo_loc_name",
        "NCBI_Genbank_source_modifiers:country"
      ],
      "slot_uri": "GENEPIO:0001181",
      "required": true,
      "any_of": [
        {
          "range": "geo_loc name (country) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "geo_loc name (state/province/territory)": {
      "name": "geo_loc name (state/province/territory)",
      "description": "The state/province/territory of origin of the sample.",
      "title": "geo_loc name (state/province/territory)",
      "comments": [
        "Provide the state/province/territory name from the GAZ geography ontology. Search for geography terms here: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "Western Cape"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:geo_loc_name"
      ],
      "slot_uri": "GENEPIO:0001185",
      "required": true,
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "geo_loc name (county/region)": {
      "name": "geo_loc name (county/region)",
      "description": "The county/region of origin of the sample.",
      "title": "geo_loc name (county/region)",
      "comments": [
        "Provide the county/region name from the GAZ geography ontology. Search for geography terms here: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "Derbyshire"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:geo_loc_name"
      ],
      "slot_uri": "GENEPIO:0100280",
      "range": "xsd:token"
    },
    "geo_loc name (city)": {
      "name": "geo_loc name (city)",
      "description": "The city of origin of the sample.",
      "title": "geo_loc name (city)",
      "comments": [
        "Provide the city name from the GAZ geography ontology. Search for geography terms here: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "Vancouver"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:geo_loc_name"
      ],
      "slot_uri": "GENEPIO:0001189",
      "range": "xsd:token"
    },
    "geo_loc latitude": {
      "name": "geo_loc latitude",
      "description": "The latitude coordinates of the geographical location of sample collection.",
      "title": "geo_loc latitude",
      "comments": [
        "Provide latitude coordinates if available. Do not use the centre of the city/region/province/state/country or the location of your agency as a proxy, as this implicates a real location and is misleading. Specify as degrees latitude in format \"d[d.dddd] N|S\"."
      ],
      "examples": [
        {
          "value": "38.98 N"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:lat_lon"
      ],
      "slot_uri": "GENEPIO:0100309",
      "range": "xsd:token"
    },
    "geo_loc longitude": {
      "name": "geo_loc longitude",
      "description": "The longitude coordinates of the geographical location of sample collection.",
      "title": "geo_loc longitude",
      "comments": [
        "Provide longitude coordinates if available. Do not use the centre of the city/region/province/state/country or the location of your agency as a proxy, as this implicates a real location and is misleading. Specify as degrees longitude in format \"d[dd.dddd] W|E\"."
      ],
      "examples": [
        {
          "value": "77.11 W"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:lat_lon"
      ],
      "slot_uri": "GENEPIO:0100310",
      "range": "xsd:token"
    },
    "organism": {
      "name": "organism",
      "description": "Taxonomic name of the organism.",
      "title": "organism",
      "comments": [
        "Select \"Severe acute respiratory syndrome coronavirus 2\" if sequencing SARS-CoV-2. If another Coronaviridae is being sequenced, provide the taxonomic name from NCBITaxon. Search for taxonomy terms at https://www.ebi.ac.uk/ols/ontologies/ncbitaxon."
      ],
      "examples": [
        {
          "value": "Severe acute respiratory syndrome coronavirus 2 [NCBITaxon:2697049]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:organism"
      ],
      "slot_uri": "GENEPIO:0001191",
      "required": true,
      "any_of": [
        {
          "range": "organism menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "isolate": {
      "name": "isolate",
      "description": "Identifier of the specific isolate.",
      "title": "isolate",
      "comments": [
        "This identifier should be an unique, indexed, alpha-numeric ID within your laboratory. If submitted to the INSDC, the \"isolate\" name is propagated throughtout different databases. As such, structure the \"isolate\" name to be ICTV/INSDC compliant in the following format: \"SARS-CoV-2/host/country/sampleID/date\"."
      ],
      "examples": [
        {
          "value": "SARS-CoV-2/human/USA/CA-CDPH-001/2020"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:isolate",
        "NCBI_Genbank_source_modifiers:isolate"
      ],
      "slot_uri": "GENEPIO:0001644",
      "required": true,
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "culture collection": {
      "name": "culture collection",
      "description": "The name of the source collection and unique culture identifier.",
      "title": "culture collection",
      "comments": [
        "Format: \"<institution-code>:[<collection-code>:]<culture_id>\". For more information, see http://www.insdc.org/controlled-vocabulary-culturecollection-qualifier."
      ],
      "examples": [
        {
          "value": "/culture_collection=\"ATCC:26370\""
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100284",
      "range": "xsd:token"
    },
    "purpose of sampling": {
      "name": "purpose of sampling",
      "description": "The reason that the sample was collected.",
      "title": "purpose of sampling",
      "comments": [
        "Select a value from the pick list in the template."
      ],
      "examples": [
        {
          "value": "Diagnostic testing [GENEPIO:0100002]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:purpose_of_sampling"
      ],
      "slot_uri": "GENEPIO:0001198",
      "recommended": true,
      "any_of": [
        {
          "range": "purpose of sampling menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "purpose of sampling details": {
      "name": "purpose of sampling details",
      "description": "Further details pertaining to the reason the sample was collected.",
      "title": "purpose of sampling details",
      "comments": [
        "Provide a free text description of the sampling strategy or samples collected."
      ],
      "examples": [
        {
          "value": "Screening of bat specimens in museum collections."
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001200",
      "range": "xsd:token"
    },
    "sample plan name": {
      "name": "sample plan name",
      "description": "The name of the sample plan implemented for sample collection.",
      "title": "sample plan name",
      "comments": [
        "Provide the name and version of the sample plan outlining the sample strategy."
      ],
      "examples": [
        {
          "value": "CanCOGeN Sampling Strategy 1.0"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100285",
      "range": "xsd:token"
    },
    "sample collected in quarantine": {
      "name": "sample collected in quarantine",
      "description": "Whether the sample was collected from an individual in quarantine.",
      "title": "sample collected in quarantine",
      "comments": [
        "Whether a sample was collected under quarantine conditions (e.g. self-quarantining, medically isolated, staying at a quarantine hotel) can inform public health measure assessments. Use the picklist provided in the template."
      ],
      "examples": [
        {
          "value": "Yes [NCIT:C49488]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100277",
      "any_of": [
        {
          "range": "sample collected in quarantine menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "anatomical material": {
      "name": "anatomical material",
      "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
      "title": "anatomical material",
      "comments": [
        "Provide a descriptor if an anatomical material was sampled. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/uberon. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Blood [UBERON:0000178]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:host_anatomical_material",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001211",
      "multivalued": true,
      "any_of": [
        {
          "range": "anatomical material menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "anatomical part": {
      "name": "anatomical part",
      "description": "An anatomical part of an organism e.g. oropharynx.",
      "title": "anatomical part",
      "comments": [
        "Provide a descriptor if an anatomical part was sampled. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/uberon. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Nasopharynx (NP) [UBERON:0001728]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:host_anatomical_part",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001214",
      "multivalued": true,
      "any_of": [
        {
          "range": "anatomical part menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "body product": {
      "name": "body product",
      "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
      "title": "body product",
      "comments": [
        "Provide a descriptor if a body product was sampled. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/uberon. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Feces [UBERON:0001988]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:host_body_product",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001216",
      "multivalued": true,
      "any_of": [
        {
          "range": "body product menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "environmental material": {
      "name": "environmental material",
      "description": "A substance obtained from the natural or man-made environment e.g. soil, water, sewage, door handle, bed handrail, face mask.",
      "title": "environmental material",
      "comments": [
        "Provide a descriptor if an environmental material was sampled. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/envo. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Face mask [OBI:0002787]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:environmental_material",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001223",
      "multivalued": true,
      "any_of": [
        {
          "range": "environmental material menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "environmental site": {
      "name": "environmental site",
      "description": "An environmental location may describe a site in the natural or built environment e.g. hospital, wet market, bat cave.",
      "title": "environmental site",
      "comments": [
        "Provide a descriptor if an environmental site was sampled. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/envo. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Hospital [ENVO:00002173]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:environmental_site",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001232",
      "multivalued": true,
      "any_of": [
        {
          "range": "environmental site menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "collection device": {
      "name": "collection device",
      "description": "The instrument or container used to collect the sample e.g. swab.",
      "title": "collection device",
      "comments": [
        "Provide a descriptor if a collection device was used for sampling. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/obi. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Swab [GENEPIO:0100027]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:collection_device",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001234",
      "multivalued": true,
      "any_of": [
        {
          "range": "collection device menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "collection method": {
      "name": "collection method",
      "description": "The process used to collect the sample e.g. phlebotomy, necropsy.",
      "title": "collection method",
      "comments": [
        "Provide a descriptor if a collection method was used for sampling. Use the pick list provided in the template. If a desired term is missing from the pick list, use this look-up service to identify a standardized term: https://www.ebi.ac.uk/ols/ontologies/obi. If not applicable, leave blank."
      ],
      "examples": [
        {
          "value": "Bronchoalveolar lavage (BAL) [GENEPIO:0100032]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Specimen source",
        "NCBI_BIOSAMPLE:isolation_source",
        "NCBI_BIOSAMPLE:collection_method",
        "NCBI_Genbank_source_modifiers:isolation-source"
      ],
      "slot_uri": "GENEPIO:0001241",
      "multivalued": true,
      "any_of": [
        {
          "range": "collection method menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "collection protocol": {
      "name": "collection protocol",
      "description": "The name and version of a particular protocol used for sampling.",
      "title": "collection protocol",
      "comments": [
        "Provide the name and version of the protocol used to collect the samples."
      ],
      "examples": [
        {
          "value": "SC2SamplingProtocol 1.2"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001243",
      "range": "xsd:token"
    },
    "specimen processing": {
      "name": "specimen processing",
      "description": "Any processing applied to the sample during or after receiving the sample.",
      "title": "specimen processing",
      "comments": [
        "Critical for interpreting data. Select all the applicable processes from the pick list. If virus was passaged, include information in \"lab host\", \"passage number\", and \"passage method\" fields. If none of the processes in the pick list apply, put \"not applicable\"."
      ],
      "examples": [
        {
          "value": "Virus passage [GENEPIO:0100039]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001253",
      "multivalued": true,
      "recommended": true,
      "any_of": [
        {
          "range": "specimen processing menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "specimen processing details": {
      "name": "specimen processing details",
      "description": "Detailed information regarding the processing applied to a sample during or after receiving the sample.",
      "title": "specimen processing details",
      "comments": [
        "Provide a free text description of any processing details applied to a sample."
      ],
      "examples": [
        {
          "value": "25 swabs were pooled and further prepared as a single sample during library prep."
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100311",
      "range": "xsd:token"
    },
    "lab host": {
      "name": "lab host",
      "description": "Name and description of the laboratory host used to propagate the source organism or material from which the sample was obtained.",
      "title": "lab host",
      "comments": [
        "Type of cell line used for propagation. Select a value form the pick list. If not passaged, put \"not applicable\"."
      ],
      "examples": [
        {
          "value": "Vero E6 cell line [BTO:0004755]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001255",
      "any_of": [
        {
          "range": "lab host menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "passage number": {
      "name": "passage number",
      "description": "Number of passages.",
      "title": "passage number",
      "comments": [
        "Provide number of known passages. If not passaged, put \"not applicable\""
      ],
      "examples": [
        {
          "value": "3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:passage_number"
      ],
      "slot_uri": "GENEPIO:0001261",
      "range": "integer",
      "minimum_value": 0
    },
    "passage method": {
      "name": "passage method",
      "description": "Description of how organism was passaged.",
      "title": "passage method",
      "comments": [
        "Free text. Provide a short description. If not passaged, put \"not applicable\"."
      ],
      "examples": [
        {
          "value": "AVL buffer+30%EtOH lysate received from Respiratory Lab. P3 passage in Vero-1 via bioreactor large-scale batch passage. P3 batch derived from the SP-2/reference lab strain."
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:passage_method"
      ],
      "slot_uri": "GENEPIO:0001264",
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "biomaterial extracted": {
      "name": "biomaterial extracted",
      "description": "The biomaterial extracted from samples for the purpose of sequencing.",
      "title": "biomaterial extracted",
      "comments": [
        "Provide the biomaterial extracted from the pick list in the template."
      ],
      "examples": [
        {
          "value": "RNA (Total) [OBI:0000895]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001266",
      "any_of": [
        {
          "range": "biomaterial extracted menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "data abstraction details": {
      "name": "data abstraction details",
      "description": "A description of how any data elements were altered to preserve patient privacy.",
      "title": "data abstraction details",
      "comments": [
        "If applicable, provide a description of how each data element was abstracted."
      ],
      "examples": [
        {
          "value": "Jitter added to publicly shared collection dates to prevent re-identifiability."
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100278",
      "range": "xsd:token"
    },
    "host (common name)": {
      "name": "host (common name)",
      "description": "The commonly used name of the host.",
      "title": "host (common name)",
      "comments": [
        "Common name or scientific name are required if there was a host. Common name examples e.g. human, bat. Select a value from the pick list. If the sample was environmental, put \"not applicable\"."
      ],
      "examples": [
        {
          "value": "Human [NCBITaxon:9606]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001386",
      "any_of": [
        {
          "range": "host (common name) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host (scientific name)": {
      "name": "host (scientific name)",
      "description": "The taxonomic, or scientific name of the host.",
      "title": "host (scientific name)",
      "comments": [
        "Common name or scientific name are required if there was a host. Scientific name examples e.g. Homo sapiens. Select a value from the pick list. If the sample was environmental, put \"not applicable\"."
      ],
      "examples": [
        {
          "value": "Homo sapiens [NCBITaxon:9606]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Host",
        "NCBI_BIOSAMPLE:host",
        "NCBI_Genbank_source_modifiers:host"
      ],
      "slot_uri": "GENEPIO:0001387",
      "required": true,
      "any_of": [
        {
          "range": "host (scientific name) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host health state": {
      "name": "host health state",
      "description": "Health status of the host at the time of sample collection.",
      "title": "host health state",
      "comments": [
        "If known, select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Asymptomatic [NCIT:C3833]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Patient status",
        "NCBI_BIOSAMPLE:host_health_state"
      ],
      "slot_uri": "GENEPIO:0001388",
      "any_of": [
        {
          "range": "host health state menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host health status details": {
      "name": "host health status details",
      "description": "Further details pertaining to the health or disease status of the host at time of collection.",
      "title": "host health status details",
      "comments": [
        "If known, select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Hospitalized (ICU) [GENEPIO:0100046]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001389",
      "any_of": [
        {
          "range": "host health status details menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host disease": {
      "name": "host disease",
      "description": "The name of the disease experienced by the host.",
      "title": "host disease",
      "comments": [
        "This field is only required if there was a host. If the host was a human select COVID-19 from the pick list. If the host was asymptomatic, this can be recorded under “host health state details”. \"COVID-19\" should still be provided if patient is asymptomatic. If the host is not human, and the disease state is not known or the host appears healthy, put “not applicable”."
      ],
      "examples": [
        {
          "value": "COVID-19 [MONDO:0100096]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_disease"
      ],
      "slot_uri": "GENEPIO:0001391",
      "required": true,
      "any_of": [
        {
          "range": "host disease menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host health outcome": {
      "name": "host health outcome",
      "description": "Disease outcome in the host.",
      "title": "host health outcome",
      "comments": [
        "If known, select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Recovered [NCIT:C49498]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_disease_outcome"
      ],
      "slot_uri": "GENEPIO:0001390",
      "any_of": [
        {
          "range": "host health outcome menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host age": {
      "name": "host age",
      "description": "Age of host at the time of sampling.",
      "title": "host age",
      "comments": [
        "If known, provide age. Age-binning is also acceptable."
      ],
      "examples": [
        {
          "value": "79"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Patient age",
        "NCBI_BIOSAMPLE:host_age"
      ],
      "slot_uri": "GENEPIO:0001392",
      "recommended": true,
      "maximum_value": 130,
      "any_of": [
        {
          "range": "decimal"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host age unit": {
      "name": "host age unit",
      "description": "The units used to measure the host's age.",
      "title": "host age unit",
      "comments": [
        "If known, provide the age units used to measure the host's age from the pick list."
      ],
      "examples": [
        {
          "value": "year [UO:0000036]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001393",
      "recommended": true,
      "any_of": [
        {
          "range": "host age unit menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host age bin": {
      "name": "host age bin",
      "description": "The age category of the host at the time of sampling.",
      "title": "host age bin",
      "comments": [
        "Age bins in 10 year intervals have been provided. If a host's age cannot be specified due to provacy concerns, an age bin can be used as an alternative."
      ],
      "examples": [
        {
          "value": "50 - 59 [GENEPIO:0100054]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001394",
      "recommended": true,
      "any_of": [
        {
          "range": "host age bin menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host gender": {
      "name": "host gender",
      "description": "The gender of the host at the time of sample collection.",
      "title": "host gender",
      "comments": [
        "If known, select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Male [NCIT:C46109]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Gender",
        "NCBI_BIOSAMPLE:host_sex"
      ],
      "slot_uri": "GENEPIO:0001395",
      "recommended": true,
      "any_of": [
        {
          "range": "host gender menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host residence geo_loc name (country)": {
      "name": "host residence geo_loc name (country)",
      "description": "The country where the host resides.",
      "title": "host residence geo_loc name (country)",
      "comments": [
        "If known, select a value from the pick list."
      ],
      "examples": [
        {
          "value": "South Africa [GAZ:00001094]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001396",
      "any_of": [
        {
          "range": "geo_loc_name (country) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host ethnicity": {
      "name": "host ethnicity",
      "description": "The self-identified ethnicity(ies) of the host.",
      "title": "host ethnicity",
      "comments": [
        "If known, provide the self-identified ethnicity or ethnicities of the host as a free text description. This is highly sensitive information which must be treated respectfully and carefully when sharing. The information may have implications for equitable access and benefit sharing. Consult your privacy officer, data steward and/or cultural services representative."
      ],
      "examples": [
        {
          "value": "Indigenous, European"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100312",
      "range": "xsd:token"
    },
    "host subject ID": {
      "name": "host subject ID",
      "description": "A unique identifier by which each host can be referred to e.g. #131",
      "title": "host subject ID",
      "comments": [
        "Should be a unique, user-defined identifier. This ID can help link laboratory data with epidemiological data, however, is likely sensitive information. Consult the data steward."
      ],
      "examples": [
        {
          "value": "BCxy123"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_subject_id"
      ],
      "slot_uri": "GENEPIO:0001398",
      "range": "xsd:token"
    },
    "case ID": {
      "name": "case ID",
      "description": "The identifier used to specify an epidemiologically detected case of disease.",
      "title": "case ID",
      "comments": [
        "Provide the case identifer. The case ID greatly facilitates linkage between laboratory and epidemiological data. The case ID may be considered identifiable information. Consult the data steward before sharing."
      ],
      "examples": [
        {
          "value": "ABCD1234"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100281",
      "range": "xsd:token"
    },
    "symptom onset date": {
      "name": "symptom onset date",
      "description": "The date on which the symptoms began or were first noted.",
      "title": "symptom onset date",
      "comments": [
        "If known, provide the symptom onset date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-16"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001399",
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "signs and symptoms": {
      "name": "signs and symptoms",
      "description": "A perceived change in function or sensation, (loss, disturbance or appearance) indicative of a disease, reported by a patient.",
      "title": "signs and symptoms",
      "comments": [
        "Select all of the symptoms experienced by the host from the pick list."
      ],
      "examples": [
        {
          "value": "Cough [HP:0012735], Fever [HP:0001945],  Rigors (fever shakes) [HP:0025145]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001400",
      "multivalued": true,
      "any_of": [
        {
          "range": "signs and symptoms menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "pre-existing conditions and risk factors": {
      "name": "pre-existing conditions and risk factors",
      "description": "Patient pre-existing conditions and risk factors.\nPre-existing condition: A medical condition that existed prior to the current infection.\nRisk Factor: A variable associated with an increased risk of disease or infection.",
      "title": "pre-existing conditions and risk factors",
      "comments": [
        "Select all of the pre-existing conditions and risk factors experienced by the host from the pick list. If the desired term is missing, contact the curation team."
      ],
      "examples": [
        {
          "value": "Asthma [HP:0002099]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001401",
      "multivalued": true,
      "any_of": [
        {
          "range": "pre-existing conditions and risk factors menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "complications": {
      "name": "complications",
      "description": "Patient medical complications that are believed to have occurred as a result of host disease.",
      "title": "complications",
      "comments": [
        "Select all of the complications experienced by the host from the pick list."
      ],
      "examples": [
        {
          "value": "Acute respiratory failure [MONDO:0001208]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001402",
      "multivalued": true,
      "any_of": [
        {
          "range": "complications menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host vaccination status": {
      "name": "host vaccination status",
      "description": "The vaccination status of the host (fully vaccinated, partially vaccinated, or not vaccinated).",
      "title": "host vaccination status",
      "comments": [
        "Select the vaccination status of the host from the pick list."
      ],
      "examples": [
        {
          "value": "Fully Vaccinated [GENEPIO:0100100]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:prior_sars_cov_2_vaccination"
      ],
      "slot_uri": "GENEPIO:0001404",
      "any_of": [
        {
          "range": "host vaccination status menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "number of vaccine doses received": {
      "name": "number of vaccine doses received",
      "description": "The number of doses of the vaccine received by the host.",
      "title": "number of vaccine doses received",
      "comments": [
        "Record how many doses of the vaccine the host has received."
      ],
      "examples": [
        {
          "value": "2"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001406",
      "range": "integer",
      "minimum_value": 0
    },
    "vaccination dose 1 vaccine name": {
      "name": "vaccination dose 1 vaccine name",
      "description": "The name of the vaccine administered as the first dose of a vaccine regimen.",
      "title": "vaccination dose 1 vaccine name",
      "comments": [
        "Provide the name and the corresponding manufacturer of the COVID-19 vaccine administered as the first dose by selecting a value from the pick list"
      ],
      "examples": [
        {
          "value": "Pfizer-BioNTech (Comirnaty)"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100313",
      "range": "xsd:token"
    },
    "vaccination dose 1 vaccination date": {
      "name": "vaccination dose 1 vaccination date",
      "description": "The date the first dose of a vaccine was administered.",
      "title": "vaccination dose 1 vaccination date",
      "comments": [
        "Provide the date the first dose of COVID-19 vaccine was administered. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-03-01"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100314",
      "range": "date"
    },
    "vaccination dose 2 vaccine name": {
      "name": "vaccination dose 2 vaccine name",
      "description": "The name of the vaccine administered as the second dose of a vaccine regimen.",
      "title": "vaccination dose 2 vaccine name",
      "comments": [
        "Provide the name and the corresponding manufacturer of the COVID-19 vaccine administered as the second dose by selecting a value from the pick list"
      ],
      "examples": [
        {
          "value": "Pfizer-BioNTech (Comirnaty)"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100315",
      "range": "xsd:token"
    },
    "vaccination dose 2 vaccination date": {
      "name": "vaccination dose 2 vaccination date",
      "description": "The date the second dose of a vaccine was administered.",
      "title": "vaccination dose 2 vaccination date",
      "comments": [
        "Provide the date the second dose of COVID-19 vaccine was administered. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-09-01"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100316",
      "range": "date"
    },
    "vaccination dose 3 vaccine name": {
      "name": "vaccination dose 3 vaccine name",
      "description": "The name of the vaccine administered as the third dose of a vaccine regimen.",
      "title": "vaccination dose 3 vaccine name",
      "comments": [
        "Provide the name and the corresponding manufacturer of the COVID-19 vaccine administered as the third dose by selecting a value from the pick list"
      ],
      "examples": [
        {
          "value": "Pfizer-BioNTech (Comirnaty)"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100317",
      "range": "xsd:token"
    },
    "vaccination dose 3 vaccination date": {
      "name": "vaccination dose 3 vaccination date",
      "description": "The date the third dose of a vaccine was administered.",
      "title": "vaccination dose 3 vaccination date",
      "comments": [
        "Provide the date the third dose of COVID-19 vaccine was administered. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-12-30"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:date_of_sars_cov_2_vaccination"
      ],
      "slot_uri": "GENEPIO:0100318",
      "range": "date"
    },
    "vaccination dose 4 vaccine name": {
      "name": "vaccination dose 4 vaccine name",
      "description": "The name of the vaccine administered as the fourth dose of a vaccine regimen.",
      "title": "vaccination dose 4 vaccine name",
      "comments": [
        "Provide the name and the corresponding manufacturer of the COVID-19 vaccine administered as the fourth dose by selecting a value from the pick list"
      ],
      "examples": [
        {
          "value": "Pfizer-BioNTech (Comirnaty)"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100319",
      "range": "xsd:token"
    },
    "vaccination dose 4 vaccination date": {
      "name": "vaccination dose 4 vaccination date",
      "description": "The date the fourth dose of a vaccine was administered.",
      "title": "vaccination dose 4 vaccination date",
      "comments": [
        "Provide the date the fourth dose of COVID-19 vaccine was administered. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2022-01-15"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0100320",
      "range": "date"
    },
    "vaccination history": {
      "name": "vaccination history",
      "description": "A description of the vaccines received and the administration dates of a series of vaccinations against a specific disease or a set of diseases.",
      "title": "vaccination history",
      "comments": [
        "Free text description of the dates and vaccines administered against a particular disease/set of diseases. It is also acceptable to concatenate the individual dose information (vaccine name, vaccination date) separated by semicolons."
      ],
      "examples": [
        {
          "value": "Pfizer-BioNTech (Comirnaty)"
        },
        {
          "value": " 2021-03-01"
        },
        {
          "value": " Pfizer-BioNTech (Comirnaty)"
        },
        {
          "value": " 2022-01-15"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Last vaccinated"
      ],
      "slot_uri": "GENEPIO:0100321",
      "range": "xsd:token"
    },
    "location of exposure geo_loc name (country)": {
      "name": "location of exposure geo_loc name (country)",
      "description": "The country where the host was likely exposed to the causative agent of the illness.",
      "title": "location of exposure geo_loc name (country)",
      "comments": [
        "This location pertains to the country the host was believed to be exposed, and may not be the same as the host's country of residence. If known, provide the country name from the pick list."
      ],
      "examples": [
        {
          "value": "South Africa [GAZ:00001094]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:geo_loc_exposure"
      ],
      "slot_uri": "GENEPIO:0001410",
      "any_of": [
        {
          "range": "geo_loc_name (country) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "destination of most recent travel (city)": {
      "name": "destination of most recent travel (city)",
      "description": "The name of the city that was the destination of most recent travel.",
      "title": "destination of most recent travel (city)",
      "comments": [
        "Provide the name of the city that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "New York City"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_recent_travel_loc"
      ],
      "slot_uri": "GENEPIO:0001411",
      "range": "xsd:token"
    },
    "destination of most recent travel (state/province/territory)": {
      "name": "destination of most recent travel (state/province/territory)",
      "description": "The name of the province that was the destination of most recent travel.",
      "title": "destination of most recent travel (state/province/territory)",
      "comments": [
        "Provide the name of the state/province/territory that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "California"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_recent_travel_loc"
      ],
      "slot_uri": "GENEPIO:0001412",
      "range": "xsd:token"
    },
    "destination of most recent travel (country)": {
      "name": "destination of most recent travel (country)",
      "description": "The name of the country that was the destination of most recent travel.",
      "title": "destination of most recent travel (country)",
      "comments": [
        "Provide the name of the country that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "United Kingdom [GAZ:00002637]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_recent_travel_loc"
      ],
      "slot_uri": "GENEPIO:0001413",
      "any_of": [
        {
          "range": "geo_loc_name (country) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "most recent travel departure date": {
      "name": "most recent travel departure date",
      "description": "The date of a person's most recent departure from their primary residence (at that time) on a journey to one or more other locations.",
      "title": "most recent travel departure date",
      "comments": [
        "Provide the travel departure date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-16"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001414",
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "most recent travel return date": {
      "name": "most recent travel return date",
      "description": "The date of a person's most recent return to some residence from a journey originating at that residence.",
      "title": "most recent travel return date",
      "comments": [
        "Provide the travel return date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-04-26"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:host_recent_travel_return_date"
      ],
      "slot_uri": "GENEPIO:0001415",
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "travel history": {
      "name": "travel history",
      "description": "Travel history in last six months.",
      "title": "travel history",
      "comments": [
        "Specify the countries (and more granular locations if known) travelled in the last six months; can include multiple travels. Separate multiple travel events with a semicolon. Provide as free text."
      ],
      "examples": [
        {
          "value": "Canada, Vancouver"
        },
        {
          "value": " USA, Seattle"
        },
        {
          "value": " Italy, Milan"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001416",
      "range": "xsd:token"
    },
    "exposure event": {
      "name": "exposure event",
      "description": "Event leading to exposure.",
      "title": "exposure event",
      "comments": [
        "If known, select the exposure event from the pick list."
      ],
      "examples": [
        {
          "value": "Mass Gathering [GENEPIO:0100237]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Additional location information",
        "NCBI_BIOSAMPLE:exposure_event"
      ],
      "slot_uri": "GENEPIO:0001417",
      "any_of": [
        {
          "range": "exposure event menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "exposure contact level": {
      "name": "exposure contact level",
      "description": "The exposure transmission contact type.",
      "title": "exposure contact level",
      "comments": [
        "Select direct or indirect exposure from the pick list."
      ],
      "examples": [
        {
          "value": "Direct (human-to-human contact) [TRANS:0000001]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001418",
      "any_of": [
        {
          "range": "exposure contact level menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "host role": {
      "name": "host role",
      "description": "The role of the host in relation to the exposure setting.",
      "title": "host role",
      "comments": [
        "Select the host's personal role(s) from the pick list provided in the template. If the desired term is missing, contact the curation team."
      ],
      "examples": [
        {
          "value": "Patient [OMRSE:00000030]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Additional host information"
      ],
      "slot_uri": "GENEPIO:0001419",
      "multivalued": true,
      "range": "host role menu"
    },
    "exposure setting": {
      "name": "exposure setting",
      "description": "The setting leading to exposure.",
      "title": "exposure setting",
      "comments": [
        "Select the host exposure setting(s) from the pick list provided in the template. If a desired term is missing, contact the curation team."
      ],
      "examples": [
        {
          "value": "Healthcare Setting [GENEPIO:0100201]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Additional host information"
      ],
      "slot_uri": "GENEPIO:0001428",
      "multivalued": true,
      "range": "exposure setting menu"
    },
    "exposure details": {
      "name": "exposure details",
      "description": "Additional host exposure information.",
      "title": "exposure details",
      "comments": [
        "Free text description of the exposure."
      ],
      "examples": [
        {
          "value": "Host role - Other: Bus Driver"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001431",
      "range": "xsd:token"
    },
    "prior SARS-CoV-2 infection": {
      "name": "prior SARS-CoV-2 infection",
      "description": "Whether there was prior SARS-CoV-2 infection.",
      "title": "prior SARS-CoV-2 infection",
      "comments": [
        "If known, provide infromation about whether the individual had a previous SARS-CoV-2 infection. Select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Prior infection [GENEPIO:0100234]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:prior_sars_cov_2_infection"
      ],
      "slot_uri": "GENEPIO:0001435",
      "any_of": [
        {
          "range": "prior SARS-CoV-2 infection menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "prior SARS-CoV-2 infection isolate": {
      "name": "prior SARS-CoV-2 infection isolate",
      "description": "The identifier of the isolate found in the prior SARS-CoV-2 infection.",
      "title": "prior SARS-CoV-2 infection isolate",
      "comments": [
        "Provide the isolate name of the most recent prior infection. Structure the \"isolate\" name to be ICTV/INSDC compliant in the following format: \"SARS-CoV-2/host/country/sampleID/date\"."
      ],
      "examples": [
        {
          "value": "SARS-CoV-2/human/USA/CA-CDPH-001/2020"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:virus_isolate_of_prior_infection"
      ],
      "slot_uri": "GENEPIO:0001436",
      "range": "xsd:token"
    },
    "prior SARS-CoV-2 infection date": {
      "name": "prior SARS-CoV-2 infection date",
      "description": "The date of diagnosis of the prior SARS-CoV-2 infection.",
      "title": "prior SARS-CoV-2 infection date",
      "comments": [
        "Provide the date that the most recent prior infection was diagnosed. Provide the prior SARS-CoV-2 infection date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-01-23"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:date_of_prior_sars_cov_2_infection"
      ],
      "slot_uri": "GENEPIO:0001437",
      "range": "date"
    },
    "prior SARS-CoV-2 antiviral treatment": {
      "name": "prior SARS-CoV-2 antiviral treatment",
      "description": "Whether there was prior SARS-CoV-2 treatment with an antiviral agent.",
      "title": "prior SARS-CoV-2 antiviral treatment",
      "comments": [
        "If known, provide infromation about whether the individual had a previous SARS-CoV-2 antiviral treatment. Select a value from the pick list."
      ],
      "examples": [
        {
          "value": "Prior antiviral treatment [GENEPIO:0100037]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:prior_sars_cov_2_antiviral_treat"
      ],
      "slot_uri": "GENEPIO:0001438",
      "any_of": [
        {
          "range": "prior SARS-CoV-2 antiviral treatment menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "prior SARS-CoV-2 antiviral treatment agent": {
      "name": "prior SARS-CoV-2 antiviral treatment agent",
      "description": "The name of the antiviral treatment agent administered during the prior SARS-CoV-2 infection.",
      "title": "prior SARS-CoV-2 antiviral treatment agent",
      "comments": [
        "Provide the name of the antiviral treatment agent administered during the most recent prior infection. If no treatment was administered, put \"No treatment\". If multiple antiviral agents were administered, list them all separated by commas."
      ],
      "examples": [
        {
          "value": "Remdesivir"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:antiviral_treatment_agent"
      ],
      "slot_uri": "GENEPIO:0001439",
      "range": "xsd:token"
    },
    "prior SARS-CoV-2 antiviral treatment date": {
      "name": "prior SARS-CoV-2 antiviral treatment date",
      "description": "The date treatment was first administered during the prior SARS-CoV-2 infection.",
      "title": "prior SARS-CoV-2 antiviral treatment date",
      "comments": [
        "Provide the date that the antiviral treatment agent was first administered during the most recenrt prior infection. Provide the prior SARS-CoV-2 treatment date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-01-28"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:date_of_prior_antiviral_treat"
      ],
      "slot_uri": "GENEPIO:0001440",
      "range": "date"
    },
    "purpose of sequencing": {
      "name": "purpose of sequencing",
      "description": "The reason that the sample was sequenced.",
      "title": "purpose of sequencing",
      "comments": [
        "The reason why a sample was originally collected may differ from the reason why it was selected for sequencing. The reason a sample was sequenced may provide information about potential biases in sequencing strategy. Provide the purpose of sequencing from the picklist in the template. The reason for sample collection should be indicated in the \"purpose of sampling\" field."
      ],
      "examples": [
        {
          "value": "Baseline surveillance (random sampling) [GENEPIO:0100005]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Sampling Strategy",
        "NCBI_BIOSAMPLE:purpose_of_sequencing"
      ],
      "slot_uri": "GENEPIO:0001445",
      "multivalued": true,
      "required": true,
      "any_of": [
        {
          "range": "purpose of sequencing menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "purpose of sequencing details": {
      "name": "purpose of sequencing details",
      "description": "The description of why the sample was sequenced providing specific details.",
      "title": "purpose of sequencing details",
      "comments": [
        "Provide an expanded description of why the sample was sequenced using pick list. The description may include the importance of the sequences for a particular public health investigation/surveillance activity/research question. Suggested standardized descriptions include: Screened for S gene target failure (S dropout), Screened for mink variants, Screened for B.1.1.7 variant, Screened for B.1.135 variant, Screened for P.1 variant, Screened due to travel history, Screened due to close contact with infected individual, Assessing public health control measures, Determining early introductions and spread, Investigating airline-related exposures, Investigating temporary foreign worker, Investigating remote regions, Investigating health care workers, Investigating schools/universities, Investigating reinfection."
      ],
      "examples": [
        {
          "value": "Screened for S gene target failure (S dropout)"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001446",
      "required": true,
      "any_of": [
        {
          "range": "xsd:token"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sequencing date": {
      "name": "sequencing date",
      "description": "The date the sample was sequenced.",
      "title": "sequencing date",
      "comments": [
        "Provide the sequencing date in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2021-04-26"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001447",
      "any_of": [
        {
          "range": "date"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "library ID": {
      "name": "library ID",
      "description": "The user-specified identifier for the library prepared for sequencing.",
      "title": "library ID",
      "comments": [
        "The library name should be unique, and can be an autogenerated ID from your LIMS, or modification of the isolate ID."
      ],
      "examples": [
        {
          "value": "XYZ_123345"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:library_ID"
      ],
      "slot_uri": "GENEPIO:0001448",
      "range": "xsd:token",
      "recommended": true
    },
    "amplicon size": {
      "name": "amplicon size",
      "description": "The length of the amplicon generated by PCR amplification.",
      "title": "amplicon size",
      "comments": [
        "Provide the amplicon size, including the units."
      ],
      "examples": [
        {
          "value": "300bp"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:amplicon_size"
      ],
      "slot_uri": "GENEPIO:0001449",
      "range": "xsd:token"
    },
    "library preparation kit": {
      "name": "library preparation kit",
      "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
      "title": "library preparation kit",
      "comments": [
        "Provide the name of the library preparation kit used."
      ],
      "examples": [
        {
          "value": "Nextera XT"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001450",
      "range": "xsd:token"
    },
    "flow cell barcode": {
      "name": "flow cell barcode",
      "description": "The barcode of the flow cell used for sequencing.",
      "title": "flow cell barcode",
      "comments": [
        "Provide the barcode of the flow cell used for sequencing the sample."
      ],
      "examples": [
        {
          "value": "FAB06069"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001451",
      "range": "xsd:token"
    },
    "sequencing instrument": {
      "name": "sequencing instrument",
      "description": "The model of the sequencing instrument used.",
      "title": "sequencing instrument",
      "comments": [
        "Select the sequencing instrument from the pick list."
      ],
      "examples": [
        {
          "value": "Oxford Nanopore MinION [GENEPIO:0100142]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Sequencing technology",
        "NCBI_SRA:platform",
        "NCBI_SRA:instrument_model",
        "NCBI_Genbank:sequencing_technology"
      ],
      "slot_uri": "GENEPIO:0001452",
      "multivalued": true,
      "required": true,
      "any_of": [
        {
          "range": "sequencing instrument menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sequencing protocol name": {
      "name": "sequencing protocol name",
      "description": "The name and version number of the sequencing protocol used.",
      "title": "sequencing protocol name",
      "comments": [
        "Provide the name and version of the sequencing protocol."
      ],
      "examples": [
        {
          "value": "1D_DNA_MinION, ARTIC Network Protocol V3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:sequencing_protocol_name"
      ],
      "slot_uri": "GENEPIO:0001453",
      "range": "xsd:token",
      "recommended": true
    },
    "sequencing protocol": {
      "name": "sequencing protocol",
      "description": "The protocol used to generate the sequence.",
      "title": "sequencing protocol",
      "comments": [
        "Provide a free text description of the methods and materials used to generate the sequence. Suggested text, fill in information where indicated.: \"Viral sequencing was performed following a tiling amplicon strategy using the <fill in> primer scheme. Sequencing was performed using a <fill in> sequencing instrument. Libraries were prepared using <fill in> library kit. \""
      ],
      "examples": [
        {
          "value": "Genomes were generated through amplicon sequencing of 1200 bp amplicons with Freed schema primers. Libraries were created using Illumina DNA Prep kits, and sequence data was produced using Miseq Micro v2 (500 cycles) sequencing kits."
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:design_description"
      ],
      "slot_uri": "GENEPIO:0001454",
      "range": "xsd:token"
    },
    "sequencing kit number": {
      "name": "sequencing kit number",
      "description": "The manufacturer's kit number.",
      "title": "sequencing kit number",
      "comments": [
        "Alphanumeric value."
      ],
      "examples": [
        {
          "value": "AB456XYZ789"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001455",
      "range": "xsd:token"
    },
    "amplicon pcr primer scheme": {
      "name": "amplicon pcr primer scheme",
      "description": "The specifications of the primers (primer sequences, binding positions, fragment size generated etc) used to generate the amplicons to be sequenced.",
      "title": "amplicon pcr primer scheme",
      "comments": [
        "Provide the name and version of the primer scheme used to generate the amplicons for sequencing."
      ],
      "examples": [
        {
          "value": "https://github.com/joshquick/artic-ncov2019/blob/master/primer_schemes/nCoV-2019/V3/nCoV-2019.tsv"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:amplicon_pcr_primer_scheme"
      ],
      "slot_uri": "GENEPIO:0001456",
      "range": "xsd:token"
    },
    "raw sequence data processing method": {
      "name": "raw sequence data processing method",
      "description": "The method used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
      "title": "raw sequence data processing method",
      "comments": [
        "Provide the name and version numbers of the software used to process the raw data."
      ],
      "examples": [
        {
          "value": "Porechop 0.2.3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:raw_sequence_data_processing_method"
      ],
      "slot_uri": "GENEPIO:0001458",
      "range": "xsd:token",
      "recommended": true
    },
    "dehosting method": {
      "name": "dehosting method",
      "description": "The method used to remove host reads from the pathogen sequence.",
      "title": "dehosting method",
      "comments": [
        "Provide the name and version number of the software used to remove host reads."
      ],
      "examples": [
        {
          "value": "Nanostripper 1.2.3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:dehosting_method"
      ],
      "slot_uri": "GENEPIO:0001459",
      "range": "xsd:token",
      "recommended": true
    },
    "consensus sequence name": {
      "name": "consensus sequence name",
      "description": "The name of the consensus sequence.",
      "title": "consensus sequence name",
      "comments": [
        "Provide the name and version number of the consensus sequence."
      ],
      "examples": [
        {
          "value": "ncov123assembly3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001460",
      "range": "xsd:token"
    },
    "consensus sequence filename": {
      "name": "consensus sequence filename",
      "description": "The name of the consensus sequence file.",
      "title": "consensus sequence filename",
      "comments": [
        "Provide the name and version number of the consensus sequence FASTA file."
      ],
      "examples": [
        {
          "value": "ncov123assembly.fasta"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_Genbank:filename"
      ],
      "slot_uri": "GENEPIO:0001461",
      "range": "xsd:token"
    },
    "consensus sequence filepath": {
      "name": "consensus sequence filepath",
      "description": "The filepath of the consesnsus sequence file.",
      "title": "consensus sequence filepath",
      "comments": [
        "Provide the filepath of the consensus sequence FASTA file."
      ],
      "examples": [
        {
          "value": "/User/Documents/RespLab/Data/ncov123assembly.fasta"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001462",
      "range": "xsd:token"
    },
    "consensus sequence software name": {
      "name": "consensus sequence software name",
      "description": "The name of software used to generate the consensus sequence.",
      "title": "consensus sequence software name",
      "comments": [
        "Provide the name of the software used to generate the consensus sequence."
      ],
      "examples": [
        {
          "value": "Ivar"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Assembly method",
        "NCBI_Genbank:assembly_method"
      ],
      "slot_uri": "GENEPIO:0001463",
      "range": "xsd:token",
      "required": true
    },
    "consensus sequence software version": {
      "name": "consensus sequence software version",
      "description": "The version of the software used to generate the consensus sequence.",
      "title": "consensus sequence software version",
      "comments": [
        "Provide the version of the software used to generate the consensus sequence."
      ],
      "examples": [
        {
          "value": "1.3"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Assembly method",
        "NCBI_Genbank:assembly_method_version"
      ],
      "slot_uri": "GENEPIO:0001469",
      "range": "decimal",
      "required": true
    },
    "breadth of coverage value": {
      "name": "breadth of coverage value",
      "description": "The percentage of the reference genome covered by the sequenced data, to a prescribed depth.",
      "title": "breadth of coverage value",
      "comments": [
        "Provide value as a percent."
      ],
      "examples": [
        {
          "value": "95%"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001472",
      "range": "xsd:token"
    },
    "depth of coverage value": {
      "name": "depth of coverage value",
      "description": "The average number of reads representing a given nucleotide in the reconstructed sequence.",
      "title": "depth of coverage value",
      "comments": [
        "Provide value as a fold of coverage."
      ],
      "examples": [
        {
          "value": "400x"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Coverage",
        "NCBI_Genbank:genome_coverage"
      ],
      "slot_uri": "GENEPIO:0001474",
      "range": "xsd:token"
    },
    "depth of coverage threshold": {
      "name": "depth of coverage threshold",
      "description": "The threshold used as a cut-off for the depth of coverage.",
      "title": "depth of coverage threshold",
      "comments": [
        "Provide the threshold fold coverage."
      ],
      "examples": [
        {
          "value": "100x"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001475",
      "range": "xsd:token"
    },
    "r1 fastq filename": {
      "name": "r1 fastq filename",
      "description": "The user-specified filename of the r1 FASTQ file.",
      "title": "r1 fastq filename",
      "comments": [
        "Provide the r1 FASTQ filename."
      ],
      "examples": [
        {
          "value": "ABC123_S1_L001_R1_001.fastq.gz"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001476",
      "range": "xsd:token"
    },
    "r2 fastq filename": {
      "name": "r2 fastq filename",
      "description": "The user-specified filename of the r2 FASTQ file.",
      "title": "r2 fastq filename",
      "comments": [
        "Provide the r2 FASTQ filename."
      ],
      "examples": [
        {
          "value": "ABC123_S1_L001_R2_001.fastq.gz"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001477",
      "range": "xsd:token"
    },
    "r1 fastq filepath": {
      "name": "r1 fastq filepath",
      "description": "The filepath of the r1 FASTQ file.",
      "title": "r1 fastq filepath",
      "comments": [
        "Provide the filepath of the r1 FASTQ file."
      ],
      "examples": [
        {
          "value": "/User/Documents/RespLab/Data/ABC123_S1_L001_R1_001.fastq.gz"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001478",
      "range": "xsd:token"
    },
    "r2 fastq filepath": {
      "name": "r2 fastq filepath",
      "description": "The filepath of the r2 FASTQ file.",
      "title": "r2 fastq filepath",
      "comments": [
        "Provide the filepath of the r2 FASTQ file."
      ],
      "examples": [
        {
          "value": "/User/Documents/RespLab/Data/ABC123_S1_L001_R2_001.fastq.gz"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001479",
      "range": "xsd:token"
    },
    "fast5 filename": {
      "name": "fast5 filename",
      "description": "The user-specified filename of the FAST5 file.",
      "title": "fast5 filename",
      "comments": [
        "Provide the FAST5 filename."
      ],
      "examples": [
        {
          "value": "batch1a_sequences.fast5"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001480",
      "range": "xsd:token"
    },
    "fast5 filepath": {
      "name": "fast5 filepath",
      "description": "The filepath of the FAST5 file.",
      "title": "fast5 filepath",
      "comments": [
        "Provide the filepath of the FAST5 file."
      ],
      "examples": [
        {
          "value": "/User/Documents/RespLab/Data/batch1a_sequences.fast5"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001481",
      "range": "xsd:token"
    },
    "number of base pairs sequenced": {
      "name": "number of base pairs sequenced",
      "description": "The number of total base pairs generated by the sequencing process.",
      "title": "number of base pairs sequenced",
      "comments": [
        "Provide a numerical value (no need to include units)."
      ],
      "examples": [
        {
          "value": "387566"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001482",
      "range": "integer",
      "minimum_value": 0
    },
    "consensus genome length": {
      "name": "consensus genome length",
      "description": "Size of the assembled genome described as the number of base pairs.",
      "title": "consensus genome length",
      "comments": [
        "Provide a numerical value (no need to include units)."
      ],
      "examples": [
        {
          "value": "38677"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001483",
      "range": "integer",
      "minimum_value": 0
    },
    "Ns per 100 kbp": {
      "name": "Ns per 100 kbp",
      "description": "The number of N symbols present in the consensus fasta sequence, per 100kbp of sequence.",
      "title": "Ns per 100 kbp",
      "comments": [
        "Provide a numerical value (no need to include units)."
      ],
      "examples": [
        {
          "value": "300"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001484",
      "range": "decimal"
    },
    "reference genome accession": {
      "name": "reference genome accession",
      "description": "A persistent, unique identifier of a genome database entry.",
      "title": "reference genome accession",
      "comments": [
        "Provide the accession number of the reference genome."
      ],
      "examples": [
        {
          "value": "NC_045512.2"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_Genbank:reference_genome"
      ],
      "slot_uri": "GENEPIO:0001485",
      "range": "xsd:token"
    },
    "bioinformatics protocol": {
      "name": "bioinformatics protocol",
      "description": "The name and version number of the bioinformatics protocol used.",
      "title": "bioinformatics protocol",
      "comments": [
        "Further details regarding the methods used to process raw data, and/or generate assemblies, and/or generate consensus sequences can be provided in an SOP or protocol. Provide the name and version number of the protocol, or a link if deposited in a protocol repository."
      ],
      "examples": [
        {
          "value": "https://www.protocols.io/groups/cphln-sarscov2-sequencing-consortium/members"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001489",
      "range": "xsd:token"
    },
    "lineage/clade name": {
      "name": "lineage/clade name",
      "description": "The name of the lineage or clade.",
      "title": "lineage/clade name",
      "comments": [
        "Provide the Pangolin or Nextstrain lineage/clade name."
      ],
      "examples": [
        {
          "value": "B.1.1.7"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001500",
      "range": "xsd:token"
    },
    "lineage/clade analysis software name": {
      "name": "lineage/clade analysis software name",
      "description": "The name of the software used to determine the lineage/clade.",
      "title": "lineage/clade analysis software name",
      "comments": [
        "Provide the name of the software used to determine the lineage/clade."
      ],
      "examples": [
        {
          "value": "Pangolin"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001501",
      "range": "xsd:token"
    },
    "lineage/clade analysis software version": {
      "name": "lineage/clade analysis software version",
      "description": "The version of the software used to determine the lineage/clade.",
      "title": "lineage/clade analysis software version",
      "comments": [
        "Provide the version of the software used ot determine the lineage/clade."
      ],
      "examples": [
        {
          "value": "2.1.10"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001502",
      "range": "xsd:token"
    },
    "variant designation": {
      "name": "variant designation",
      "description": "The variant classification of the lineage/clade i.e. variant, variant of concern.",
      "title": "variant designation",
      "comments": [
        "If the lineage/clade is considered a Variant of Concern, select Variant of Concern from the pick list. If the lineage/clade contains mutations of concern (mutations that increase transmission, clincal severity, or other epidemiological fa ctors) but it not a global Variant of Concern, select Variant. If the lineage/clade does not contain mutations of concern, leave blank."
      ],
      "examples": [
        {
          "value": "Variant of Concern (VOC) [GENEPIO:0100083]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001503",
      "any_of": [
        {
          "range": "variant designation menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "variant evidence details": {
      "name": "variant evidence details",
      "description": "The evidence used to make the variant determination.",
      "title": "variant evidence details",
      "comments": [
        "List the set of lineage-defining mutations used to make the variant determination. If there are mutations of interest/concern observed in addition to lineage-defining mutations, describe those here."
      ],
      "examples": [
        {
          "value": "RT-qPCR TaqPath assay: S gene target failure"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001504",
      "range": "xsd:token"
    },
    "gene name 1": {
      "name": "gene name 1",
      "description": "The name of the gene used in the diagnostic RT-PCR test.",
      "title": "gene name 1",
      "comments": [
        "Select a gene from the pick list. If the gene of interest is not in the list, provide the full name of the gene or the gene symbol (short form of gene name). Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI"
      ],
      "examples": [
        {
          "value": "E gene (orf4) [GENEPIO:0100151]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:sars_cov_2_diag_gene_name_1"
      ],
      "slot_uri": "GENEPIO:0001507",
      "any_of": [
        {
          "range": "gene name menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "diagnostic pcr protocol 1": {
      "name": "diagnostic pcr protocol 1",
      "description": "The name and version number of the protocol used for diagnostic marker amplification.",
      "title": "diagnostic pcr protocol 1",
      "comments": [
        "The name and version number of the protocol used for carrying out a diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control."
      ],
      "examples": [
        {
          "value": "PCREGene 2.0"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001508",
      "range": "xsd:token"
    },
    "diagnostic pcr Ct value 1": {
      "name": "diagnostic pcr Ct value 1",
      "description": "The cycle threshold (Ct) value result from a diagnostic SARS-CoV-2 RT-PCR test.",
      "title": "diagnostic pcr Ct value 1",
      "comments": [
        "Provide the cycle threshold (Ct) value of the sample from the diagnostic RT-PCR test."
      ],
      "examples": [
        {
          "value": "21"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:sars_cov_2_diag_pcr_ct_value_1"
      ],
      "slot_uri": "GENEPIO:0001509",
      "range": "xsd:token"
    },
    "gene name 2": {
      "name": "gene name 2",
      "description": "The name of the gene used in the diagnostic RT-PCR test.",
      "title": "gene name 2",
      "comments": [
        "Select a gene from the pick list. If the gene of interest is not in the list, provide the full name of the gene or the gene symbol (short form of gene name). Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI"
      ],
      "examples": [
        {
          "value": "RdRp gene (nsp12) [GENEPIO:0100168]"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:sars_cov_2_diag_gene_name_2"
      ],
      "slot_uri": "GENEPIO:0001510",
      "any_of": [
        {
          "range": "gene name menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "diagnostic pcr protocol 2": {
      "name": "diagnostic pcr protocol 2",
      "description": "The name and version number of the protocol used for diagnostic marker amplification.",
      "title": "diagnostic pcr protocol 2",
      "comments": [
        "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control."
      ],
      "examples": [
        {
          "value": "PCRRdRpGene 3.0"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001511",
      "range": "xsd:token"
    },
    "diagnostic pcr Ct value 2": {
      "name": "diagnostic pcr Ct value 2",
      "description": "The cycle threshold (Ct) value result from a diagnostic SARS-CoV-2 RT-PCR test.",
      "title": "diagnostic pcr Ct value 2",
      "comments": [
        "Provide the cycle threshold (Ct) value of the sample from the second diagnostic RT-PCR test."
      ],
      "examples": [
        {
          "value": "36"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_BIOSAMPLE:sars_cov_2_diag_pcr_ct_value_2"
      ],
      "slot_uri": "GENEPIO:0001512",
      "range": "xsd:token"
    },
    "title": {
      "name": "title",
      "description": "Short description that will identify  the dataset on public pages.",
      "title": "title",
      "comments": [
        "Format: {methodology} of {organism}: {sample info}"
      ],
      "examples": [
        {
          "value": "Genomic sequencing of SARS-CoV-2: Nasopharynx (NP), Swab"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:title"
      ],
      "slot_uri": "GENEPIO:0100323",
      "range": "xsd:token"
    },
    "library_strategy": {
      "name": "library_strategy",
      "description": "See NCBI SRA template for details.",
      "title": "library_strategy",
      "comments": [
        "Provide the library strategy by selecting a value from the pick list. For amplicon sequencing select \"AMPLICON\"."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:library_strategy"
      ],
      "slot_uri": "GENEPIO:0100324",
      "range": "library_strategy menu"
    },
    "library_source": {
      "name": "library_source",
      "description": "See NCBI SRA template for details.",
      "title": "library_source",
      "comments": [
        "Provide the library source by selecting a value from the pick list. For amplicon sequencing select \"Viral RNA\"."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:library_source"
      ],
      "slot_uri": "GENEPIO:0100325",
      "range": "library_source menu"
    },
    "library_selection": {
      "name": "library_selection",
      "description": "See NCBI SRA template for details.",
      "title": "library_selection",
      "comments": [
        "Provide the library selection by selecting a value from the pick list. For amplicon sequencing select \"PCR\"."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:library_selection"
      ],
      "slot_uri": "GENEPIO:0100326",
      "range": "library_selection menu"
    },
    "library_layout": {
      "name": "library_layout",
      "description": "See NCBI SRA template for details.",
      "title": "library_layout",
      "comments": [
        "Provide the library layout by selecting a value from the pick list. For Illumina instruments, select \"PAIRED\". For Oxford Nanopore instruments, select \"SINGLE\"."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:library_layout"
      ],
      "slot_uri": "GENEPIO:0100327",
      "range": "library_layout menu"
    },
    "filetype": {
      "name": "filetype",
      "description": "See NCBI SRA template for details.",
      "title": "filetype",
      "comments": [
        "Provide the filetype by selecting a value from the pick list."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:filetype"
      ],
      "slot_uri": "GENEPIO:0100328",
      "range": "filetype menu"
    },
    "filename": {
      "name": "filename",
      "description": "See NCBI SRA template for details.",
      "title": "filename",
      "comments": [
        "Provide the appropriate filename recorded in the Bioinformatics and QC metrics section. If sequence data is \"paired\", provide the second filename under \"Filename 2\"."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:filename"
      ],
      "slot_uri": "GENEPIO:0100329",
      "range": "xsd:token"
    },
    "filename2": {
      "name": "filename2",
      "description": "See NCBI SRA template for details.",
      "title": "filename2",
      "comments": [
        "Provide the appropriate filename recorded in the Bioinformatics and QC metrics section."
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "NCBI_SRA:filename2"
      ],
      "slot_uri": "GENEPIO:0100330",
      "range": "xsd:token"
    },
    "authors": {
      "name": "authors",
      "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
      "title": "authors",
      "comments": [
        "Include the first and last names of all individuals that should be attributed, separated by a comma."
      ],
      "examples": [
        {
          "value": "Tejinder Singh, Fei Hu, Johnny Blogs"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "exact_mappings": [
        "GISAID:Authors"
      ],
      "slot_uri": "GENEPIO:0001517",
      "range": "xsd:token",
      "recommended": true
    },
    "DataHarmonizer provenance": {
      "name": "DataHarmonizer provenance",
      "description": "The DataHarmonizer software version provenance.",
      "title": "DataHarmonizer provenance",
      "comments": [
        "The current software version information will be automatically generated in this field after the user utilizes the \"validate\" function. This information will be generated regardless as to whether the row is valid of not."
      ],
      "examples": [
        {
          "value": "DataHarmonizer provenance: v0.13.21"
        }
      ],
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "slot_uri": "GENEPIO:0001518",
      "range": "provenance"
    }
  },
  "classes": {
    "dh_interface": {
      "name": "dh_interface",
      "description": "A DataHarmonizer interface",
      "from_schema": "https://example.com/CanCOGeN_Covid-19"
    },
    "PHA4GE": {
      "name": "PHA4GE",
      "description": "Public Health Alliance for Genomic Epidemiology biosample specification",
      "from_schema": "https://example.com/CanCOGeN_Covid-19",
      "is_a": "dh_interface",
      "slot_usage": {
        "specimen collector sample ID": {
          "name": "specimen collector sample ID",
          "rank": 1,
          "slot_group": "Database Identifiers"
        },
        "umbrella bioproject accession": {
          "name": "umbrella bioproject accession",
          "rank": 2,
          "slot_group": "Database Identifiers"
        },
        "bioproject accession": {
          "name": "bioproject accession",
          "rank": 3,
          "slot_group": "Database Identifiers"
        },
        "biosample accession": {
          "name": "biosample accession",
          "rank": 4,
          "slot_group": "Database Identifiers"
        },
        "SRA accession": {
          "name": "SRA accession",
          "rank": 5,
          "slot_group": "Database Identifiers"
        },
        "GenBank/ENA/DDBJ accession": {
          "name": "GenBank/ENA/DDBJ accession",
          "rank": 6,
          "slot_group": "Database Identifiers"
        },
        "GISAID accession": {
          "name": "GISAID accession",
          "rank": 7,
          "slot_group": "Database Identifiers"
        },
        "GISAID virus name": {
          "name": "GISAID virus name",
          "rank": 8,
          "slot_group": "Database Identifiers"
        },
        "host specimen voucher": {
          "name": "host specimen voucher",
          "rank": 9,
          "slot_group": "Database Identifiers"
        },
        "sample collected by": {
          "name": "sample collected by",
          "rank": 10,
          "slot_group": "Sample collection and processing"
        },
        "sample collector contact email": {
          "name": "sample collector contact email",
          "rank": 11,
          "slot_group": "Sample collection and processing"
        },
        "sample collector contact address": {
          "name": "sample collector contact address",
          "rank": 12,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitted by": {
          "name": "sequence submitted by",
          "rank": 13,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitter contact email": {
          "name": "sequence submitter contact email",
          "rank": 14,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitter contact address": {
          "name": "sequence submitter contact address",
          "rank": 15,
          "slot_group": "Sample collection and processing"
        },
        "sample collection date": {
          "name": "sample collection date",
          "rank": 16,
          "slot_group": "Sample collection and processing"
        },
        "sample received date": {
          "name": "sample received date",
          "rank": 17,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc name (country)": {
          "name": "geo_loc name (country)",
          "rank": 18,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc name (state/province/territory)": {
          "name": "geo_loc name (state/province/territory)",
          "rank": 19,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc name (county/region)": {
          "name": "geo_loc name (county/region)",
          "rank": 20,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc name (city)": {
          "name": "geo_loc name (city)",
          "rank": 21,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc latitude": {
          "name": "geo_loc latitude",
          "rank": 22,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc longitude": {
          "name": "geo_loc longitude",
          "rank": 23,
          "slot_group": "Sample collection and processing"
        },
        "organism": {
          "name": "organism",
          "rank": 24,
          "slot_group": "Sample collection and processing"
        },
        "isolate": {
          "name": "isolate",
          "rank": 25,
          "slot_group": "Sample collection and processing"
        },
        "culture collection": {
          "name": "culture collection",
          "rank": 26,
          "slot_group": "Sample collection and processing"
        },
        "purpose of sampling": {
          "name": "purpose of sampling",
          "rank": 27,
          "slot_group": "Sample collection and processing"
        },
        "purpose of sampling details": {
          "name": "purpose of sampling details",
          "rank": 28,
          "slot_group": "Sample collection and processing"
        },
        "sample plan name": {
          "name": "sample plan name",
          "rank": 29,
          "slot_group": "Sample collection and processing"
        },
        "sample collected in quarantine": {
          "name": "sample collected in quarantine",
          "rank": 30,
          "slot_group": "Sample collection and processing"
        },
        "anatomical material": {
          "name": "anatomical material",
          "rank": 31,
          "slot_group": "Sample collection and processing"
        },
        "anatomical part": {
          "name": "anatomical part",
          "rank": 32,
          "slot_group": "Sample collection and processing"
        },
        "body product": {
          "name": "body product",
          "rank": 33,
          "slot_group": "Sample collection and processing"
        },
        "environmental material": {
          "name": "environmental material",
          "rank": 34,
          "slot_group": "Sample collection and processing"
        },
        "environmental site": {
          "name": "environmental site",
          "rank": 35,
          "slot_group": "Sample collection and processing"
        },
        "collection device": {
          "name": "collection device",
          "rank": 36,
          "slot_group": "Sample collection and processing"
        },
        "collection method": {
          "name": "collection method",
          "rank": 37,
          "slot_group": "Sample collection and processing"
        },
        "collection protocol": {
          "name": "collection protocol",
          "rank": 38,
          "slot_group": "Sample collection and processing"
        },
        "specimen processing": {
          "name": "specimen processing",
          "rank": 39,
          "slot_group": "Sample collection and processing"
        },
        "specimen processing details": {
          "name": "specimen processing details",
          "rank": 40,
          "slot_group": "Sample collection and processing"
        },
        "lab host": {
          "name": "lab host",
          "rank": 41,
          "slot_group": "Sample collection and processing"
        },
        "passage number": {
          "name": "passage number",
          "rank": 42,
          "slot_group": "Sample collection and processing"
        },
        "passage method": {
          "name": "passage method",
          "rank": 43,
          "slot_group": "Sample collection and processing"
        },
        "biomaterial extracted": {
          "name": "biomaterial extracted",
          "rank": 44,
          "slot_group": "Sample collection and processing"
        },
        "data abstraction details": {
          "name": "data abstraction details",
          "rank": 45,
          "slot_group": "Sample collection and processing"
        },
        "host (common name)": {
          "name": "host (common name)",
          "rank": 46,
          "slot_group": "Host Information"
        },
        "host (scientific name)": {
          "name": "host (scientific name)",
          "rank": 47,
          "slot_group": "Host Information"
        },
        "host health state": {
          "name": "host health state",
          "rank": 48,
          "slot_group": "Host Information"
        },
        "host health status details": {
          "name": "host health status details",
          "rank": 49,
          "slot_group": "Host Information"
        },
        "host disease": {
          "name": "host disease",
          "rank": 50,
          "slot_group": "Host Information"
        },
        "host health outcome": {
          "name": "host health outcome",
          "rank": 51,
          "slot_group": "Host Information"
        },
        "host age": {
          "name": "host age",
          "rank": 52,
          "slot_group": "Host Information"
        },
        "host age unit": {
          "name": "host age unit",
          "rank": 53,
          "slot_group": "Host Information"
        },
        "host age bin": {
          "name": "host age bin",
          "rank": 54,
          "slot_group": "Host Information"
        },
        "host gender": {
          "name": "host gender",
          "rank": 55,
          "slot_group": "Host Information"
        },
        "host residence geo_loc name (country)": {
          "name": "host residence geo_loc name (country)",
          "rank": 56,
          "slot_group": "Host Information"
        },
        "host ethnicity": {
          "name": "host ethnicity",
          "rank": 57,
          "slot_group": "Host Information"
        },
        "host subject ID": {
          "name": "host subject ID",
          "rank": 58,
          "slot_group": "Host Information"
        },
        "case ID": {
          "name": "case ID",
          "rank": 59,
          "slot_group": "Host Information"
        },
        "symptom onset date": {
          "name": "symptom onset date",
          "rank": 60,
          "slot_group": "Host Information"
        },
        "signs and symptoms": {
          "name": "signs and symptoms",
          "rank": 61,
          "slot_group": "Host Information"
        },
        "pre-existing conditions and risk factors": {
          "name": "pre-existing conditions and risk factors",
          "rank": 62,
          "slot_group": "Host Information"
        },
        "complications": {
          "name": "complications",
          "rank": 63,
          "slot_group": "Host Information"
        },
        "host vaccination status": {
          "name": "host vaccination status",
          "rank": 64,
          "slot_group": "Host vaccination information"
        },
        "number of vaccine doses received": {
          "name": "number of vaccine doses received",
          "rank": 65,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 1 vaccine name": {
          "name": "vaccination dose 1 vaccine name",
          "rank": 66,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 1 vaccination date": {
          "name": "vaccination dose 1 vaccination date",
          "rank": 67,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 2 vaccine name": {
          "name": "vaccination dose 2 vaccine name",
          "rank": 68,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 2 vaccination date": {
          "name": "vaccination dose 2 vaccination date",
          "rank": 69,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 3 vaccine name": {
          "name": "vaccination dose 3 vaccine name",
          "rank": 70,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 3 vaccination date": {
          "name": "vaccination dose 3 vaccination date",
          "rank": 71,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 4 vaccine name": {
          "name": "vaccination dose 4 vaccine name",
          "rank": 72,
          "slot_group": "Host vaccination information"
        },
        "vaccination dose 4 vaccination date": {
          "name": "vaccination dose 4 vaccination date",
          "rank": 73,
          "slot_group": "Host vaccination information"
        },
        "vaccination history": {
          "name": "vaccination history",
          "rank": 74,
          "slot_group": "Host vaccination information"
        },
        "location of exposure geo_loc name (country)": {
          "name": "location of exposure geo_loc name (country)",
          "rank": 75,
          "slot_group": "Host exposure information"
        },
        "destination of most recent travel (city)": {
          "name": "destination of most recent travel (city)",
          "rank": 76,
          "slot_group": "Host exposure information"
        },
        "destination of most recent travel (state/province/territory)": {
          "name": "destination of most recent travel (state/province/territory)",
          "rank": 77,
          "slot_group": "Host exposure information"
        },
        "destination of most recent travel (country)": {
          "name": "destination of most recent travel (country)",
          "rank": 78,
          "slot_group": "Host exposure information"
        },
        "most recent travel departure date": {
          "name": "most recent travel departure date",
          "rank": 79,
          "slot_group": "Host exposure information"
        },
        "most recent travel return date": {
          "name": "most recent travel return date",
          "rank": 80,
          "slot_group": "Host exposure information"
        },
        "travel history": {
          "name": "travel history",
          "rank": 81,
          "slot_group": "Host exposure information"
        },
        "exposure event": {
          "name": "exposure event",
          "rank": 82,
          "slot_group": "Host exposure information"
        },
        "exposure contact level": {
          "name": "exposure contact level",
          "rank": 83,
          "slot_group": "Host exposure information"
        },
        "host role": {
          "name": "host role",
          "rank": 84,
          "slot_group": "Host exposure information"
        },
        "exposure setting": {
          "name": "exposure setting",
          "rank": 85,
          "slot_group": "Host exposure information"
        },
        "exposure details": {
          "name": "exposure details",
          "rank": 86,
          "slot_group": "Host exposure information"
        },
        "prior SARS-CoV-2 infection": {
          "name": "prior SARS-CoV-2 infection",
          "rank": 87,
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 infection isolate": {
          "name": "prior SARS-CoV-2 infection isolate",
          "rank": 88,
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 infection date": {
          "name": "prior SARS-CoV-2 infection date",
          "rank": 89,
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 antiviral treatment": {
          "name": "prior SARS-CoV-2 antiviral treatment",
          "rank": 90,
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 antiviral treatment agent": {
          "name": "prior SARS-CoV-2 antiviral treatment agent",
          "rank": 91,
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 antiviral treatment date": {
          "name": "prior SARS-CoV-2 antiviral treatment date",
          "rank": 92,
          "slot_group": "Host reinfection information"
        },
        "purpose of sequencing": {
          "name": "purpose of sequencing",
          "rank": 93,
          "slot_group": "Sequencing"
        },
        "purpose of sequencing details": {
          "name": "purpose of sequencing details",
          "rank": 94,
          "slot_group": "Sequencing"
        },
        "sequencing date": {
          "name": "sequencing date",
          "rank": 95,
          "slot_group": "Sequencing"
        },
        "library ID": {
          "name": "library ID",
          "rank": 96,
          "slot_group": "Sequencing"
        },
        "amplicon size": {
          "name": "amplicon size",
          "rank": 97,
          "slot_group": "Sequencing"
        },
        "library preparation kit": {
          "name": "library preparation kit",
          "rank": 98,
          "slot_group": "Sequencing"
        },
        "flow cell barcode": {
          "name": "flow cell barcode",
          "rank": 99,
          "slot_group": "Sequencing"
        },
        "sequencing instrument": {
          "name": "sequencing instrument",
          "rank": 100,
          "slot_group": "Sequencing"
        },
        "sequencing protocol name": {
          "name": "sequencing protocol name",
          "rank": 101,
          "slot_group": "Sequencing"
        },
        "sequencing protocol": {
          "name": "sequencing protocol",
          "rank": 102,
          "slot_group": "Sequencing"
        },
        "sequencing kit number": {
          "name": "sequencing kit number",
          "rank": 103,
          "slot_group": "Sequencing"
        },
        "amplicon pcr primer scheme": {
          "name": "amplicon pcr primer scheme",
          "rank": 104,
          "slot_group": "Sequencing"
        },
        "raw sequence data processing method": {
          "name": "raw sequence data processing method",
          "rank": 105,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "dehosting method": {
          "name": "dehosting method",
          "rank": 106,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus sequence name": {
          "name": "consensus sequence name",
          "rank": 107,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus sequence filename": {
          "name": "consensus sequence filename",
          "rank": 108,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus sequence filepath": {
          "name": "consensus sequence filepath",
          "rank": 109,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus sequence software name": {
          "name": "consensus sequence software name",
          "rank": 110,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus sequence software version": {
          "name": "consensus sequence software version",
          "rank": 111,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "breadth of coverage value": {
          "name": "breadth of coverage value",
          "rank": 112,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "depth of coverage value": {
          "name": "depth of coverage value",
          "rank": 113,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "depth of coverage threshold": {
          "name": "depth of coverage threshold",
          "rank": 114,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "r1 fastq filename": {
          "name": "r1 fastq filename",
          "rank": 115,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "r2 fastq filename": {
          "name": "r2 fastq filename",
          "rank": 116,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "r1 fastq filepath": {
          "name": "r1 fastq filepath",
          "rank": 117,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "r2 fastq filepath": {
          "name": "r2 fastq filepath",
          "rank": 118,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "fast5 filename": {
          "name": "fast5 filename",
          "rank": 119,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "fast5 filepath": {
          "name": "fast5 filepath",
          "rank": 120,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "number of base pairs sequenced": {
          "name": "number of base pairs sequenced",
          "rank": 121,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "consensus genome length": {
          "name": "consensus genome length",
          "rank": 122,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "Ns per 100 kbp": {
          "name": "Ns per 100 kbp",
          "rank": 123,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "reference genome accession": {
          "name": "reference genome accession",
          "rank": 124,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "bioinformatics protocol": {
          "name": "bioinformatics protocol",
          "rank": 125,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "lineage/clade name": {
          "name": "lineage/clade name",
          "rank": 126,
          "slot_group": "Lineage and Variant information"
        },
        "lineage/clade analysis software name": {
          "name": "lineage/clade analysis software name",
          "rank": 127,
          "slot_group": "Lineage and Variant information"
        },
        "lineage/clade analysis software version": {
          "name": "lineage/clade analysis software version",
          "rank": 128,
          "slot_group": "Lineage and Variant information"
        },
        "variant designation": {
          "name": "variant designation",
          "rank": 129,
          "slot_group": "Lineage and Variant information"
        },
        "variant evidence details": {
          "name": "variant evidence details",
          "rank": 130,
          "slot_group": "Lineage and Variant information"
        },
        "gene name 1": {
          "name": "gene name 1",
          "rank": 131,
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr protocol 1": {
          "name": "diagnostic pcr protocol 1",
          "rank": 132,
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr Ct value 1": {
          "name": "diagnostic pcr Ct value 1",
          "rank": 133,
          "slot_group": "Pathogen diagnostic testing"
        },
        "gene name 2": {
          "name": "gene name 2",
          "rank": 134,
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr protocol 2": {
          "name": "diagnostic pcr protocol 2",
          "rank": 135,
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr Ct value 2": {
          "name": "diagnostic pcr Ct value 2",
          "rank": 136,
          "slot_group": "Pathogen diagnostic testing"
        },
        "title": {
          "name": "title",
          "rank": 137,
          "slot_group": "NCBI SRA information"
        },
        "library_strategy": {
          "name": "library_strategy",
          "rank": 138,
          "slot_group": "NCBI SRA information"
        },
        "library_source": {
          "name": "library_source",
          "rank": 139,
          "slot_group": "NCBI SRA information"
        },
        "library_selection": {
          "name": "library_selection",
          "rank": 140,
          "slot_group": "NCBI SRA information"
        },
        "library_layout": {
          "name": "library_layout",
          "rank": 141,
          "slot_group": "NCBI SRA information"
        },
        "filetype": {
          "name": "filetype",
          "rank": 142,
          "slot_group": "NCBI SRA information"
        },
        "filename": {
          "name": "filename",
          "rank": 143,
          "slot_group": "NCBI SRA information"
        },
        "filename2": {
          "name": "filename2",
          "rank": 144,
          "slot_group": "NCBI SRA information"
        },
        "authors": {
          "name": "authors",
          "rank": 145,
          "slot_group": "Contributor acknowledgement"
        },
        "DataHarmonizer provenance": {
          "name": "DataHarmonizer provenance",
          "rank": 146,
          "slot_group": "Contributor acknowledgement"
        }
      },
      "attributes": {
        "specimen collector sample ID": {
          "name": "specimen collector sample ID",
          "description": "The user-defined name for the sample.",
          "title": "specimen collector sample ID",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 1,
          "slot_uri": "GENEPIO:0001123",
          "alias": "specimen_collector_sample_ID",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token",
          "required": true
        },
        "umbrella bioproject accession": {
          "name": "umbrella bioproject accession",
          "description": "The INSDC umbrella accession number of the BioProject to which the BioSample belongs.",
          "title": "umbrella bioproject accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 2,
          "slot_uri": "GENEPIO:0001133",
          "alias": "umbrella_bioproject_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "bioproject accession": {
          "name": "bioproject accession",
          "description": "The INSDC accession number of the BioProject(s) to which the BioSample belongs.",
          "title": "bioproject accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 3,
          "slot_uri": "GENEPIO:0001136",
          "alias": "bioproject_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "biosample accession": {
          "name": "biosample accession",
          "description": "The identifier assigned to a BioSample in INSDC archives.",
          "title": "biosample accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 4,
          "slot_uri": "GENEPIO:0001139",
          "alias": "biosample_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token",
          "recommended": true
        },
        "SRA accession": {
          "name": "SRA accession",
          "description": "The Sequence Read Archive (SRA), European Nucleotide Archive (ENA) or DDBJ Sequence Read Archive (DRA) identifier linking raw read data, methodological metadata and quality control metrics submitted to the INSDC.",
          "title": "SRA accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 5,
          "slot_uri": "GENEPIO:0001142",
          "alias": "SRA_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "GenBank/ENA/DDBJ accession": {
          "name": "GenBank/ENA/DDBJ accession",
          "description": "The GenBank/ENA/DDBJ identifier assigned to the sequence in the INSDC archives.",
          "title": "GenBank/ENA/DDBJ accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 6,
          "slot_uri": "GENEPIO:0001145",
          "alias": "GenBank/ENA/DDBJ_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "GISAID accession": {
          "name": "GISAID accession",
          "description": "The GISAID accession number assigned to the sequence.",
          "title": "GISAID accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 7,
          "slot_uri": "GENEPIO:0001147",
          "alias": "GISAID_accession",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "GISAID virus name": {
          "name": "GISAID virus name",
          "description": "The user-defined GISAID virus name assigned to the sequence.",
          "title": "GISAID virus name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 8,
          "slot_uri": "GENEPIO:0100282",
          "alias": "GISAID_virus_name",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "host specimen voucher": {
          "name": "host specimen voucher",
          "description": "Identifier for the physical specimen.",
          "title": "host specimen voucher",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 9,
          "slot_uri": "GENEPIO:0100283",
          "alias": "host_specimen_voucher",
          "owner": "PHA4GE",
          "slot_group": "Database Identifiers",
          "range": "xsd:token"
        },
        "sample collected by": {
          "name": "sample collected by",
          "description": "The name of the organization with which the sample collector is affiliated.",
          "title": "sample collected by",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 10,
          "slot_uri": "GENEPIO:0001153",
          "alias": "sample_collected_by",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sample collector contact email": {
          "name": "sample collector contact email",
          "description": "The email address of the contact responsible for follow-up regarding the sample.",
          "title": "sample collector contact email",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 11,
          "slot_uri": "GENEPIO:0001156",
          "alias": "sample_collector_contact_email",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sample collector contact address": {
          "name": "sample collector contact address",
          "description": "The mailing address of the agency submitting the sample.",
          "title": "sample collector contact address",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 12,
          "slot_uri": "GENEPIO:0001158",
          "alias": "sample_collector_contact_address",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sequence submitted by": {
          "name": "sequence submitted by",
          "description": "The name of the agency that generated the sequence.",
          "title": "sequence submitted by",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 13,
          "slot_uri": "GENEPIO:0001159",
          "alias": "sequence_submitted_by",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sequence submitter contact email": {
          "name": "sequence submitter contact email",
          "description": "The email address of the contact responsible for follow-up regarding the sequence.",
          "title": "sequence submitter contact email",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 14,
          "slot_uri": "GENEPIO:0001165",
          "alias": "sequence_submitter_contact_email",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sequence submitter contact address": {
          "name": "sequence submitter contact address",
          "description": "The mailing address of the agency submitting the sequence.",
          "title": "sequence submitter contact address",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 15,
          "slot_uri": "GENEPIO:0001167",
          "alias": "sequence_submitter_contact_address",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sample collection date": {
          "name": "sample collection date",
          "description": "The date on which the sample was collected.",
          "title": "sample collection date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 16,
          "slot_uri": "GENEPIO:0001174",
          "alias": "sample_collection_date",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sample received date": {
          "name": "sample received date",
          "description": "The date on which the sample was received.",
          "title": "sample received date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 17,
          "slot_uri": "GENEPIO:0001179",
          "alias": "sample_received_date",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "geo_loc name (country)": {
          "name": "geo_loc name (country)",
          "description": "The country of origin of the sample.",
          "title": "geo_loc name (country)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 18,
          "slot_uri": "GENEPIO:0001181",
          "alias": "geo_loc_name_(country)",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "geo_loc name (state/province/territory)": {
          "name": "geo_loc name (state/province/territory)",
          "description": "The state/province/territory of origin of the sample.",
          "title": "geo_loc name (state/province/territory)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 19,
          "slot_uri": "GENEPIO:0001185",
          "alias": "geo_loc_name_(state/province/territory)",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "geo_loc name (county/region)": {
          "name": "geo_loc name (county/region)",
          "description": "The county/region of origin of the sample.",
          "title": "geo_loc name (county/region)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 20,
          "slot_uri": "GENEPIO:0100280",
          "alias": "geo_loc_name_(county/region)",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "geo_loc name (city)": {
          "name": "geo_loc name (city)",
          "description": "The city of origin of the sample.",
          "title": "geo_loc name (city)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 21,
          "slot_uri": "GENEPIO:0001189",
          "alias": "geo_loc_name_(city)",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "geo_loc latitude": {
          "name": "geo_loc latitude",
          "description": "The latitude coordinates of the geographical location of sample collection.",
          "title": "geo_loc latitude",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 22,
          "slot_uri": "GENEPIO:0100309",
          "alias": "geo_loc_latitude",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "geo_loc longitude": {
          "name": "geo_loc longitude",
          "description": "The longitude coordinates of the geographical location of sample collection.",
          "title": "geo_loc longitude",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 23,
          "slot_uri": "GENEPIO:0100310",
          "alias": "geo_loc_longitude",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "organism": {
          "name": "organism",
          "description": "Taxonomic name of the organism.",
          "title": "organism",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 24,
          "slot_uri": "GENEPIO:0001191",
          "alias": "organism",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "isolate": {
          "name": "isolate",
          "description": "Identifier of the specific isolate.",
          "title": "isolate",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 25,
          "slot_uri": "GENEPIO:0001644",
          "alias": "isolate",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "culture collection": {
          "name": "culture collection",
          "description": "The name of the source collection and unique culture identifier.",
          "title": "culture collection",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 26,
          "slot_uri": "GENEPIO:0100284",
          "alias": "culture_collection",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "purpose of sampling": {
          "name": "purpose of sampling",
          "description": "The reason that the sample was collected.",
          "title": "purpose of sampling",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 27,
          "slot_uri": "GENEPIO:0001198",
          "alias": "purpose_of_sampling",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "recommended": true
        },
        "purpose of sampling details": {
          "name": "purpose of sampling details",
          "description": "Further details pertaining to the reason the sample was collected.",
          "title": "purpose of sampling details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 28,
          "slot_uri": "GENEPIO:0001200",
          "alias": "purpose_of_sampling_details",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sample plan name": {
          "name": "sample plan name",
          "description": "The name of the sample plan implemented for sample collection.",
          "title": "sample plan name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 29,
          "slot_uri": "GENEPIO:0100285",
          "alias": "sample_plan_name",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "sample collected in quarantine": {
          "name": "sample collected in quarantine",
          "description": "Whether the sample was collected from an individual in quarantine.",
          "title": "sample collected in quarantine",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 30,
          "slot_uri": "GENEPIO:0100277",
          "alias": "sample_collected_in_quarantine",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "anatomical material": {
          "name": "anatomical material",
          "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
          "title": "anatomical material",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 31,
          "slot_uri": "GENEPIO:0001211",
          "multivalued": true,
          "alias": "anatomical_material",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "anatomical part": {
          "name": "anatomical part",
          "description": "An anatomical part of an organism e.g. oropharynx.",
          "title": "anatomical part",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 32,
          "slot_uri": "GENEPIO:0001214",
          "multivalued": true,
          "alias": "anatomical_part",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "body product": {
          "name": "body product",
          "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
          "title": "body product",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 33,
          "slot_uri": "GENEPIO:0001216",
          "multivalued": true,
          "alias": "body_product",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "environmental material": {
          "name": "environmental material",
          "description": "A substance obtained from the natural or man-made environment e.g. soil, water, sewage, door handle, bed handrail, face mask.",
          "title": "environmental material",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 34,
          "slot_uri": "GENEPIO:0001223",
          "multivalued": true,
          "alias": "environmental_material",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "environmental site": {
          "name": "environmental site",
          "description": "An environmental location may describe a site in the natural or built environment e.g. hospital, wet market, bat cave.",
          "title": "environmental site",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 35,
          "slot_uri": "GENEPIO:0001232",
          "multivalued": true,
          "alias": "environmental_site",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "collection device": {
          "name": "collection device",
          "description": "The instrument or container used to collect the sample e.g. swab.",
          "title": "collection device",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 36,
          "slot_uri": "GENEPIO:0001234",
          "multivalued": true,
          "alias": "collection_device",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "collection method": {
          "name": "collection method",
          "description": "The process used to collect the sample e.g. phlebotomy, necropsy.",
          "title": "collection method",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 37,
          "slot_uri": "GENEPIO:0001241",
          "multivalued": true,
          "alias": "collection_method",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "collection protocol": {
          "name": "collection protocol",
          "description": "The name and version of a particular protocol used for sampling.",
          "title": "collection protocol",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 38,
          "slot_uri": "GENEPIO:0001243",
          "alias": "collection_protocol",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "specimen processing": {
          "name": "specimen processing",
          "description": "Any processing applied to the sample during or after receiving the sample.",
          "title": "specimen processing",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 39,
          "slot_uri": "GENEPIO:0001253",
          "multivalued": true,
          "alias": "specimen_processing",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "recommended": true
        },
        "specimen processing details": {
          "name": "specimen processing details",
          "description": "Detailed information regarding the processing applied to a sample during or after receiving the sample.",
          "title": "specimen processing details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 40,
          "slot_uri": "GENEPIO:0100311",
          "alias": "specimen_processing_details",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "lab host": {
          "name": "lab host",
          "description": "Name and description of the laboratory host used to propagate the source organism or material from which the sample was obtained.",
          "title": "lab host",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 41,
          "slot_uri": "GENEPIO:0001255",
          "alias": "lab_host",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "passage number": {
          "name": "passage number",
          "description": "Number of passages.",
          "title": "passage number",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 42,
          "slot_uri": "GENEPIO:0001261",
          "alias": "passage_number",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "integer",
          "minimum_value": 0
        },
        "passage method": {
          "name": "passage method",
          "description": "Description of how organism was passaged.",
          "title": "passage method",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 43,
          "slot_uri": "GENEPIO:0001264",
          "alias": "passage_method",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "biomaterial extracted": {
          "name": "biomaterial extracted",
          "description": "The biomaterial extracted from samples for the purpose of sequencing.",
          "title": "biomaterial extracted",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 44,
          "slot_uri": "GENEPIO:0001266",
          "alias": "biomaterial_extracted",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing"
        },
        "data abstraction details": {
          "name": "data abstraction details",
          "description": "A description of how any data elements were altered to preserve patient privacy.",
          "title": "data abstraction details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 45,
          "slot_uri": "GENEPIO:0100278",
          "alias": "data_abstraction_details",
          "owner": "PHA4GE",
          "slot_group": "Sample collection and processing",
          "range": "xsd:token"
        },
        "host (common name)": {
          "name": "host (common name)",
          "description": "The commonly used name of the host.",
          "title": "host (common name)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 46,
          "slot_uri": "GENEPIO:0001386",
          "alias": "host_(common_name)",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host (scientific name)": {
          "name": "host (scientific name)",
          "description": "The taxonomic, or scientific name of the host.",
          "title": "host (scientific name)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 47,
          "slot_uri": "GENEPIO:0001387",
          "alias": "host_(scientific_name)",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "required": true
        },
        "host health state": {
          "name": "host health state",
          "description": "Health status of the host at the time of sample collection.",
          "title": "host health state",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 48,
          "slot_uri": "GENEPIO:0001388",
          "alias": "host_health_state",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host health status details": {
          "name": "host health status details",
          "description": "Further details pertaining to the health or disease status of the host at time of collection.",
          "title": "host health status details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 49,
          "slot_uri": "GENEPIO:0001389",
          "alias": "host_health_status_details",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host disease": {
          "name": "host disease",
          "description": "The name of the disease experienced by the host.",
          "title": "host disease",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 50,
          "slot_uri": "GENEPIO:0001391",
          "alias": "host_disease",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "required": true
        },
        "host health outcome": {
          "name": "host health outcome",
          "description": "Disease outcome in the host.",
          "title": "host health outcome",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 51,
          "slot_uri": "GENEPIO:0001390",
          "alias": "host_health_outcome",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host age": {
          "name": "host age",
          "description": "Age of host at the time of sampling.",
          "title": "host age",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 52,
          "slot_uri": "GENEPIO:0001392",
          "alias": "host_age",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "recommended": true,
          "maximum_value": 130
        },
        "host age unit": {
          "name": "host age unit",
          "description": "The units used to measure the host's age.",
          "title": "host age unit",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 53,
          "slot_uri": "GENEPIO:0001393",
          "alias": "host_age_unit",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "recommended": true
        },
        "host age bin": {
          "name": "host age bin",
          "description": "The age category of the host at the time of sampling.",
          "title": "host age bin",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 54,
          "slot_uri": "GENEPIO:0001394",
          "alias": "host_age_bin",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "recommended": true
        },
        "host gender": {
          "name": "host gender",
          "description": "The gender of the host at the time of sample collection.",
          "title": "host gender",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 55,
          "slot_uri": "GENEPIO:0001395",
          "alias": "host_gender",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "recommended": true
        },
        "host residence geo_loc name (country)": {
          "name": "host residence geo_loc name (country)",
          "description": "The country where the host resides.",
          "title": "host residence geo_loc name (country)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 56,
          "slot_uri": "GENEPIO:0001396",
          "alias": "host_residence_geo_loc_name_(country)",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host ethnicity": {
          "name": "host ethnicity",
          "description": "The self-identified ethnicity(ies) of the host.",
          "title": "host ethnicity",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 57,
          "slot_uri": "GENEPIO:0100312",
          "alias": "host_ethnicity",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "range": "xsd:token"
        },
        "host subject ID": {
          "name": "host subject ID",
          "description": "A unique identifier by which each host can be referred to e.g. #131",
          "title": "host subject ID",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 58,
          "slot_uri": "GENEPIO:0001398",
          "alias": "host_subject_ID",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "range": "xsd:token"
        },
        "case ID": {
          "name": "case ID",
          "description": "The identifier used to specify an epidemiologically detected case of disease.",
          "title": "case ID",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 59,
          "slot_uri": "GENEPIO:0100281",
          "alias": "case_ID",
          "owner": "PHA4GE",
          "slot_group": "Host Information",
          "range": "xsd:token"
        },
        "symptom onset date": {
          "name": "symptom onset date",
          "description": "The date on which the symptoms began or were first noted.",
          "title": "symptom onset date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 60,
          "slot_uri": "GENEPIO:0001399",
          "alias": "symptom_onset_date",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "signs and symptoms": {
          "name": "signs and symptoms",
          "description": "A perceived change in function or sensation, (loss, disturbance or appearance) indicative of a disease, reported by a patient.",
          "title": "signs and symptoms",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 61,
          "slot_uri": "GENEPIO:0001400",
          "multivalued": true,
          "alias": "signs_and_symptoms",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "pre-existing conditions and risk factors": {
          "name": "pre-existing conditions and risk factors",
          "description": "Patient pre-existing conditions and risk factors.\nPre-existing condition: A medical condition that existed prior to the current infection.\nRisk Factor: A variable associated with an increased risk of disease or infection.",
          "title": "pre-existing conditions and risk factors",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 62,
          "slot_uri": "GENEPIO:0001401",
          "multivalued": true,
          "alias": "pre_existing_conditions_and_risk_factors",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "complications": {
          "name": "complications",
          "description": "Patient medical complications that are believed to have occurred as a result of host disease.",
          "title": "complications",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 63,
          "slot_uri": "GENEPIO:0001402",
          "multivalued": true,
          "alias": "complications",
          "owner": "PHA4GE",
          "slot_group": "Host Information"
        },
        "host vaccination status": {
          "name": "host vaccination status",
          "description": "The vaccination status of the host (fully vaccinated, partially vaccinated, or not vaccinated).",
          "title": "host vaccination status",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 64,
          "slot_uri": "GENEPIO:0001404",
          "alias": "host_vaccination_status",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information"
        },
        "number of vaccine doses received": {
          "name": "number of vaccine doses received",
          "description": "The number of doses of the vaccine received by the host.",
          "title": "number of vaccine doses received",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 65,
          "slot_uri": "GENEPIO:0001406",
          "alias": "number_of_vaccine_doses_received",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "integer",
          "minimum_value": 0
        },
        "vaccination dose 1 vaccine name": {
          "name": "vaccination dose 1 vaccine name",
          "description": "The name of the vaccine administered as the first dose of a vaccine regimen.",
          "title": "vaccination dose 1 vaccine name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 66,
          "slot_uri": "GENEPIO:0100313",
          "alias": "vaccination_dose_1_vaccine_name",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "xsd:token"
        },
        "vaccination dose 1 vaccination date": {
          "name": "vaccination dose 1 vaccination date",
          "description": "The date the first dose of a vaccine was administered.",
          "title": "vaccination dose 1 vaccination date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 67,
          "slot_uri": "GENEPIO:0100314",
          "alias": "vaccination_dose_1_vaccination_date",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "date"
        },
        "vaccination dose 2 vaccine name": {
          "name": "vaccination dose 2 vaccine name",
          "description": "The name of the vaccine administered as the second dose of a vaccine regimen.",
          "title": "vaccination dose 2 vaccine name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 68,
          "slot_uri": "GENEPIO:0100315",
          "alias": "vaccination_dose_2_vaccine_name",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "xsd:token"
        },
        "vaccination dose 2 vaccination date": {
          "name": "vaccination dose 2 vaccination date",
          "description": "The date the second dose of a vaccine was administered.",
          "title": "vaccination dose 2 vaccination date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 69,
          "slot_uri": "GENEPIO:0100316",
          "alias": "vaccination_dose_2_vaccination_date",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "date"
        },
        "vaccination dose 3 vaccine name": {
          "name": "vaccination dose 3 vaccine name",
          "description": "The name of the vaccine administered as the third dose of a vaccine regimen.",
          "title": "vaccination dose 3 vaccine name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 70,
          "slot_uri": "GENEPIO:0100317",
          "alias": "vaccination_dose_3_vaccine_name",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "xsd:token"
        },
        "vaccination dose 3 vaccination date": {
          "name": "vaccination dose 3 vaccination date",
          "description": "The date the third dose of a vaccine was administered.",
          "title": "vaccination dose 3 vaccination date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 71,
          "slot_uri": "GENEPIO:0100318",
          "alias": "vaccination_dose_3_vaccination_date",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "date"
        },
        "vaccination dose 4 vaccine name": {
          "name": "vaccination dose 4 vaccine name",
          "description": "The name of the vaccine administered as the fourth dose of a vaccine regimen.",
          "title": "vaccination dose 4 vaccine name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 72,
          "slot_uri": "GENEPIO:0100319",
          "alias": "vaccination_dose_4_vaccine_name",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "xsd:token"
        },
        "vaccination dose 4 vaccination date": {
          "name": "vaccination dose 4 vaccination date",
          "description": "The date the fourth dose of a vaccine was administered.",
          "title": "vaccination dose 4 vaccination date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 73,
          "slot_uri": "GENEPIO:0100320",
          "alias": "vaccination_dose_4_vaccination_date",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "date"
        },
        "vaccination history": {
          "name": "vaccination history",
          "description": "A description of the vaccines received and the administration dates of a series of vaccinations against a specific disease or a set of diseases.",
          "title": "vaccination history",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 74,
          "slot_uri": "GENEPIO:0100321",
          "alias": "vaccination_history",
          "owner": "PHA4GE",
          "slot_group": "Host vaccination information",
          "range": "xsd:token"
        },
        "location of exposure geo_loc name (country)": {
          "name": "location of exposure geo_loc name (country)",
          "description": "The country where the host was likely exposed to the causative agent of the illness.",
          "title": "location of exposure geo_loc name (country)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 75,
          "slot_uri": "GENEPIO:0001410",
          "alias": "location_of_exposure_geo_loc_name_(country)",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "destination of most recent travel (city)": {
          "name": "destination of most recent travel (city)",
          "description": "The name of the city that was the destination of most recent travel.",
          "title": "destination of most recent travel (city)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 76,
          "slot_uri": "GENEPIO:0001411",
          "alias": "destination_of_most_recent_travel_(city)",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "xsd:token"
        },
        "destination of most recent travel (state/province/territory)": {
          "name": "destination of most recent travel (state/province/territory)",
          "description": "The name of the province that was the destination of most recent travel.",
          "title": "destination of most recent travel (state/province/territory)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 77,
          "slot_uri": "GENEPIO:0001412",
          "alias": "destination_of_most_recent_travel_(state/province/territory)",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "xsd:token"
        },
        "destination of most recent travel (country)": {
          "name": "destination of most recent travel (country)",
          "description": "The name of the country that was the destination of most recent travel.",
          "title": "destination of most recent travel (country)",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 78,
          "slot_uri": "GENEPIO:0001413",
          "alias": "destination_of_most_recent_travel_(country)",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "most recent travel departure date": {
          "name": "most recent travel departure date",
          "description": "The date of a person's most recent departure from their primary residence (at that time) on a journey to one or more other locations.",
          "title": "most recent travel departure date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 79,
          "slot_uri": "GENEPIO:0001414",
          "alias": "most_recent_travel_departure_date",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "most recent travel return date": {
          "name": "most recent travel return date",
          "description": "The date of a person's most recent return to some residence from a journey originating at that residence.",
          "title": "most recent travel return date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 80,
          "slot_uri": "GENEPIO:0001415",
          "alias": "most_recent_travel_return_date",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "travel history": {
          "name": "travel history",
          "description": "Travel history in last six months.",
          "title": "travel history",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 81,
          "slot_uri": "GENEPIO:0001416",
          "alias": "travel_history",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "xsd:token"
        },
        "exposure event": {
          "name": "exposure event",
          "description": "Event leading to exposure.",
          "title": "exposure event",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 82,
          "slot_uri": "GENEPIO:0001417",
          "alias": "exposure_event",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "exposure contact level": {
          "name": "exposure contact level",
          "description": "The exposure transmission contact type.",
          "title": "exposure contact level",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 83,
          "slot_uri": "GENEPIO:0001418",
          "alias": "exposure_contact_level",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information"
        },
        "host role": {
          "name": "host role",
          "description": "The role of the host in relation to the exposure setting.",
          "title": "host role",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 84,
          "slot_uri": "GENEPIO:0001419",
          "multivalued": true,
          "alias": "host_role",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "host role menu"
        },
        "exposure setting": {
          "name": "exposure setting",
          "description": "The setting leading to exposure.",
          "title": "exposure setting",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 85,
          "slot_uri": "GENEPIO:0001428",
          "multivalued": true,
          "alias": "exposure_setting",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "exposure setting menu"
        },
        "exposure details": {
          "name": "exposure details",
          "description": "Additional host exposure information.",
          "title": "exposure details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 86,
          "slot_uri": "GENEPIO:0001431",
          "alias": "exposure_details",
          "owner": "PHA4GE",
          "slot_group": "Host exposure information",
          "range": "xsd:token"
        },
        "prior SARS-CoV-2 infection": {
          "name": "prior SARS-CoV-2 infection",
          "description": "Whether there was prior SARS-CoV-2 infection.",
          "title": "prior SARS-CoV-2 infection",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 87,
          "slot_uri": "GENEPIO:0001435",
          "alias": "prior_SARS_CoV_2_infection",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 infection isolate": {
          "name": "prior SARS-CoV-2 infection isolate",
          "description": "The identifier of the isolate found in the prior SARS-CoV-2 infection.",
          "title": "prior SARS-CoV-2 infection isolate",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 88,
          "slot_uri": "GENEPIO:0001436",
          "alias": "prior_SARS_CoV_2_infection_isolate",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information",
          "range": "xsd:token"
        },
        "prior SARS-CoV-2 infection date": {
          "name": "prior SARS-CoV-2 infection date",
          "description": "The date of diagnosis of the prior SARS-CoV-2 infection.",
          "title": "prior SARS-CoV-2 infection date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 89,
          "slot_uri": "GENEPIO:0001437",
          "alias": "prior_SARS_CoV_2_infection_date",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information",
          "range": "date"
        },
        "prior SARS-CoV-2 antiviral treatment": {
          "name": "prior SARS-CoV-2 antiviral treatment",
          "description": "Whether there was prior SARS-CoV-2 treatment with an antiviral agent.",
          "title": "prior SARS-CoV-2 antiviral treatment",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 90,
          "slot_uri": "GENEPIO:0001438",
          "alias": "prior_SARS_CoV_2_antiviral_treatment",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information"
        },
        "prior SARS-CoV-2 antiviral treatment agent": {
          "name": "prior SARS-CoV-2 antiviral treatment agent",
          "description": "The name of the antiviral treatment agent administered during the prior SARS-CoV-2 infection.",
          "title": "prior SARS-CoV-2 antiviral treatment agent",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 91,
          "slot_uri": "GENEPIO:0001439",
          "alias": "prior_SARS_CoV_2_antiviral_treatment_agent",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information",
          "range": "xsd:token"
        },
        "prior SARS-CoV-2 antiviral treatment date": {
          "name": "prior SARS-CoV-2 antiviral treatment date",
          "description": "The date treatment was first administered during the prior SARS-CoV-2 infection.",
          "title": "prior SARS-CoV-2 antiviral treatment date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 92,
          "slot_uri": "GENEPIO:0001440",
          "alias": "prior_SARS_CoV_2_antiviral_treatment_date",
          "owner": "PHA4GE",
          "slot_group": "Host reinfection information",
          "range": "date"
        },
        "purpose of sequencing": {
          "name": "purpose of sequencing",
          "description": "The reason that the sample was sequenced.",
          "title": "purpose of sequencing",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 93,
          "slot_uri": "GENEPIO:0001445",
          "multivalued": true,
          "alias": "purpose_of_sequencing",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "required": true
        },
        "purpose of sequencing details": {
          "name": "purpose of sequencing details",
          "description": "The description of why the sample was sequenced providing specific details.",
          "title": "purpose of sequencing details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 94,
          "slot_uri": "GENEPIO:0001446",
          "alias": "purpose_of_sequencing_details",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "required": true
        },
        "sequencing date": {
          "name": "sequencing date",
          "description": "The date the sample was sequenced.",
          "title": "sequencing date",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 95,
          "slot_uri": "GENEPIO:0001447",
          "alias": "sequencing_date",
          "owner": "PHA4GE",
          "slot_group": "Sequencing"
        },
        "library ID": {
          "name": "library ID",
          "description": "The user-specified identifier for the library prepared for sequencing.",
          "title": "library ID",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 96,
          "slot_uri": "GENEPIO:0001448",
          "alias": "library_ID",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token",
          "recommended": true
        },
        "amplicon size": {
          "name": "amplicon size",
          "description": "The length of the amplicon generated by PCR amplification.",
          "title": "amplicon size",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 97,
          "slot_uri": "GENEPIO:0001449",
          "alias": "amplicon_size",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "library preparation kit": {
          "name": "library preparation kit",
          "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
          "title": "library preparation kit",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 98,
          "slot_uri": "GENEPIO:0001450",
          "alias": "library_preparation_kit",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "flow cell barcode": {
          "name": "flow cell barcode",
          "description": "The barcode of the flow cell used for sequencing.",
          "title": "flow cell barcode",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 99,
          "slot_uri": "GENEPIO:0001451",
          "alias": "flow_cell_barcode",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "sequencing instrument": {
          "name": "sequencing instrument",
          "description": "The model of the sequencing instrument used.",
          "title": "sequencing instrument",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 100,
          "slot_uri": "GENEPIO:0001452",
          "multivalued": true,
          "alias": "sequencing_instrument",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "required": true
        },
        "sequencing protocol name": {
          "name": "sequencing protocol name",
          "description": "The name and version number of the sequencing protocol used.",
          "title": "sequencing protocol name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 101,
          "slot_uri": "GENEPIO:0001453",
          "alias": "sequencing_protocol_name",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token",
          "recommended": true
        },
        "sequencing protocol": {
          "name": "sequencing protocol",
          "description": "The protocol used to generate the sequence.",
          "title": "sequencing protocol",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 102,
          "slot_uri": "GENEPIO:0001454",
          "alias": "sequencing_protocol",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "sequencing kit number": {
          "name": "sequencing kit number",
          "description": "The manufacturer's kit number.",
          "title": "sequencing kit number",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 103,
          "slot_uri": "GENEPIO:0001455",
          "alias": "sequencing_kit_number",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "amplicon pcr primer scheme": {
          "name": "amplicon pcr primer scheme",
          "description": "The specifications of the primers (primer sequences, binding positions, fragment size generated etc) used to generate the amplicons to be sequenced.",
          "title": "amplicon pcr primer scheme",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 104,
          "slot_uri": "GENEPIO:0001456",
          "alias": "amplicon_pcr_primer_scheme",
          "owner": "PHA4GE",
          "slot_group": "Sequencing",
          "range": "xsd:token"
        },
        "raw sequence data processing method": {
          "name": "raw sequence data processing method",
          "description": "The method used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
          "title": "raw sequence data processing method",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 105,
          "slot_uri": "GENEPIO:0001458",
          "alias": "raw_sequence_data_processing_method",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token",
          "recommended": true
        },
        "dehosting method": {
          "name": "dehosting method",
          "description": "The method used to remove host reads from the pathogen sequence.",
          "title": "dehosting method",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 106,
          "slot_uri": "GENEPIO:0001459",
          "alias": "dehosting_method",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token",
          "recommended": true
        },
        "consensus sequence name": {
          "name": "consensus sequence name",
          "description": "The name of the consensus sequence.",
          "title": "consensus sequence name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 107,
          "slot_uri": "GENEPIO:0001460",
          "alias": "consensus_sequence_name",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "consensus sequence filename": {
          "name": "consensus sequence filename",
          "description": "The name of the consensus sequence file.",
          "title": "consensus sequence filename",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 108,
          "slot_uri": "GENEPIO:0001461",
          "alias": "consensus_sequence_filename",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "consensus sequence filepath": {
          "name": "consensus sequence filepath",
          "description": "The filepath of the consesnsus sequence file.",
          "title": "consensus sequence filepath",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 109,
          "slot_uri": "GENEPIO:0001462",
          "alias": "consensus_sequence_filepath",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "consensus sequence software name": {
          "name": "consensus sequence software name",
          "description": "The name of software used to generate the consensus sequence.",
          "title": "consensus sequence software name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 110,
          "slot_uri": "GENEPIO:0001463",
          "alias": "consensus_sequence_software_name",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token",
          "required": true
        },
        "consensus sequence software version": {
          "name": "consensus sequence software version",
          "description": "The version of the software used to generate the consensus sequence.",
          "title": "consensus sequence software version",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 111,
          "slot_uri": "GENEPIO:0001469",
          "alias": "consensus_sequence_software_version",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "decimal",
          "required": true
        },
        "breadth of coverage value": {
          "name": "breadth of coverage value",
          "description": "The percentage of the reference genome covered by the sequenced data, to a prescribed depth.",
          "title": "breadth of coverage value",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 112,
          "slot_uri": "GENEPIO:0001472",
          "alias": "breadth_of_coverage_value",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "depth of coverage value": {
          "name": "depth of coverage value",
          "description": "The average number of reads representing a given nucleotide in the reconstructed sequence.",
          "title": "depth of coverage value",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 113,
          "slot_uri": "GENEPIO:0001474",
          "alias": "depth_of_coverage_value",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "depth of coverage threshold": {
          "name": "depth of coverage threshold",
          "description": "The threshold used as a cut-off for the depth of coverage.",
          "title": "depth of coverage threshold",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 114,
          "slot_uri": "GENEPIO:0001475",
          "alias": "depth_of_coverage_threshold",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "r1 fastq filename": {
          "name": "r1 fastq filename",
          "description": "The user-specified filename of the r1 FASTQ file.",
          "title": "r1 fastq filename",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 115,
          "slot_uri": "GENEPIO:0001476",
          "alias": "r1_fastq_filename",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "r2 fastq filename": {
          "name": "r2 fastq filename",
          "description": "The user-specified filename of the r2 FASTQ file.",
          "title": "r2 fastq filename",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 116,
          "slot_uri": "GENEPIO:0001477",
          "alias": "r2_fastq_filename",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "r1 fastq filepath": {
          "name": "r1 fastq filepath",
          "description": "The filepath of the r1 FASTQ file.",
          "title": "r1 fastq filepath",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 117,
          "slot_uri": "GENEPIO:0001478",
          "alias": "r1_fastq_filepath",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "r2 fastq filepath": {
          "name": "r2 fastq filepath",
          "description": "The filepath of the r2 FASTQ file.",
          "title": "r2 fastq filepath",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 118,
          "slot_uri": "GENEPIO:0001479",
          "alias": "r2_fastq_filepath",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "fast5 filename": {
          "name": "fast5 filename",
          "description": "The user-specified filename of the FAST5 file.",
          "title": "fast5 filename",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 119,
          "slot_uri": "GENEPIO:0001480",
          "alias": "fast5_filename",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "fast5 filepath": {
          "name": "fast5 filepath",
          "description": "The filepath of the FAST5 file.",
          "title": "fast5 filepath",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 120,
          "slot_uri": "GENEPIO:0001481",
          "alias": "fast5_filepath",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "number of base pairs sequenced": {
          "name": "number of base pairs sequenced",
          "description": "The number of total base pairs generated by the sequencing process.",
          "title": "number of base pairs sequenced",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 121,
          "slot_uri": "GENEPIO:0001482",
          "alias": "number_of_base_pairs_sequenced",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "integer",
          "minimum_value": 0
        },
        "consensus genome length": {
          "name": "consensus genome length",
          "description": "Size of the assembled genome described as the number of base pairs.",
          "title": "consensus genome length",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 122,
          "slot_uri": "GENEPIO:0001483",
          "alias": "consensus_genome_length",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "integer",
          "minimum_value": 0
        },
        "Ns per 100 kbp": {
          "name": "Ns per 100 kbp",
          "description": "The number of N symbols present in the consensus fasta sequence, per 100kbp of sequence.",
          "title": "Ns per 100 kbp",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 123,
          "slot_uri": "GENEPIO:0001484",
          "alias": "Ns_per_100_kbp",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "decimal"
        },
        "reference genome accession": {
          "name": "reference genome accession",
          "description": "A persistent, unique identifier of a genome database entry.",
          "title": "reference genome accession",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 124,
          "slot_uri": "GENEPIO:0001485",
          "alias": "reference_genome_accession",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "bioinformatics protocol": {
          "name": "bioinformatics protocol",
          "description": "The name and version number of the bioinformatics protocol used.",
          "title": "bioinformatics protocol",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 125,
          "slot_uri": "GENEPIO:0001489",
          "alias": "bioinformatics_protocol",
          "owner": "PHA4GE",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "xsd:token"
        },
        "lineage/clade name": {
          "name": "lineage/clade name",
          "description": "The name of the lineage or clade.",
          "title": "lineage/clade name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 126,
          "slot_uri": "GENEPIO:0001500",
          "alias": "lineage/clade_name",
          "owner": "PHA4GE",
          "slot_group": "Lineage and Variant information",
          "range": "xsd:token"
        },
        "lineage/clade analysis software name": {
          "name": "lineage/clade analysis software name",
          "description": "The name of the software used to determine the lineage/clade.",
          "title": "lineage/clade analysis software name",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 127,
          "slot_uri": "GENEPIO:0001501",
          "alias": "lineage/clade_analysis_software_name",
          "owner": "PHA4GE",
          "slot_group": "Lineage and Variant information",
          "range": "xsd:token"
        },
        "lineage/clade analysis software version": {
          "name": "lineage/clade analysis software version",
          "description": "The version of the software used to determine the lineage/clade.",
          "title": "lineage/clade analysis software version",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 128,
          "slot_uri": "GENEPIO:0001502",
          "alias": "lineage/clade_analysis_software_version",
          "owner": "PHA4GE",
          "slot_group": "Lineage and Variant information",
          "range": "xsd:token"
        },
        "variant designation": {
          "name": "variant designation",
          "description": "The variant classification of the lineage/clade i.e. variant, variant of concern.",
          "title": "variant designation",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 129,
          "slot_uri": "GENEPIO:0001503",
          "alias": "variant_designation",
          "owner": "PHA4GE",
          "slot_group": "Lineage and Variant information"
        },
        "variant evidence details": {
          "name": "variant evidence details",
          "description": "The evidence used to make the variant determination.",
          "title": "variant evidence details",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 130,
          "slot_uri": "GENEPIO:0001504",
          "alias": "variant_evidence_details",
          "owner": "PHA4GE",
          "slot_group": "Lineage and Variant information",
          "range": "xsd:token"
        },
        "gene name 1": {
          "name": "gene name 1",
          "description": "The name of the gene used in the diagnostic RT-PCR test.",
          "title": "gene name 1",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 131,
          "slot_uri": "GENEPIO:0001507",
          "alias": "gene_name_1",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr protocol 1": {
          "name": "diagnostic pcr protocol 1",
          "description": "The name and version number of the protocol used for diagnostic marker amplification.",
          "title": "diagnostic pcr protocol 1",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 132,
          "slot_uri": "GENEPIO:0001508",
          "alias": "diagnostic_pcr_protocol_1",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing",
          "range": "xsd:token"
        },
        "diagnostic pcr Ct value 1": {
          "name": "diagnostic pcr Ct value 1",
          "description": "The cycle threshold (Ct) value result from a diagnostic SARS-CoV-2 RT-PCR test.",
          "title": "diagnostic pcr Ct value 1",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 133,
          "slot_uri": "GENEPIO:0001509",
          "alias": "diagnostic_pcr_Ct_value_1",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing",
          "range": "xsd:token"
        },
        "gene name 2": {
          "name": "gene name 2",
          "description": "The name of the gene used in the diagnostic RT-PCR test.",
          "title": "gene name 2",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 134,
          "slot_uri": "GENEPIO:0001510",
          "alias": "gene_name_2",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing"
        },
        "diagnostic pcr protocol 2": {
          "name": "diagnostic pcr protocol 2",
          "description": "The name and version number of the protocol used for diagnostic marker amplification.",
          "title": "diagnostic pcr protocol 2",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 135,
          "slot_uri": "GENEPIO:0001511",
          "alias": "diagnostic_pcr_protocol_2",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing",
          "range": "xsd:token"
        },
        "diagnostic pcr Ct value 2": {
          "name": "diagnostic pcr Ct value 2",
          "description": "The cycle threshold (Ct) value result from a diagnostic SARS-CoV-2 RT-PCR test.",
          "title": "diagnostic pcr Ct value 2",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 136,
          "slot_uri": "GENEPIO:0001512",
          "alias": "diagnostic_pcr_Ct_value_2",
          "owner": "PHA4GE",
          "slot_group": "Pathogen diagnostic testing",
          "range": "xsd:token"
        },
        "title": {
          "name": "title",
          "description": "Short description that will identify  the dataset on public pages.",
          "title": "title",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 137,
          "slot_uri": "GENEPIO:0100323",
          "alias": "title",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "xsd:token"
        },
        "library_strategy": {
          "name": "library_strategy",
          "description": "See NCBI SRA template for details.",
          "title": "library_strategy",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 138,
          "slot_uri": "GENEPIO:0100324",
          "alias": "library_strategy",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "library_strategy menu"
        },
        "library_source": {
          "name": "library_source",
          "description": "See NCBI SRA template for details.",
          "title": "library_source",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 139,
          "slot_uri": "GENEPIO:0100325",
          "alias": "library_source",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "library_source menu"
        },
        "library_selection": {
          "name": "library_selection",
          "description": "See NCBI SRA template for details.",
          "title": "library_selection",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 140,
          "slot_uri": "GENEPIO:0100326",
          "alias": "library_selection",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "library_selection menu"
        },
        "library_layout": {
          "name": "library_layout",
          "description": "See NCBI SRA template for details.",
          "title": "library_layout",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 141,
          "slot_uri": "GENEPIO:0100327",
          "alias": "library_layout",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "library_layout menu"
        },
        "filetype": {
          "name": "filetype",
          "description": "See NCBI SRA template for details.",
          "title": "filetype",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 142,
          "slot_uri": "GENEPIO:0100328",
          "alias": "filetype",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "filetype menu"
        },
        "filename": {
          "name": "filename",
          "description": "See NCBI SRA template for details.",
          "title": "filename",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 143,
          "slot_uri": "GENEPIO:0100329",
          "alias": "filename",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "xsd:token"
        },
        "filename2": {
          "name": "filename2",
          "description": "See NCBI SRA template for details.",
          "title": "filename2",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 144,
          "slot_uri": "GENEPIO:0100330",
          "alias": "filename2",
          "owner": "PHA4GE",
          "slot_group": "NCBI SRA information",
          "range": "xsd:token"
        },
        "authors": {
          "name": "authors",
          "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
          "title": "authors",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 145,
          "slot_uri": "GENEPIO:0001517",
          "alias": "authors",
          "owner": "PHA4GE",
          "slot_group": "Contributor acknowledgement",
          "range": "xsd:token",
          "recommended": true
        },
        "DataHarmonizer provenance": {
          "name": "DataHarmonizer provenance",
          "description": "The DataHarmonizer software version provenance.",
          "title": "DataHarmonizer provenance",
          "from_schema": "https://example.com/CanCOGeN_Covid-19",
          "rank": 146,
          "slot_uri": "GENEPIO:0001518",
          "alias": "DataHarmonizer_provenance",
          "owner": "PHA4GE",
          "slot_group": "Contributor acknowledgement",
          "range": "provenance"
        }
      }
    }
  },
  "source_file": "schema.yaml",
  "settings": {
    "Title_Case": {
      "setting_key": "Title_Case",
      "setting_value": "^(((?<=\\b)[^a-z\\W]\\w*?|[\\W])+)$"
    },
    "UPPER_CASE": {
      "setting_key": "UPPER_CASE",
      "setting_value": "^[A-Z\\W\\d_]*$"
    },
    "lower_case": {
      "setting_key": "lower_case",
      "setting_value": "^[a-z\\W\\d_]*$"
    }
  },
  "@type": "SchemaDefinition"
}