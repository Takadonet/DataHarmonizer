var SCHEMA = {
  "name": "Monkeypox",
  "description": "",
  "id": "https://example.com/monkeypox",
  "prefixes": {
    "linkml": {
      "prefix_prefix": "linkml",
      "prefix_reference": "https://w3id.org/linkml/"
    },
    "GENEPIO": {
      "prefix_prefix": "GENEPIO",
      "prefix_reference": "http://purl.obolibrary.org/obo/GENEPIO_"
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
  "default_prefix": "https://example.com/monkeypox/",
  "types": {
    "WhitespaceMinimizedString": {
      "name": "WhitespaceMinimizedString",
      "description": "A string that has all whitespace trimmed off of beginning and end, and all internal whitespace segments reduced to single spaces. Whitespace includes #x9 (tab), #xA (linefeed), and #xD (carriage return).",
      "typeof": "string",
      "base": "str",
      "uri": "xsd:token"
    },
    "Provenance": {
      "name": "Provenance",
      "description": "A field containing a DataHarmonizer versioning marker. It is issued by DataHarmonizer when validation is applied to a given row of data.",
      "typeof": "string",
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
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Not Applicable": {
          "text": "Not Applicable",
          "meaning": "GENEPIO:0001619"
        },
        "Missing": {
          "text": "Missing",
          "meaning": "GENEPIO:0001618"
        },
        "Not Collected": {
          "text": "Not Collected",
          "meaning": "GENEPIO:0001620"
        },
        "Not Provided": {
          "text": "Not Provided",
          "meaning": "GENEPIO:0001668"
        },
        "Restricted Access": {
          "text": "Restricted Access",
          "meaning": "GENEPIO:0001810"
        }
      }
    },
    "geo_loc_name (state/province/territory) menu": {
      "name": "geo_loc_name (state/province/territory) menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Alberta": {
          "text": "Alberta",
          "meaning": "GAZ:00002566"
        },
        "British Columbia": {
          "text": "British Columbia",
          "meaning": "GAZ:00002562"
        },
        "Manitoba": {
          "text": "Manitoba",
          "meaning": "GAZ:00002571"
        },
        "New Brunswick": {
          "text": "New Brunswick",
          "meaning": "GAZ:00002570"
        },
        "Newfoundland and Labrador": {
          "text": "Newfoundland and Labrador",
          "meaning": "GAZ:00002567"
        },
        "Northwest Territories": {
          "text": "Northwest Territories",
          "meaning": "GAZ:00002575"
        },
        "Nova Scotia": {
          "text": "Nova Scotia",
          "meaning": "GAZ:00002565"
        },
        "Nunavut": {
          "text": "Nunavut",
          "meaning": "GAZ:00002574"
        },
        "Ontario": {
          "text": "Ontario",
          "meaning": "GAZ:00002563"
        },
        "Prince Edward Island": {
          "text": "Prince Edward Island",
          "meaning": "GAZ:00002572"
        },
        "Quebec": {
          "text": "Quebec",
          "meaning": "GAZ:00002569"
        },
        "Saskatchewan": {
          "text": "Saskatchewan",
          "meaning": "GAZ:00002564"
        },
        "Yukon": {
          "text": "Yukon",
          "meaning": "GAZ:00002576"
        }
      }
    },
    "sample collection date precision menu": {
      "name": "sample collection date precision menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "year": {
          "text": "year",
          "meaning": "UO:0000036"
        },
        "month": {
          "text": "month",
          "meaning": "UO:0000035"
        },
        "day": {
          "text": "day",
          "meaning": "UO:0000033"
        }
      }
    },
    "NML submitted specimen type menu": {
      "name": "NML submitted specimen type menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Swab": {
          "text": "Swab",
          "meaning": "OBI:0002600"
        },
        "RNA": {
          "text": "RNA",
          "meaning": "OBI:0000880"
        },
        "mRNA (cDNA)": {
          "text": "mRNA (cDNA)",
          "meaning": "OBI:0002754"
        },
        "Nucleic acid": {
          "text": "Nucleic acid",
          "meaning": "OBI:0001010"
        },
        "Not Applicable": {
          "text": "Not Applicable",
          "meaning": "GENEPIO:0001619"
        }
      }
    },
    "Related specimen relationship type menu": {
      "name": "Related specimen relationship type menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Acute": {
          "text": "Acute",
          "meaning": "HP:0011009"
        },
        "Convalescent": {
          "text": "Convalescent"
        },
        "Familial": {
          "text": "Familial"
        },
        "Follow-up": {
          "text": "Follow-up",
          "meaning": "EFO:0009642"
        },
        "Reinfection testing": {
          "text": "Reinfection testing",
          "is_a": "Follow-up"
        },
        "Previously Submitted": {
          "text": "Previously Submitted"
        },
        "Sequencing/bioinformatics methods development/validation": {
          "text": "Sequencing/bioinformatics methods development/validation"
        },
        "Specimen sampling methods testing": {
          "text": "Specimen sampling methods testing"
        }
      }
    },
    "anatomical material menu": {
      "name": "anatomical material menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Blood": {
          "text": "Blood",
          "meaning": "UBERON:0000178"
        },
        "Blood clot": {
          "text": "Blood clot",
          "meaning": "UBERON:0010210",
          "is_a": "Blood"
        },
        "Blood serum": {
          "text": "Blood serum",
          "meaning": "UBERON:0001977",
          "is_a": "Blood"
        },
        "Blood plasma": {
          "text": "Blood plasma",
          "meaning": "UBERON:0001969",
          "is_a": "Blood"
        },
        "Whole blood": {
          "text": "Whole blood",
          "meaning": "NCIT:C41067",
          "is_a": "Blood"
        },
        "Fluid": {
          "text": "Fluid",
          "meaning": "UBERON:0006314"
        },
        "Saliva": {
          "text": "Saliva",
          "meaning": "UBERON:0001836",
          "is_a": "Fluid"
        },
        "Fluid (cerebrospinal (CSF))": {
          "text": "Fluid (cerebrospinal (CSF))",
          "meaning": "UBERON:0001359",
          "is_a": "Fluid"
        },
        "Fluid (pericardial)": {
          "text": "Fluid (pericardial)",
          "meaning": "UBERON:0002409",
          "is_a": "Fluid"
        },
        "Fluid (pleural)": {
          "text": "Fluid (pleural)",
          "meaning": "UBERON:0001087",
          "is_a": "Fluid"
        },
        "Fluid (vaginal)": {
          "text": "Fluid (vaginal)",
          "meaning": "UBERON:0036243",
          "is_a": "Fluid"
        },
        "Fluid (amniotic)": {
          "text": "Fluid (amniotic)",
          "meaning": "UBERON:0000173",
          "is_a": "Fluid"
        },
        "Lesion": {
          "text": "Lesion",
          "meaning": "NCIT:C3824"
        },
        "Lesion (Macule)": {
          "text": "Lesion (Macule)",
          "meaning": "NCIT:C43278",
          "is_a": "Lesion"
        },
        "Lesion (Papule)": {
          "text": "Lesion (Papule)",
          "meaning": "NCIT:C39690",
          "is_a": "Lesion"
        },
        "Lesion (Pustule)": {
          "text": "Lesion (Pustule)",
          "meaning": "NCIT:C78582",
          "is_a": "Lesion"
        },
        "Lesion (Scab)": {
          "text": "Lesion (Scab)",
          "is_a": "Lesion"
        },
        "Lesion (Vesicle)": {
          "text": "Lesion (Vesicle)",
          "is_a": "Lesion"
        },
        "Rash": {
          "text": "Rash",
          "meaning": "SYMP:0000487"
        },
        "Ulcer": {
          "text": "Ulcer",
          "meaning": "NCIT:C3426"
        },
        "Tissue": {
          "text": "Tissue",
          "meaning": "UBERON:0000479"
        }
      }
    },
    "anatomical part menu": {
      "name": "anatomical part menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Anus": {
          "text": "Anus",
          "meaning": "UBERON:0001245"
        },
        "Arm": {
          "text": "Arm",
          "meaning": "UBERON:0001460"
        },
        "Arm (forearm)": {
          "text": "Arm (forearm)",
          "meaning": "NCIT:C32628",
          "is_a": "Arm"
        },
        "Elbow": {
          "text": "Elbow",
          "meaning": "UBERON:0001461",
          "is_a": "Arm"
        },
        "Back": {
          "text": "Back",
          "meaning": "FMA:14181"
        },
        "Chest": {
          "text": "Chest",
          "meaning": "UBERON:0001443"
        },
        "Foot": {
          "text": "Foot",
          "meaning": "BTO:0000476"
        },
        "Genital area": {
          "text": "Genital area",
          "meaning": "BTO:0003358"
        },
        "Penis": {
          "text": "Penis",
          "meaning": "UBERON:0000989",
          "is_a": "Genital area"
        },
        "Perineum": {
          "text": "Perineum",
          "meaning": "UBERON:0002356",
          "is_a": "Genital area"
        },
        "Scrotum": {
          "text": "Scrotum",
          "meaning": "UBERON:0001300",
          "is_a": "Genital area"
        },
        "Hand": {
          "text": "Hand",
          "meaning": "BTO:0004668"
        },
        "Finger": {
          "text": "Finger",
          "meaning": "FMA:9666",
          "is_a": "Hand"
        },
        "Hand (palm)": {
          "text": "Hand (palm)",
          "meaning": "FMA:24920",
          "is_a": "Hand"
        },
        "Head": {
          "text": "Head",
          "meaning": "UBERON:0000033"
        },
        "Buccal mucosa": {
          "text": "Buccal mucosa",
          "meaning": "UBERON:0006956",
          "is_a": "Head"
        },
        "Eye": {
          "text": "Eye",
          "meaning": "UBERON:0000970",
          "is_a": "Head"
        },
        "Face": {
          "text": "Face",
          "meaning": "UBERON:0001456",
          "is_a": "Head"
        },
        "Forehead": {
          "text": "Forehead",
          "meaning": "UBERON:0008200",
          "is_a": "Head"
        },
        "Lip": {
          "text": "Lip",
          "meaning": "UBERON:0001833",
          "is_a": "Head"
        },
        "Hypogastrium (suprapubic region)": {
          "text": "Hypogastrium (suprapubic region)",
          "meaning": "UBERON:0013203"
        },
        "Leg": {
          "text": "Leg",
          "meaning": "UBERON:0000978"
        },
        "Ankle": {
          "text": "Ankle",
          "meaning": "UBERON:0001512",
          "is_a": "Leg"
        },
        "Knee": {
          "text": "Knee",
          "meaning": "UBERON:0001465",
          "is_a": "Leg"
        },
        "Thigh": {
          "text": "Thigh",
          "meaning": "UBERON:0000376",
          "is_a": "Leg"
        },
        "Nasal Cavity": {
          "text": "Nasal Cavity",
          "meaning": "UBERON:0001707"
        },
        "Anterior Nares": {
          "text": "Anterior Nares",
          "meaning": "UBERON:2001427",
          "is_a": "Nasal Cavity"
        },
        "Inferior Nasal Turbinate": {
          "text": "Inferior Nasal Turbinate",
          "meaning": "UBERON:0005921",
          "is_a": "Nasal Cavity"
        },
        "Middle Nasal Turbinate": {
          "text": "Middle Nasal Turbinate",
          "meaning": "UBERON:0005922",
          "is_a": "Nasal Cavity"
        },
        "Nasopharynx (NP)": {
          "text": "Nasopharynx (NP)",
          "meaning": "UBERON:0001728"
        },
        "Neck": {
          "text": "Neck",
          "meaning": "UBERON:0000974"
        },
        "Oropharynx (OP)": {
          "text": "Oropharynx (OP)",
          "meaning": "UBERON:0001729"
        },
        "Rectum": {
          "text": "Rectum",
          "meaning": "UBERON:0001052"
        },
        "Skin": {
          "text": "Skin",
          "meaning": "UBERON:0001003"
        },
        "Trachea": {
          "text": "Trachea",
          "meaning": "UBERON:0003126"
        }
      }
    },
    "body product menu": {
      "name": "body product menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Breast Milk": {
          "text": "Breast Milk",
          "meaning": "UBERON:0001913"
        },
        "Feces": {
          "text": "Feces",
          "meaning": "UBERON:0001988"
        },
        "Fluid (discharge)": {
          "text": "Fluid (discharge)",
          "meaning": "SYMP:0000651"
        },
        "Fluid (seminal)": {
          "text": "Fluid (seminal)",
          "meaning": "UBERON:0006530"
        },
        "Mucus": {
          "text": "Mucus",
          "meaning": "UBERON:0000912"
        },
        "Sputum": {
          "text": "Sputum",
          "meaning": "UBERON:0007311",
          "is_a": "Mucus"
        },
        "Sweat": {
          "text": "Sweat",
          "meaning": "UBERON:0001089"
        },
        "Tear": {
          "text": "Tear",
          "meaning": "UBERON:0001827"
        },
        "Urine": {
          "text": "Urine",
          "meaning": "UBERON:0001088"
        }
      }
    },
    "collection method menu": {
      "name": "collection method menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Amniocentesis": {
          "text": "Amniocentesis",
          "meaning": "NCIT:C52009"
        },
        "Aspiration": {
          "text": "Aspiration",
          "meaning": "NCIT:C15631"
        },
        "Suprapubic Aspiration": {
          "text": "Suprapubic Aspiration",
          "meaning": "GENEPIO:0100028",
          "is_a": "Aspiration"
        },
        "Tracheal aspiration": {
          "text": "Tracheal aspiration",
          "meaning": "GENEPIO:0100029",
          "is_a": "Aspiration"
        },
        "Vacuum Aspiration": {
          "text": "Vacuum Aspiration",
          "meaning": "GENEPIO:0100030",
          "is_a": "Aspiration"
        },
        "Biopsy": {
          "text": "Biopsy",
          "meaning": "OBI:0002650"
        },
        "Needle Biopsy": {
          "text": "Needle Biopsy",
          "meaning": "OBI:0002651",
          "is_a": "Biopsy"
        },
        "Filtration": {
          "text": "Filtration",
          "meaning": "OBI:0302885"
        },
        "Air filtration": {
          "text": "Air filtration",
          "meaning": "GENEPIO:0100031",
          "is_a": "Filtration"
        },
        "Lavage": {
          "text": "Lavage",
          "meaning": "OBI:0600044"
        },
        "Bronchoalveolar lavage (BAL)": {
          "text": "Bronchoalveolar lavage (BAL)",
          "meaning": "GENEPIO:0100032",
          "is_a": "Lavage"
        },
        "Gastric Lavage": {
          "text": "Gastric Lavage",
          "meaning": "GENEPIO:0100033",
          "is_a": "Lavage"
        },
        "Lumbar Puncture": {
          "text": "Lumbar Puncture",
          "meaning": "NCIT:C15327"
        },
        "Necropsy": {
          "text": "Necropsy",
          "meaning": "MMO:0000344"
        },
        "Phlebotomy": {
          "text": "Phlebotomy",
          "meaning": "NCIT:C28221"
        },
        "Rinsing": {
          "text": "Rinsing",
          "meaning": "GENEPIO:0002116"
        },
        "Saline gargle (mouth rinse and gargle)": {
          "text": "Saline gargle (mouth rinse and gargle)",
          "meaning": "GENEPIO:0100034",
          "is_a": "Rinsing"
        },
        "Scraping": {
          "text": "Scraping",
          "meaning": "GENEPIO:0100035"
        },
        "Swabbing": {
          "text": "Swabbing",
          "meaning": "GENEPIO:0002117"
        },
        "Finger Prick": {
          "text": "Finger Prick",
          "meaning": "GENEPIO:0100036",
          "is_a": "Swabbing"
        },
        "Thoracentesis (chest tap)": {
          "text": "Thoracentesis (chest tap)",
          "meaning": "NCIT:C15392"
        }
      }
    },
    "collection device menu": {
      "name": "collection device menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Blood Collection Tube": {
          "text": "Blood Collection Tube",
          "meaning": "OBI:0002859"
        },
        "Bronchoscope": {
          "text": "Bronchoscope",
          "meaning": "OBI:0002826"
        },
        "Collection Container": {
          "text": "Collection Container",
          "meaning": "OBI:0002088"
        },
        "Collection Cup": {
          "text": "Collection Cup",
          "meaning": "GENEPIO:0100026"
        },
        "Filter": {
          "text": "Filter",
          "meaning": "GENEPIO:0100103"
        },
        "Needle": {
          "text": "Needle",
          "meaning": "OBI:0000436"
        },
        "Serum Collection Tube": {
          "text": "Serum Collection Tube",
          "meaning": "OBI:0002860"
        },
        "Sputum Collection Tube": {
          "text": "Sputum Collection Tube",
          "meaning": "OBI:0002861"
        },
        "Suction Catheter": {
          "text": "Suction Catheter",
          "meaning": "OBI:0002831"
        },
        "Swab": {
          "text": "Swab",
          "meaning": "GENEPIO:0100027"
        },
        "Dry swab": {
          "text": "Dry swab",
          "is_a": "Swab"
        },
        "Urine Collection Tube": {
          "text": "Urine Collection Tube",
          "meaning": "OBI:0002862"
        },
        "Universal Transport Medium (UTM)": {
          "text": "Universal Transport Medium (UTM)"
        },
        "Virus Transport Medium": {
          "text": "Virus Transport Medium",
          "meaning": "OBI:0002866"
        }
      }
    },
    "host (scientific name) menu": {
      "name": "host (scientific name) menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Homo sapiens": {
          "text": "Homo sapiens",
          "meaning": "NCBITaxon:9606",
          "exact_mappings": [
            "NML_LIMS:Human"
          ]
        }
      }
    },
    "organism menu": {
      "name": "organism menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Monkeypox virus": {
          "text": "Monkeypox virus",
          "meaning": "NCBITaxon:10244"
        }
      }
    },
    "host disease menu": {
      "name": "host disease menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Monkeypox": {
          "text": "Monkeypox",
          "meaning": "MONDO:0002594"
        }
      }
    },
    "purpose of sampling menu": {
      "name": "purpose of sampling menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Cluster/Outbreak investigation": {
          "text": "Cluster/Outbreak investigation",
          "meaning": "GENEPIO:0100001"
        },
        "Diagnostic testing": {
          "text": "Diagnostic testing",
          "meaning": "GENEPIO:0100002"
        },
        "Research": {
          "text": "Research",
          "meaning": "GENEPIO:0100003"
        },
        "Surveillance": {
          "text": "Surveillance",
          "meaning": "GENEPIO:0100004"
        }
      }
    },
    "purpose of sequencing menu": {
      "name": "purpose of sequencing menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Baseline surveillance (random sampling)": {
          "text": "Baseline surveillance (random sampling)",
          "meaning": "GENEPIO:0100005"
        },
        "Targeted surveillance (non-random sampling)": {
          "text": "Targeted surveillance (non-random sampling)",
          "meaning": "GENEPIO:0100006"
        },
        "Priority surveillance project": {
          "text": "Priority surveillance project",
          "meaning": "GENEPIO:0100007",
          "is_a": "Targeted surveillance (non-random sampling)"
        },
        "Longitudinal surveillance (repeat sampling of individuals)": {
          "text": "Longitudinal surveillance (repeat sampling of individuals)",
          "meaning": "GENEPIO:0100009",
          "is_a": "Priority surveillance project"
        },
        "Re-infection surveillance": {
          "text": "Re-infection surveillance",
          "meaning": "GENEPIO:0100010",
          "is_a": "Priority surveillance project"
        },
        "Vaccine escape surveillance": {
          "text": "Vaccine escape surveillance",
          "meaning": "GENEPIO:0100011",
          "is_a": "Priority surveillance project"
        },
        "Travel-associated surveillance": {
          "text": "Travel-associated surveillance",
          "meaning": "GENEPIO:0100012",
          "is_a": "Priority surveillance project"
        },
        "Domestic travel surveillance": {
          "text": "Domestic travel surveillance",
          "meaning": "GENEPIO:0100013",
          "is_a": "Travel-associated surveillance"
        },
        "Interstate/ interprovincial travel surveillance": {
          "text": "Interstate/ interprovincial travel surveillance",
          "meaning": "GENEPIO:0100275",
          "is_a": "Domestic travel surveillance"
        },
        "Intra-state/ intra-provincial travel surveillance": {
          "text": "Intra-state/ intra-provincial travel surveillance",
          "meaning": "GENEPIO:0100276",
          "is_a": "Domestic travel surveillance"
        },
        "International travel surveillance": {
          "text": "International travel surveillance",
          "meaning": "GENEPIO:0100014",
          "is_a": "Travel-associated surveillance"
        },
        "Cluster/Outbreak investigation": {
          "text": "Cluster/Outbreak investigation",
          "meaning": "GENEPIO:0100019"
        },
        "Multi-jurisdictional outbreak investigation": {
          "text": "Multi-jurisdictional outbreak investigation",
          "meaning": "GENEPIO:0100020",
          "is_a": "Cluster/Outbreak investigation"
        },
        "Intra-jurisdictional outbreak investigation": {
          "text": "Intra-jurisdictional outbreak investigation",
          "meaning": "GENEPIO:0100021",
          "is_a": "Cluster/Outbreak investigation"
        },
        "Research": {
          "text": "Research",
          "meaning": "GENEPIO:0100022"
        },
        "Viral passage experiment": {
          "text": "Viral passage experiment",
          "meaning": "GENEPIO:0100023",
          "is_a": "Research"
        },
        "Protocol testing experiment": {
          "text": "Protocol testing experiment",
          "meaning": "GENEPIO:0100024",
          "is_a": "Research"
        },
        "Retrospective sequencing": {
          "text": "Retrospective sequencing",
          "meaning": "GENEPIO:0100356"
        }
      }
    },
    "sequencing instrument menu": {
      "name": "sequencing instrument menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Illumina": {
          "text": "Illumina",
          "meaning": "GENEPIO:0100105"
        },
        "Illumina Genome Analyzer": {
          "text": "Illumina Genome Analyzer",
          "meaning": "GENEPIO:0100106",
          "is_a": "Illumina"
        },
        "Illumina Genome Analyzer II": {
          "text": "Illumina Genome Analyzer II",
          "meaning": "GENEPIO:0100107",
          "is_a": "Illumina Genome Analyzer"
        },
        "Illumina Genome Analyzer IIx": {
          "text": "Illumina Genome Analyzer IIx",
          "meaning": "GENEPIO:0100108",
          "is_a": "Illumina Genome Analyzer"
        },
        "Illumina HiScanSQ": {
          "text": "Illumina HiScanSQ",
          "meaning": "GENEPIO:0100109",
          "is_a": "Illumina"
        },
        "Illumina HiSeq": {
          "text": "Illumina HiSeq",
          "meaning": "GENEPIO:0100110",
          "is_a": "Illumina"
        },
        "Illumina HiSeq X": {
          "text": "Illumina HiSeq X",
          "meaning": "GENEPIO:0100111",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq X Five": {
          "text": "Illumina HiSeq X Five",
          "meaning": "GENEPIO:0100112",
          "is_a": "Illumina HiSeq X"
        },
        "Illumina HiSeq X Ten": {
          "text": "Illumina HiSeq X Ten",
          "meaning": "GENEPIO:0100113",
          "is_a": "Illumina HiSeq X"
        },
        "Illumina HiSeq 1000": {
          "text": "Illumina HiSeq 1000",
          "meaning": "GENEPIO:0100114",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq 1500": {
          "text": "Illumina HiSeq 1500",
          "meaning": "GENEPIO:0100115",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq 2000": {
          "text": "Illumina HiSeq 2000",
          "meaning": "GENEPIO:0100116",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq 2500": {
          "text": "Illumina HiSeq 2500",
          "meaning": "GENEPIO:0100117",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq 3000": {
          "text": "Illumina HiSeq 3000",
          "meaning": "GENEPIO:0100118",
          "is_a": "Illumina HiSeq"
        },
        "Illumina HiSeq 4000": {
          "text": "Illumina HiSeq 4000",
          "meaning": "GENEPIO:0100119",
          "is_a": "Illumina HiSeq"
        },
        "Illumina iSeq": {
          "text": "Illumina iSeq",
          "meaning": "GENEPIO:0100120",
          "is_a": "Illumina"
        },
        "Illumina iSeq 100": {
          "text": "Illumina iSeq 100",
          "meaning": "GENEPIO:0100121",
          "is_a": "Illumina iSeq"
        },
        "Illumina NovaSeq": {
          "text": "Illumina NovaSeq",
          "meaning": "GENEPIO:0100122",
          "is_a": "Illumina"
        },
        "Illumina NovaSeq 6000": {
          "text": "Illumina NovaSeq 6000",
          "meaning": "GENEPIO:0100123",
          "is_a": "Illumina NovaSeq"
        },
        "Illumina MiniSeq": {
          "text": "Illumina MiniSeq",
          "meaning": "GENEPIO:0100124",
          "is_a": "Illumina"
        },
        "Illumina MiSeq": {
          "text": "Illumina MiSeq",
          "meaning": "GENEPIO:0100125",
          "is_a": "Illumina"
        },
        "Illumina NextSeq": {
          "text": "Illumina NextSeq",
          "meaning": "GENEPIO:0100126",
          "is_a": "Illumina"
        },
        "Illumina NextSeq 500": {
          "text": "Illumina NextSeq 500",
          "meaning": "GENEPIO:0100127",
          "is_a": "Illumina NextSeq"
        },
        "Illumina NextSeq 550": {
          "text": "Illumina NextSeq 550",
          "meaning": "GENEPIO:0100128",
          "is_a": "Illumina NextSeq"
        },
        "Illumina NextSeq 2000": {
          "text": "Illumina NextSeq 2000",
          "meaning": "GENEPIO:0100129",
          "is_a": "Illumina NextSeq"
        },
        "Pacific Biosciences": {
          "text": "Pacific Biosciences",
          "meaning": "GENEPIO:0100130"
        },
        "PacBio RS": {
          "text": "PacBio RS",
          "meaning": "GENEPIO:0100131",
          "is_a": "Pacific Biosciences"
        },
        "PacBio RS II": {
          "text": "PacBio RS II",
          "meaning": "GENEPIO:0100132",
          "is_a": "Pacific Biosciences"
        },
        "PacBio Sequel": {
          "text": "PacBio Sequel",
          "meaning": "GENEPIO:0100133",
          "is_a": "Pacific Biosciences"
        },
        "PacBio Sequel II": {
          "text": "PacBio Sequel II",
          "meaning": "GENEPIO:0100134",
          "is_a": "Pacific Biosciences"
        },
        "Ion Torrent": {
          "text": "Ion Torrent",
          "meaning": "GENEPIO:0100135"
        },
        "Ion Torrent PGM": {
          "text": "Ion Torrent PGM",
          "meaning": "GENEPIO:0100136",
          "is_a": "Ion Torrent"
        },
        "Ion Torrent Proton": {
          "text": "Ion Torrent Proton",
          "meaning": "GENEPIO:0100137",
          "is_a": "Ion Torrent"
        },
        "Ion Torrent S5 XL": {
          "text": "Ion Torrent S5 XL",
          "meaning": "GENEPIO:0100138",
          "is_a": "Ion Torrent"
        },
        "Ion Torrent S5": {
          "text": "Ion Torrent S5",
          "meaning": "GENEPIO:0100139",
          "is_a": "Ion Torrent"
        },
        "Oxford Nanopore": {
          "text": "Oxford Nanopore",
          "meaning": "GENEPIO:0100140"
        },
        "Oxford Nanopore GridION": {
          "text": "Oxford Nanopore GridION",
          "meaning": "GENEPIO:0100141",
          "is_a": "Oxford Nanopore"
        },
        "Oxford Nanopore MinION": {
          "text": "Oxford Nanopore MinION",
          "meaning": "GENEPIO:0100142",
          "is_a": "Oxford Nanopore"
        },
        "Oxford Nanopore PromethION": {
          "text": "Oxford Nanopore PromethION",
          "meaning": "GENEPIO:0100143",
          "is_a": "Oxford Nanopore"
        },
        "BGI Genomics": {
          "text": "BGI Genomics",
          "meaning": "GENEPIO:0100144"
        },
        "BGI Genomics BGISEQ-500": {
          "text": "BGI Genomics BGISEQ-500",
          "meaning": "GENEPIO:0100145",
          "is_a": "BGI Genomics"
        },
        "MGI": {
          "text": "MGI",
          "meaning": "GENEPIO:0100146"
        },
        "MGI DNBSEQ-T7": {
          "text": "MGI DNBSEQ-T7",
          "meaning": "GENEPIO:0100147",
          "is_a": "MGI"
        },
        "MGI DNBSEQ-G400": {
          "text": "MGI DNBSEQ-G400",
          "meaning": "GENEPIO:0100148",
          "is_a": "MGI"
        },
        "MGI DNBSEQ-G400 FAST": {
          "text": "MGI DNBSEQ-G400 FAST",
          "meaning": "GENEPIO:0100149",
          "is_a": "MGI"
        },
        "MGI DNBSEQ-G50": {
          "text": "MGI DNBSEQ-G50",
          "meaning": "GENEPIO:0100150",
          "is_a": "MGI"
        }
      }
    },
    "sequence submitted by menu": {
      "name": "sequence submitted by menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Alberta Precision Labs (APL)": {
          "text": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab North (APLN)": {
          "text": "Alberta ProvLab North (APLN)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab South (APLS)": {
          "text": "Alberta ProvLab South (APLS)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "BCCDC Public Health Laboratory": {
          "text": "BCCDC Public Health Laboratory"
        },
        "Canadore College": {
          "text": "Canadore College"
        },
        "The Centre for Applied Genomics (TCAG)": {
          "text": "The Centre for Applied Genomics (TCAG)"
        },
        "Dynacare": {
          "text": "Dynacare"
        },
        "Dynacare (Brampton)": {
          "text": "Dynacare (Brampton)"
        },
        "Dynacare (Manitoba)": {
          "text": "Dynacare (Manitoba)"
        },
        "The Hospital for Sick Children (SickKids)": {
          "text": "The Hospital for Sick Children (SickKids)"
        },
        "Laboratoire de santé publique du Québec (LSPQ)": {
          "text": "Laboratoire de santé publique du Québec (LSPQ)"
        },
        "Manitoba Cadham Provincial Laboratory": {
          "text": "Manitoba Cadham Provincial Laboratory"
        },
        "McGill University": {
          "text": "McGill University"
        },
        "McMaster University": {
          "text": "McMaster University"
        },
        "National Microbiology Laboratory (NML)": {
          "text": "National Microbiology Laboratory (NML)"
        },
        "New Brunswick - Vitalité Health Network": {
          "text": "New Brunswick - Vitalité Health Network"
        },
        "Newfoundland and Labrador - Eastern Health": {
          "text": "Newfoundland and Labrador - Eastern Health"
        },
        "Nova Scotia Health Authority": {
          "text": "Nova Scotia Health Authority"
        },
        "Ontario Institute for Cancer Research (OICR)": {
          "text": "Ontario Institute for Cancer Research (OICR)"
        },
        "Prince Edward Island - Health PEI": {
          "text": "Prince Edward Island - Health PEI"
        },
        "Public Health Ontario (PHO)": {
          "text": "Public Health Ontario (PHO)"
        },
        "Queen's University / Kingston Health Sciences Centre": {
          "text": "Queen's University / Kingston Health Sciences Centre"
        },
        "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {
          "text": "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)"
        },
        "Sunnybrook Health Sciences Centre": {
          "text": "Sunnybrook Health Sciences Centre"
        },
        "Thunder Bay Regional Health Sciences Centre": {
          "text": "Thunder Bay Regional Health Sciences Centre"
        }
      }
    },
    "sequenced by menu": {
      "name": "sequenced by menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Alberta Precision Labs (APL)": {
          "text": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab North (APLN)": {
          "text": "Alberta ProvLab North (APLN)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab South (APLS)": {
          "text": "Alberta ProvLab South (APLS)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "BCCDC Public Health Laboratory": {
          "text": "BCCDC Public Health Laboratory"
        },
        "Canadore College": {
          "text": "Canadore College"
        },
        "The Centre for Applied Genomics (TCAG)": {
          "text": "The Centre for Applied Genomics (TCAG)"
        },
        "Dynacare": {
          "text": "Dynacare"
        },
        "Dynacare (Brampton)": {
          "text": "Dynacare (Brampton)"
        },
        "Dynacare (Manitoba)": {
          "text": "Dynacare (Manitoba)"
        },
        "The Hospital for Sick Children (SickKids)": {
          "text": "The Hospital for Sick Children (SickKids)"
        },
        "Laboratoire de santé publique du Québec (LSPQ)": {
          "text": "Laboratoire de santé publique du Québec (LSPQ)"
        },
        "Manitoba Cadham Provincial Laboratory": {
          "text": "Manitoba Cadham Provincial Laboratory"
        },
        "McGill University": {
          "text": "McGill University"
        },
        "McMaster University": {
          "text": "McMaster University"
        },
        "National Microbiology Laboratory (NML)": {
          "text": "National Microbiology Laboratory (NML)"
        },
        "New Brunswick - Vitalité Health Network": {
          "text": "New Brunswick - Vitalité Health Network"
        },
        "Newfoundland and Labrador - Eastern Health": {
          "text": "Newfoundland and Labrador - Eastern Health"
        },
        "Nova Scotia Health Authority": {
          "text": "Nova Scotia Health Authority"
        },
        "Ontario Institute for Cancer Research (OICR)": {
          "text": "Ontario Institute for Cancer Research (OICR)"
        },
        "Prince Edward Island - Health PEI": {
          "text": "Prince Edward Island - Health PEI"
        },
        "Public Health Ontario (PHO)": {
          "text": "Public Health Ontario (PHO)"
        },
        "Queen's University / Kingston Health Sciences Centre": {
          "text": "Queen's University / Kingston Health Sciences Centre"
        },
        "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {
          "text": "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)"
        },
        "Sunnybrook Health Sciences Centre": {
          "text": "Sunnybrook Health Sciences Centre"
        },
        "Thunder Bay Regional Health Sciences Centre": {
          "text": "Thunder Bay Regional Health Sciences Centre"
        }
      }
    },
    "sample collected by menu": {
      "name": "sample collected by menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Alberta Precision Labs (APL)": {
          "text": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab North (APLN)": {
          "text": "Alberta ProvLab North (APLN)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "Alberta ProvLab South (APLS)": {
          "text": "Alberta ProvLab South (APLS)",
          "is_a": "Alberta Precision Labs (APL)"
        },
        "BCCDC Public Health Laboratory": {
          "text": "BCCDC Public Health Laboratory"
        },
        "Dynacare": {
          "text": "Dynacare"
        },
        "Dynacare (Manitoba)": {
          "text": "Dynacare (Manitoba)"
        },
        "Dynacare (Brampton)": {
          "text": "Dynacare (Brampton)"
        },
        "Eastern Ontario Regional Laboratory Association": {
          "text": "Eastern Ontario Regional Laboratory Association"
        },
        "Hamilton Health Sciences": {
          "text": "Hamilton Health Sciences"
        },
        "The Hospital for Sick Children (SickKids)": {
          "text": "The Hospital for Sick Children (SickKids)"
        },
        "Laboratoire de santé publique du Québec (LSPQ)": {
          "text": "Laboratoire de santé publique du Québec (LSPQ)"
        },
        "Lake of the Woods District Hospital - Ontario": {
          "text": "Lake of the Woods District Hospital - Ontario"
        },
        "LifeLabs": {
          "text": "LifeLabs"
        },
        "LifeLabs (Ontario)": {
          "text": "LifeLabs (Ontario)"
        },
        "Manitoba Cadham Provincial Laboratory": {
          "text": "Manitoba Cadham Provincial Laboratory"
        },
        "McMaster University": {
          "text": "McMaster University"
        },
        "Mount Sinai Hospital": {
          "text": "Mount Sinai Hospital"
        },
        "National Microbiology Laboratory (NML)": {
          "text": "National Microbiology Laboratory (NML)"
        },
        "New Brunswick - Vitalité Health Network": {
          "text": "New Brunswick - Vitalité Health Network"
        },
        "Newfoundland and Labrador - Eastern Health": {
          "text": "Newfoundland and Labrador - Eastern Health"
        },
        "Nova Scotia Health Authority": {
          "text": "Nova Scotia Health Authority"
        },
        "Nunavut": {
          "text": "Nunavut"
        },
        "Ontario Institute for Cancer Research (OICR)": {
          "text": "Ontario Institute for Cancer Research (OICR)"
        },
        "Prince Edward Island - Health PEI": {
          "text": "Prince Edward Island - Health PEI"
        },
        "Public Health Ontario (PHO)": {
          "text": "Public Health Ontario (PHO)"
        },
        "Queen's University / Kingston Health Sciences Centre": {
          "text": "Queen's University / Kingston Health Sciences Centre"
        },
        "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {
          "text": "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)"
        },
        "Shared Hospital Laboratory": {
          "text": "Shared Hospital Laboratory"
        },
        "St. John's Rehab at Sunnybrook Hospital": {
          "text": "St. John's Rehab at Sunnybrook Hospital"
        },
        "Switch Health": {
          "text": "Switch Health"
        },
        "Sunnybrook Health Sciences Centre": {
          "text": "Sunnybrook Health Sciences Centre"
        },
        "Unity Health Toronto": {
          "text": "Unity Health Toronto"
        },
        "William Osler Health System": {
          "text": "William Osler Health System"
        }
      }
    },
    "geo_loc_name (country) menu": {
      "name": "geo_loc_name (country) menu",
      "from_schema": "https://example.com/monkeypox",
      "permissible_values": {
        "Afghanistan": {
          "text": "Afghanistan",
          "meaning": "GAZ:00006882"
        },
        "Albania": {
          "text": "Albania",
          "meaning": "GAZ:00002953"
        },
        "Algeria": {
          "text": "Algeria",
          "meaning": "GAZ:00000563"
        },
        "American Samoa": {
          "text": "American Samoa",
          "meaning": "GAZ:00003957"
        },
        "Andorra": {
          "text": "Andorra",
          "meaning": "GAZ:00002948"
        },
        "Angola": {
          "text": "Angola",
          "meaning": "GAZ:00001095"
        },
        "Anguilla": {
          "text": "Anguilla",
          "meaning": "GAZ:00009159"
        },
        "Antarctica": {
          "text": "Antarctica",
          "meaning": "GAZ:00000462"
        },
        "Antigua and Barbuda": {
          "text": "Antigua and Barbuda",
          "meaning": "GAZ:00006883"
        },
        "Argentina": {
          "text": "Argentina",
          "meaning": "GAZ:00002928"
        },
        "Armenia": {
          "text": "Armenia",
          "meaning": "GAZ:00004094"
        },
        "Aruba": {
          "text": "Aruba",
          "meaning": "GAZ:00004025"
        },
        "Ashmore and Cartier Islands": {
          "text": "Ashmore and Cartier Islands",
          "meaning": "GAZ:00005901"
        },
        "Australia": {
          "text": "Australia",
          "meaning": "GAZ:00000463"
        },
        "Austria": {
          "text": "Austria",
          "meaning": "GAZ:00002942"
        },
        "Azerbaijan": {
          "text": "Azerbaijan",
          "meaning": "GAZ:00004941"
        },
        "Bahamas": {
          "text": "Bahamas",
          "meaning": "GAZ:00002733"
        },
        "Bahrain": {
          "text": "Bahrain",
          "meaning": "GAZ:00005281"
        },
        "Baker Island": {
          "text": "Baker Island",
          "meaning": "GAZ:00007117"
        },
        "Bangladesh": {
          "text": "Bangladesh",
          "meaning": "GAZ:00003750"
        },
        "Barbados": {
          "text": "Barbados",
          "meaning": "GAZ:00001251"
        },
        "Bassas da India": {
          "text": "Bassas da India",
          "meaning": "GAZ:00005810"
        },
        "Belarus": {
          "text": "Belarus",
          "meaning": "GAZ:00006886"
        },
        "Belgium": {
          "text": "Belgium",
          "meaning": "GAZ:00002938"
        },
        "Belize": {
          "text": "Belize",
          "meaning": "GAZ:00002934"
        },
        "Benin": {
          "text": "Benin",
          "meaning": "GAZ:00000904"
        },
        "Bermuda": {
          "text": "Bermuda",
          "meaning": "GAZ:00001264"
        },
        "Bhutan": {
          "text": "Bhutan",
          "meaning": "GAZ:00003920"
        },
        "Bolivia": {
          "text": "Bolivia",
          "meaning": "GAZ:00002511"
        },
        "Borneo": {
          "text": "Borneo",
          "meaning": "GAZ:00025355"
        },
        "Bosnia and Herzegovina": {
          "text": "Bosnia and Herzegovina",
          "meaning": "GAZ:00006887"
        },
        "Botswana": {
          "text": "Botswana",
          "meaning": "GAZ:00001097"
        },
        "Bouvet Island": {
          "text": "Bouvet Island",
          "meaning": "GAZ:00001453"
        },
        "Brazil": {
          "text": "Brazil",
          "meaning": "GAZ:00002828"
        },
        "British Virgin Islands": {
          "text": "British Virgin Islands",
          "meaning": "GAZ:00003961"
        },
        "Brunei": {
          "text": "Brunei",
          "meaning": "GAZ:00003901"
        },
        "Bulgaria": {
          "text": "Bulgaria",
          "meaning": "GAZ:00002950"
        },
        "Burkina Faso": {
          "text": "Burkina Faso",
          "meaning": "GAZ:00000905"
        },
        "Burundi": {
          "text": "Burundi",
          "meaning": "GAZ:00001090"
        },
        "Cambodia": {
          "text": "Cambodia",
          "meaning": "GAZ:00006888"
        },
        "Cameroon": {
          "text": "Cameroon",
          "meaning": "GAZ:00001093"
        },
        "Canada": {
          "text": "Canada",
          "meaning": "GAZ:00002560"
        },
        "Cape Verde": {
          "text": "Cape Verde",
          "meaning": "GAZ:00001227"
        },
        "Cayman Islands": {
          "text": "Cayman Islands",
          "meaning": "GAZ:00003986"
        },
        "Central African Republic": {
          "text": "Central African Republic",
          "meaning": "GAZ:00001089"
        },
        "Chad": {
          "text": "Chad",
          "meaning": "GAZ:00000586"
        },
        "Chile": {
          "text": "Chile",
          "meaning": "GAZ:00002825"
        },
        "China": {
          "text": "China",
          "meaning": "GAZ:00002845"
        },
        "Christmas Island": {
          "text": "Christmas Island",
          "meaning": "GAZ:00005915"
        },
        "Clipperton Island": {
          "text": "Clipperton Island",
          "meaning": "GAZ:00005838"
        },
        "Cocos Islands": {
          "text": "Cocos Islands",
          "meaning": "GAZ:00009721"
        },
        "Colombia": {
          "text": "Colombia",
          "meaning": "GAZ:00002929"
        },
        "Comoros": {
          "text": "Comoros",
          "meaning": "GAZ:00005820"
        },
        "Cook Islands": {
          "text": "Cook Islands",
          "meaning": "GAZ:00053798"
        },
        "Coral Sea Islands": {
          "text": "Coral Sea Islands",
          "meaning": "GAZ:00005917"
        },
        "Costa Rica": {
          "text": "Costa Rica",
          "meaning": "GAZ:00002901"
        },
        "Cote d'Ivoire": {
          "text": "Cote d'Ivoire",
          "meaning": "GAZ:00000906"
        },
        "Croatia": {
          "text": "Croatia",
          "meaning": "GAZ:00002719"
        },
        "Cuba": {
          "text": "Cuba",
          "meaning": "GAZ:00003762"
        },
        "Curacao": {
          "text": "Curacao",
          "meaning": "GAZ:00012582"
        },
        "Cyprus": {
          "text": "Cyprus",
          "meaning": "GAZ:00004006"
        },
        "Czech Republic": {
          "text": "Czech Republic",
          "meaning": "GAZ:00002954"
        },
        "Democratic Republic of the Congo": {
          "text": "Democratic Republic of the Congo",
          "meaning": "GAZ:00001086"
        },
        "Denmark": {
          "text": "Denmark",
          "meaning": "GAZ:00005852"
        },
        "Djibouti": {
          "text": "Djibouti",
          "meaning": "GAZ:00000582"
        },
        "Dominica": {
          "text": "Dominica",
          "meaning": "GAZ:00006890"
        },
        "Dominican Republic": {
          "text": "Dominican Republic",
          "meaning": "GAZ:00003952"
        },
        "Ecuador": {
          "text": "Ecuador",
          "meaning": "GAZ:00002912"
        },
        "Egypt": {
          "text": "Egypt",
          "meaning": "GAZ:00003934"
        },
        "El Salvador": {
          "text": "El Salvador",
          "meaning": "GAZ:00002935"
        },
        "Equatorial Guinea": {
          "text": "Equatorial Guinea",
          "meaning": "GAZ:00001091"
        },
        "Eritrea": {
          "text": "Eritrea",
          "meaning": "GAZ:00000581"
        },
        "Estonia": {
          "text": "Estonia",
          "meaning": "GAZ:00002959"
        },
        "Eswatini": {
          "text": "Eswatini",
          "meaning": "GAZ:00001099"
        },
        "Ethiopia": {
          "text": "Ethiopia",
          "meaning": "GAZ:00000567"
        },
        "Europa Island": {
          "text": "Europa Island",
          "meaning": "GAZ:00005811"
        },
        "Falkland Islands (Islas Malvinas)": {
          "text": "Falkland Islands (Islas Malvinas)",
          "meaning": "GAZ:00001412"
        },
        "Faroe Islands": {
          "text": "Faroe Islands",
          "meaning": "GAZ:00059206"
        },
        "Fiji": {
          "text": "Fiji",
          "meaning": "GAZ:00006891"
        },
        "Finland": {
          "text": "Finland",
          "meaning": "GAZ:00002937"
        },
        "France": {
          "text": "France",
          "meaning": "GAZ:00003940"
        },
        "French Guiana": {
          "text": "French Guiana",
          "meaning": "GAZ:00002516"
        },
        "French Polynesia": {
          "text": "French Polynesia",
          "meaning": "GAZ:00002918"
        },
        "French Southern and Antarctic Lands": {
          "text": "French Southern and Antarctic Lands",
          "meaning": "GAZ:00003753"
        },
        "Gabon": {
          "text": "Gabon",
          "meaning": "GAZ:00001092"
        },
        "Gambia": {
          "text": "Gambia",
          "meaning": "GAZ:00000907"
        },
        "Gaza Strip": {
          "text": "Gaza Strip",
          "meaning": "GAZ:00009571"
        },
        "Georgia": {
          "text": "Georgia",
          "meaning": "GAZ:00004942"
        },
        "Germany": {
          "text": "Germany",
          "meaning": "GAZ:00002646"
        },
        "Ghana": {
          "text": "Ghana",
          "meaning": "GAZ:00000908"
        },
        "Gibraltar": {
          "text": "Gibraltar",
          "meaning": "GAZ:00003987"
        },
        "Glorioso Islands": {
          "text": "Glorioso Islands",
          "meaning": "GAZ:00005808"
        },
        "Greece": {
          "text": "Greece",
          "meaning": "GAZ:00002945"
        },
        "Greenland": {
          "text": "Greenland",
          "meaning": "GAZ:00001507"
        },
        "Grenada": {
          "text": "Grenada",
          "meaning": "GAZ:02000573"
        },
        "Guadeloupe": {
          "text": "Guadeloupe",
          "meaning": "GAZ:00067142"
        },
        "Guam": {
          "text": "Guam",
          "meaning": "GAZ:00003706"
        },
        "Guatemala": {
          "text": "Guatemala",
          "meaning": "GAZ:00002936"
        },
        "Guernsey": {
          "text": "Guernsey",
          "meaning": "GAZ:00001550"
        },
        "Guinea": {
          "text": "Guinea",
          "meaning": "GAZ:00000909"
        },
        "Guinea-Bissau": {
          "text": "Guinea-Bissau",
          "meaning": "GAZ:00000910"
        },
        "Guyana": {
          "text": "Guyana",
          "meaning": "GAZ:00002522"
        },
        "Haiti": {
          "text": "Haiti",
          "meaning": "GAZ:00003953"
        },
        "Heard Island and McDonald Islands": {
          "text": "Heard Island and McDonald Islands",
          "meaning": "GAZ:00009718"
        },
        "Honduras": {
          "text": "Honduras",
          "meaning": "GAZ:00002894"
        },
        "Hong Kong": {
          "text": "Hong Kong",
          "meaning": "GAZ:00003203"
        },
        "Howland Island": {
          "text": "Howland Island",
          "meaning": "GAZ:00007120"
        },
        "Hungary": {
          "text": "Hungary",
          "meaning": "GAZ:00002952"
        },
        "Iceland": {
          "text": "Iceland",
          "meaning": "GAZ:00000843"
        },
        "India": {
          "text": "India",
          "meaning": "GAZ:00002839"
        },
        "Indonesia": {
          "text": "Indonesia",
          "meaning": "GAZ:00003727"
        },
        "Iran": {
          "text": "Iran",
          "meaning": "GAZ:00004474"
        },
        "Iraq": {
          "text": "Iraq",
          "meaning": "GAZ:00004483"
        },
        "Ireland": {
          "text": "Ireland",
          "meaning": "GAZ:00002943"
        },
        "Isle of Man": {
          "text": "Isle of Man",
          "meaning": "GAZ:00052477"
        },
        "Israel": {
          "text": "Israel",
          "meaning": "GAZ:00002476"
        },
        "Italy": {
          "text": "Italy",
          "meaning": "GAZ:00002650"
        },
        "Jamaica": {
          "text": "Jamaica",
          "meaning": "GAZ:00003781"
        },
        "Jan Mayen": {
          "text": "Jan Mayen",
          "meaning": "GAZ:00005853"
        },
        "Japan": {
          "text": "Japan",
          "meaning": "GAZ:00002747"
        },
        "Jarvis Island": {
          "text": "Jarvis Island",
          "meaning": "GAZ:00007118"
        },
        "Jersey": {
          "text": "Jersey",
          "meaning": "GAZ:00001551"
        },
        "Johnston Atoll": {
          "text": "Johnston Atoll",
          "meaning": "GAZ:00007114"
        },
        "Jordan": {
          "text": "Jordan",
          "meaning": "GAZ:00002473"
        },
        "Juan de Nova Island": {
          "text": "Juan de Nova Island",
          "meaning": "GAZ:00005809"
        },
        "Kazakhstan": {
          "text": "Kazakhstan",
          "meaning": "GAZ:00004999"
        },
        "Kenya": {
          "text": "Kenya",
          "meaning": "GAZ:00001101"
        },
        "Kerguelen Archipelago": {
          "text": "Kerguelen Archipelago",
          "meaning": "GAZ:00005682"
        },
        "Kingman Reef": {
          "text": "Kingman Reef",
          "meaning": "GAZ:00007116"
        },
        "Kiribati": {
          "text": "Kiribati",
          "meaning": "GAZ:00006894"
        },
        "Kosovo": {
          "text": "Kosovo",
          "meaning": "GAZ:00011337"
        },
        "Kuwait": {
          "text": "Kuwait",
          "meaning": "GAZ:00005285"
        },
        "Kyrgyzstan": {
          "text": "Kyrgyzstan",
          "meaning": "GAZ:00006893"
        },
        "Laos": {
          "text": "Laos",
          "meaning": "GAZ:00006889"
        },
        "Latvia": {
          "text": "Latvia",
          "meaning": "GAZ:00002958"
        },
        "Lebanon": {
          "text": "Lebanon",
          "meaning": "GAZ:00002478"
        },
        "Lesotho": {
          "text": "Lesotho",
          "meaning": "GAZ:00001098"
        },
        "Liberia": {
          "text": "Liberia",
          "meaning": "GAZ:00000911"
        },
        "Libya": {
          "text": "Libya",
          "meaning": "GAZ:00000566"
        },
        "Liechtenstein": {
          "text": "Liechtenstein",
          "meaning": "GAZ:00003858"
        },
        "Line Islands": {
          "text": "Line Islands",
          "meaning": "GAZ:00007144"
        },
        "Lithuania": {
          "text": "Lithuania",
          "meaning": "GAZ:00002960"
        },
        "Luxembourg": {
          "text": "Luxembourg",
          "meaning": "GAZ:00002947"
        },
        "Macau": {
          "text": "Macau",
          "meaning": "GAZ:00003202"
        },
        "Madagascar": {
          "text": "Madagascar",
          "meaning": "GAZ:00001108"
        },
        "Malawi": {
          "text": "Malawi",
          "meaning": "GAZ:00001105"
        },
        "Malaysia": {
          "text": "Malaysia",
          "meaning": "GAZ:00003902"
        },
        "Maldives": {
          "text": "Maldives",
          "meaning": "GAZ:00006924"
        },
        "Mali": {
          "text": "Mali",
          "meaning": "GAZ:00000584"
        },
        "Malta": {
          "text": "Malta",
          "meaning": "GAZ:00004017"
        },
        "Marshall Islands": {
          "text": "Marshall Islands",
          "meaning": "GAZ:00007161"
        },
        "Martinique": {
          "text": "Martinique",
          "meaning": "GAZ:00067143"
        },
        "Mauritania": {
          "text": "Mauritania",
          "meaning": "GAZ:00000583"
        },
        "Mauritius": {
          "text": "Mauritius",
          "meaning": "GAZ:00003745"
        },
        "Mayotte": {
          "text": "Mayotte",
          "meaning": "GAZ:00003943"
        },
        "Mexico": {
          "text": "Mexico",
          "meaning": "GAZ:00002852"
        },
        "Micronesia": {
          "text": "Micronesia",
          "meaning": "GAZ:00005862"
        },
        "Midway Islands": {
          "text": "Midway Islands",
          "meaning": "GAZ:00007112"
        },
        "Moldova": {
          "text": "Moldova",
          "meaning": "GAZ:00003897"
        },
        "Monaco": {
          "text": "Monaco",
          "meaning": "GAZ:00003857"
        },
        "Mongolia": {
          "text": "Mongolia",
          "meaning": "GAZ:00008744"
        },
        "Montenegro": {
          "text": "Montenegro",
          "meaning": "GAZ:00006898"
        },
        "Montserrat": {
          "text": "Montserrat",
          "meaning": "GAZ:00003988"
        },
        "Morocco": {
          "text": "Morocco",
          "meaning": "GAZ:00000565"
        },
        "Mozambique": {
          "text": "Mozambique",
          "meaning": "GAZ:00001100"
        },
        "Myanmar": {
          "text": "Myanmar",
          "meaning": "GAZ:00006899"
        },
        "Namibia": {
          "text": "Namibia",
          "meaning": "GAZ:00001096"
        },
        "Nauru": {
          "text": "Nauru",
          "meaning": "GAZ:00006900"
        },
        "Navassa Island": {
          "text": "Navassa Island",
          "meaning": "GAZ:00007119"
        },
        "Nepal": {
          "text": "Nepal",
          "meaning": "GAZ:00004399"
        },
        "Netherlands": {
          "text": "Netherlands",
          "meaning": "GAZ:00002946"
        },
        "New Caledonia": {
          "text": "New Caledonia",
          "meaning": "GAZ:00005206"
        },
        "New Zealand": {
          "text": "New Zealand",
          "meaning": "GAZ:00000469"
        },
        "Nicaragua": {
          "text": "Nicaragua",
          "meaning": "GAZ:00002978"
        },
        "Niger": {
          "text": "Niger",
          "meaning": "GAZ:00000585"
        },
        "Nigeria": {
          "text": "Nigeria",
          "meaning": "GAZ:00000912"
        },
        "Niue": {
          "text": "Niue",
          "meaning": "GAZ:00006902"
        },
        "Norfolk Island": {
          "text": "Norfolk Island",
          "meaning": "GAZ:00005908"
        },
        "North Korea": {
          "text": "North Korea",
          "meaning": "GAZ:00002801"
        },
        "North Macedonia": {
          "text": "North Macedonia",
          "meaning": "GAZ:00006895"
        },
        "North Sea": {
          "text": "North Sea",
          "meaning": "GAZ:00002284"
        },
        "Northern Mariana Islands": {
          "text": "Northern Mariana Islands",
          "meaning": "GAZ:00003958"
        },
        "Norway": {
          "text": "Norway",
          "meaning": "GAZ:00002699"
        },
        "Oman": {
          "text": "Oman",
          "meaning": "GAZ:00005283"
        },
        "Pakistan": {
          "text": "Pakistan",
          "meaning": "GAZ:00005246"
        },
        "Palau": {
          "text": "Palau",
          "meaning": "GAZ:00006905"
        },
        "Panama": {
          "text": "Panama",
          "meaning": "GAZ:00002892"
        },
        "Papua New Guinea": {
          "text": "Papua New Guinea",
          "meaning": "GAZ:00003922"
        },
        "Paracel Islands": {
          "text": "Paracel Islands",
          "meaning": "GAZ:00010832"
        },
        "Paraguay": {
          "text": "Paraguay",
          "meaning": "GAZ:00002933"
        },
        "Peru": {
          "text": "Peru",
          "meaning": "GAZ:00002932"
        },
        "Philippines": {
          "text": "Philippines",
          "meaning": "GAZ:00004525"
        },
        "Pitcairn Islands": {
          "text": "Pitcairn Islands",
          "meaning": "GAZ:00005867"
        },
        "Poland": {
          "text": "Poland",
          "meaning": "GAZ:00002939"
        },
        "Portugal": {
          "text": "Portugal",
          "meaning": "GAZ:00004126"
        },
        "Puerto Rico": {
          "text": "Puerto Rico",
          "meaning": "GAZ:00006935"
        },
        "Qatar": {
          "text": "Qatar",
          "meaning": "GAZ:00005286"
        },
        "Republic of the Congo": {
          "text": "Republic of the Congo",
          "meaning": "GAZ:00001088"
        },
        "Reunion": {
          "text": "Reunion",
          "meaning": "GAZ:00003945"
        },
        "Romania": {
          "text": "Romania",
          "meaning": "GAZ:00002951"
        },
        "Ross Sea": {
          "text": "Ross Sea",
          "meaning": "GAZ:00023304"
        },
        "Russia": {
          "text": "Russia",
          "meaning": "GAZ:00002721"
        },
        "Rwanda": {
          "text": "Rwanda",
          "meaning": "GAZ:00001087"
        },
        "Saint Helena": {
          "text": "Saint Helena",
          "meaning": "GAZ:00000849"
        },
        "Saint Kitts and Nevis": {
          "text": "Saint Kitts and Nevis",
          "meaning": "GAZ:00006906"
        },
        "Saint Lucia": {
          "text": "Saint Lucia",
          "meaning": "GAZ:00006909"
        },
        "Saint Pierre and Miquelon": {
          "text": "Saint Pierre and Miquelon",
          "meaning": "GAZ:00003942"
        },
        "Saint Martin": {
          "text": "Saint Martin",
          "meaning": "GAZ:00005841"
        },
        "Saint Vincent and the Grenadines": {
          "text": "Saint Vincent and the Grenadines",
          "meaning": "GAZ:02000565"
        },
        "Samoa": {
          "text": "Samoa",
          "meaning": "GAZ:00006910"
        },
        "San Marino": {
          "text": "San Marino",
          "meaning": "GAZ:00003102"
        },
        "Sao Tome and Principe": {
          "text": "Sao Tome and Principe",
          "meaning": "GAZ:00006927"
        },
        "Saudi Arabia": {
          "text": "Saudi Arabia",
          "meaning": "GAZ:00005279"
        },
        "Senegal": {
          "text": "Senegal",
          "meaning": "GAZ:00000913"
        },
        "Serbia": {
          "text": "Serbia",
          "meaning": "GAZ:00002957"
        },
        "Seychelles": {
          "text": "Seychelles",
          "meaning": "GAZ:00006922"
        },
        "Sierra Leone": {
          "text": "Sierra Leone",
          "meaning": "GAZ:00000914"
        },
        "Singapore": {
          "text": "Singapore",
          "meaning": "GAZ:00003923"
        },
        "Sint Maarten": {
          "text": "Sint Maarten",
          "meaning": "GAZ:00012579"
        },
        "Slovakia": {
          "text": "Slovakia",
          "meaning": "GAZ:00002956"
        },
        "Slovenia": {
          "text": "Slovenia",
          "meaning": "GAZ:00002955"
        },
        "Solomon Islands": {
          "text": "Solomon Islands",
          "meaning": "GAZ:00005275"
        },
        "Somalia": {
          "text": "Somalia",
          "meaning": "GAZ:00001104"
        },
        "South Africa": {
          "text": "South Africa",
          "meaning": "GAZ:00001094"
        },
        "South Georgia and the South Sandwich Islands": {
          "text": "South Georgia and the South Sandwich Islands",
          "meaning": "GAZ:00003990"
        },
        "South Korea": {
          "text": "South Korea",
          "meaning": "GAZ:00002802"
        },
        "South Sudan": {
          "text": "South Sudan",
          "meaning": "GAZ:00233439"
        },
        "Spain": {
          "text": "Spain",
          "meaning": "GAZ:00000591"
        },
        "Spratly Islands": {
          "text": "Spratly Islands",
          "meaning": "GAZ:00010831"
        },
        "Sri Lanka": {
          "text": "Sri Lanka",
          "meaning": "GAZ:00003924"
        },
        "State of Palestine": {
          "text": "State of Palestine",
          "meaning": "GAZ:00002475"
        },
        "Sudan": {
          "text": "Sudan",
          "meaning": "GAZ:00000560"
        },
        "Suriname": {
          "text": "Suriname",
          "meaning": "GAZ:00002525"
        },
        "Svalbard": {
          "text": "Svalbard",
          "meaning": "GAZ:00005396"
        },
        "Swaziland": {
          "text": "Swaziland",
          "meaning": "GAZ:00001099"
        },
        "Sweden": {
          "text": "Sweden",
          "meaning": "GAZ:00002729"
        },
        "Switzerland": {
          "text": "Switzerland",
          "meaning": "GAZ:00002941"
        },
        "Syria": {
          "text": "Syria",
          "meaning": "GAZ:00002474"
        },
        "Taiwan": {
          "text": "Taiwan",
          "meaning": "GAZ:00005341"
        },
        "Tajikistan": {
          "text": "Tajikistan",
          "meaning": "GAZ:00006912"
        },
        "Tanzania": {
          "text": "Tanzania",
          "meaning": "GAZ:00001103"
        },
        "Thailand": {
          "text": "Thailand",
          "meaning": "GAZ:00003744"
        },
        "Timor-Leste": {
          "text": "Timor-Leste",
          "meaning": "GAZ:00006913"
        },
        "Togo": {
          "text": "Togo",
          "meaning": "GAZ:00000915"
        },
        "Tokelau": {
          "text": "Tokelau",
          "meaning": "GAZ:00260188"
        },
        "Tonga": {
          "text": "Tonga",
          "meaning": "GAZ:00006916"
        },
        "Trinidad and Tobago": {
          "text": "Trinidad and Tobago",
          "meaning": "GAZ:00003767"
        },
        "Tromelin Island": {
          "text": "Tromelin Island",
          "meaning": "GAZ:00005812"
        },
        "Tunisia": {
          "text": "Tunisia",
          "meaning": "GAZ:00000562"
        },
        "Turkey": {
          "text": "Turkey",
          "meaning": "GAZ:00000558"
        },
        "Turkmenistan": {
          "text": "Turkmenistan",
          "meaning": "GAZ:00005018"
        },
        "Turks and Caicos Islands": {
          "text": "Turks and Caicos Islands",
          "meaning": "GAZ:00003955"
        },
        "Tuvalu": {
          "text": "Tuvalu",
          "meaning": "GAZ:00009715"
        },
        "United States of America": {
          "text": "United States of America",
          "meaning": "GAZ:00002459"
        },
        "Uganda": {
          "text": "Uganda",
          "meaning": "GAZ:00001102"
        },
        "Ukraine": {
          "text": "Ukraine",
          "meaning": "GAZ:00002724"
        },
        "United Arab Emirates": {
          "text": "United Arab Emirates",
          "meaning": "GAZ:00005282"
        },
        "United Kingdom": {
          "text": "United Kingdom",
          "meaning": "GAZ:00002637"
        },
        "Uruguay": {
          "text": "Uruguay",
          "meaning": "GAZ:00002930"
        },
        "Uzbekistan": {
          "text": "Uzbekistan",
          "meaning": "GAZ:00004979"
        },
        "Vanuatu": {
          "text": "Vanuatu",
          "meaning": "GAZ:00006918"
        },
        "Venezuela": {
          "text": "Venezuela",
          "meaning": "GAZ:00002931"
        },
        "Viet Nam": {
          "text": "Viet Nam",
          "meaning": "GAZ:00003756"
        },
        "Virgin Islands": {
          "text": "Virgin Islands",
          "meaning": "GAZ:00003959"
        },
        "Wake Island": {
          "text": "Wake Island",
          "meaning": "GAZ:00007111"
        },
        "Wallis and Futuna": {
          "text": "Wallis and Futuna",
          "meaning": "GAZ:00007191"
        },
        "West Bank": {
          "text": "West Bank",
          "meaning": "GAZ:00009572"
        },
        "Western Sahara": {
          "text": "Western Sahara",
          "meaning": "GAZ:00000564"
        },
        "Yemen": {
          "text": "Yemen",
          "meaning": "GAZ:00005284"
        },
        "Zambia": {
          "text": "Zambia",
          "meaning": "GAZ:00001107"
        },
        "Zimbabwe": {
          "text": "Zimbabwe",
          "meaning": "GAZ:00001106"
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
        "Store the collector sample ID. If this number is considered identifiable information, provide an alternative ID. Be sure to store the key that maps between the original and alternative IDs for traceability and follow up if necessary. Every collector sample ID from a single submitter must be unique. It can have any format, but we suggest that you make it concise, unique and consistent within your lab."
      ],
      "examples": [
        {
          "value": "prov_monkeypox_1234"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Sample ID given by the sample provider",
        "CNPHI:Primary Specimen ID",
        "NML_LIMS:TEXT_ID",
        "BIOSAMPLE:sample_name",
        "VirusSeq_Portal:specimen collector sample ID"
      ],
      "slot_uri": "GENEPIO:0001123",
      "identifier": true,
      "range": "WhitespaceMinimizedString",
      "required": true
    },
    "Related specimen primary ID": {
      "name": "Related specimen primary ID",
      "description": "The primary ID of a related specimen previously submitted to the repository.",
      "title": "Related specimen primary ID",
      "comments": [
        "Store the primary ID of the related specimen previously submitted to the National Microbiology Laboratory so that the samples can be linked and tracked through the system."
      ],
      "examples": [
        {
          "value": "SR20-12345"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Related Specimen ID",
        "CNPHI:Related Specimen Relationship Type",
        "NML_LIMS:PH_RELATED_PRIMARY_ID"
      ],
      "slot_uri": "GENEPIO:0001128",
      "any_of": [
        {
          "range": "WhitespaceMinimizedString"
        },
        {
          "range": "null value menu"
        }
      ]
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
          "value": "EPI_ISL_436489"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:GISAID Accession (if known)",
        "NML_LIMS:SUBMISSIONS - GISAID Accession ID",
        "BIOSAMPLE:GISAID_accession",
        "VirusSeq_Portal:GISAID accession"
      ],
      "slot_uri": "GENEPIO:0001147",
      "range": "WhitespaceMinimizedString",
      "structured_pattern": {
        "syntax": "{UPPER_CASE}",
        "interpolated": true,
        "partial_match": false
      }
    },
    "sample collected by": {
      "name": "sample collected by",
      "description": "The name of the agency that collected the original sample.",
      "title": "sample collected by",
      "comments": [
        "The name of the sample collector should be written out in full, (with minor exceptions) and be consistent across multple submissions e.g. Public Health Agency of Canada, Public Health Ontario, BC Centre for Disease Control. The sample collector specified is at the discretion of the data provider (i.e. may be hospital, provincial public health lab, or other)."
      ],
      "examples": [
        {
          "value": "BC Centre for Disease Control"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Originating lab",
        "CNPHI:Lab Name",
        "NML_LIMS:CUSTOMER",
        "BIOSAMPLE:collected_by",
        "VirusSeq_Portal:sample collected by"
      ],
      "slot_uri": "GENEPIO:0001153",
      "required": true,
      "any_of": [
        {
          "range": "sample collected by menu"
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
        "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca"
      ],
      "examples": [
        {
          "value": "RespLab@lab.ca"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:sample collector contact email"
      ],
      "slot_uri": "GENEPIO:0001156",
      "range": "WhitespaceMinimizedString",
      "pattern": "^\\S+@\\S+\\.\\S+$"
    },
    "sample collector contact address": {
      "name": "sample collector contact address",
      "description": "The mailing address of the agency submitting the sample.",
      "title": "sample collector contact address",
      "comments": [
        "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country"
      ],
      "examples": [
        {
          "value": "655 Lab St, Vancouver, British Columbia, V5N 2A2, Canada"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Address",
        "NML_LIMS:sample collector contact address"
      ],
      "slot_uri": "GENEPIO:0001158",
      "range": "WhitespaceMinimizedString"
    },
    "sequenced by": {
      "name": "sequenced by",
      "description": "The name of the agency that generated the sequence.",
      "title": "sequenced by",
      "comments": [
        "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multiple submissions. If submitting specimens rather than sequencing data, please put the \"National Microbiology Laboratory (NML)\"."
      ],
      "examples": [
        {
          "value": "Public Health Ontario (PHO)"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_SEQUENCING_CENTRE",
        "BIOSAMPLE:sequenced_by"
      ],
      "slot_uri": "GENEPIO:0100416",
      "required": true,
      "any_of": [
        {
          "range": "sequence submitted by menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sequenced by contact email": {
      "name": "sequenced by contact email",
      "description": "The email address of the contact responsible for follow-up regarding the sequence.",
      "title": "sequenced by contact email",
      "comments": [
        "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca"
      ],
      "examples": [
        {
          "value": "RespLab@lab.ca"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:sequenced by contact email"
      ],
      "slot_uri": "GENEPIO:0100422",
      "range": "WhitespaceMinimizedString"
    },
    "sequenced by contact address": {
      "name": "sequenced by contact address",
      "description": "The mailing address of the agency submitting the sequence.",
      "title": "sequenced by contact address",
      "comments": [
        "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country"
      ],
      "examples": [
        {
          "value": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:sequenced by contact address"
      ],
      "slot_uri": "GENEPIO:0100423",
      "range": "WhitespaceMinimizedString"
    },
    "sequence submitted by": {
      "name": "sequence submitted by",
      "description": "The name of the agency that submitted the sequence to a database.",
      "title": "sequence submitted by",
      "comments": [
        "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multiple submissions. If submitting specimens rather than sequencing data, please put the \"National Microbiology Laboratory (NML)\"."
      ],
      "examples": [
        {
          "value": "Public Health Ontario (PHO)"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Submitting lab",
        "CNPHI:Sequencing Centre",
        "NML_LIMS:PH_SEQUENCING_SUBMITTER",
        "BIOSAMPLE:sequence_submitted_by",
        "VirusSeq_Portal:sequence submitted by"
      ],
      "slot_uri": "GENEPIO:0001159",
      "required": true,
      "any_of": [
        {
          "range": "sequence submitted by menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "sequence submitter contact email": {
      "name": "sequence submitter contact email",
      "description": "The email address of the agency responsible for submission of the sequence.",
      "title": "sequence submitter contact email",
      "comments": [
        "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca"
      ],
      "examples": [
        {
          "value": "RespLab@lab.ca"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:sequence submitter contact email"
      ],
      "slot_uri": "GENEPIO:0001165",
      "range": "WhitespaceMinimizedString"
    },
    "sequence submitter contact address": {
      "name": "sequence submitter contact address",
      "description": "The mailing address of the agency responsible for submission of the sequence.",
      "title": "sequence submitter contact address",
      "comments": [
        "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country"
      ],
      "examples": [
        {
          "value": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Address",
        "NML_LIMS:sequence submitter contact address"
      ],
      "slot_uri": "GENEPIO:0001167",
      "range": "WhitespaceMinimizedString"
    },
    "sample collection date": {
      "name": "sample collection date",
      "description": "The date on which the sample was collected.",
      "title": "sample collection date",
      "todos": [
        ">=2019-10-01",
        "<={today}"
      ],
      "comments": [
        "Sample collection date is critical for surveillance and many types of analyses. Required granularity includes year, month and day. If this date is considered identifiable information, it is acceptable to add \"jitter\" by adding or subtracting a calendar day (acceptable by GISAID). Alternatively, ”received date” may be used as a substitute. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-16"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Collection date",
        "CNPHI:Patient Sample Collected Date",
        "NML_LIMS:HC_COLLECT_DATE",
        "BIOSAMPLE:collection_date",
        "VirusSeq_Portal:sample collection date"
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
    "sample collection date precision": {
      "name": "sample collection date precision",
      "description": "The precision to which the \"sample collection date\" was provided.",
      "title": "sample collection date precision",
      "comments": [
        "Provide the precision of granularity to the \"day\", \"month\", or \"year\" for the date provided in the \"sample collection date\" field. The \"sample collection date\" will be truncated to the precision specified upon export; \"day\" for \"YYYY-MM-DD\", \"month\" for \"YYYY-MM\", or \"year\" for \"YYYY\"."
      ],
      "examples": [
        {
          "value": "year"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Precision of date collected",
        "NML_LIMS:HC_TEXT2"
      ],
      "slot_uri": "GENEPIO:0001177",
      "required": true,
      "any_of": [
        {
          "range": "sample collection date precision menu"
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
        "ISO 8601 standard \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-03-20"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:sample received date"
      ],
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
    "geo_loc_name (country)": {
      "name": "geo_loc_name (country)",
      "description": "The country where the sample was collected.",
      "title": "geo_loc_name (country)",
      "comments": [
        "Provide the country name from the controlled vocabulary provided."
      ],
      "examples": [
        {
          "value": "Canada"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Location",
        "CNPHI:Patient Country",
        "NML_LIMS:HC_COUNTRY",
        "BIOSAMPLE:geo_loc_name",
        "VirusSeq_Portal:geo_loc_name (country)"
      ],
      "slot_uri": "GENEPIO:0001181",
      "required": true,
      "any_of": [
        {
          "range": "geo_loc_name (country) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "geo_loc_name (state/province/territory)": {
      "name": "geo_loc_name (state/province/territory)",
      "description": "The province/territory where the sample was collected.",
      "title": "geo_loc_name (state/province/territory)",
      "comments": [
        "Provide the province/territory name from the controlled vocabulary provided."
      ],
      "examples": [
        {
          "value": "Saskatchewan"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Patient Province",
        "NML_LIMS:HC_PROVINCE",
        "BIOSAMPLE:geo_loc_name",
        "VirusSeq_Portal:geo_loc_name (state/province/territory)"
      ],
      "slot_uri": "GENEPIO:0001185",
      "required": true,
      "any_of": [
        {
          "range": "geo_loc_name (state/province/territory) menu"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "geo_loc_name (city)": {
      "name": "geo_loc_name (city)",
      "description": "The city where the sample was collected.",
      "title": "geo_loc_name (city)",
      "comments": [
        "Provide the city name. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz"
      ],
      "examples": [
        {
          "value": "Medicine Hat"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Patient City",
        "NML_LIMS:geo_loc_name (city)"
      ],
      "slot_uri": "GENEPIO:0001189",
      "range": "WhitespaceMinimizedString"
    },
    "organism": {
      "name": "organism",
      "description": "Taxonomic name of the organism.",
      "title": "organism",
      "comments": [
        "Use \"Monkeypox virus\". This value is provided in the template."
      ],
      "examples": [
        {
          "value": "Monkeypox virus"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Pathogen",
        "NML_LIMS:HC_CURRENT_ID",
        "BIOSAMPLE:organism",
        "VirusSeq_Portal:organism"
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
        "Provide the GISAID EpiPox virus name, which should be written in the format “hMpxV/CANADA/2 digit provincial ISO code-xxxxx/year”. If the province code cannot be shared for privacy reasons, put \"UN\" for \"Unknown\"."
      ],
      "examples": [
        {
          "value": "hMpxV/Canada/UN-NML-12345/2022"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Virus name",
        "CNPHI:GISAID Virus Name",
        "NML_LIMS:RESULT - CANCOGEN_SUBMISSIONS",
        "BIOSAMPLE:isolate",
        "BIOSAMPLE:GISAID_virus_name",
        "VirusSeq_Portal:isolate",
        "VirusSeq_Portal:fasta header name"
      ],
      "slot_uri": "GENEPIO:0001195",
      "required": true,
      "any_of": [
        {
          "range": "WhitespaceMinimizedString"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "purpose of sampling": {
      "name": "purpose of sampling",
      "description": "The reason that the sample was collected.",
      "title": "purpose of sampling",
      "comments": [
        "As all samples are taken for diagnostic purposes, \"Diagnostic Testing\" should be chosen from the picklist at this time. The reason why a sample was originally collected may differ from the reason why it was selected for sequencing, which should be indicated in the \"purpose of sequencing\" field."
      ],
      "examples": [
        {
          "value": "Diagnostic testing"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Reason for Sampling",
        "NML_LIMS:HC_SAMPLE_CATEGORY",
        "BIOSAMPLE:purpose_of_sampling",
        "VirusSeq_Portal:purpose of sampling"
      ],
      "slot_uri": "GENEPIO:0001198",
      "required": true,
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
      "description": "The description of why the sample was collected, providing specific details.",
      "title": "purpose of sampling details",
      "comments": [
        "Provide an expanded description of why the sample was collected using free text. The description may include the importance of the sample for a particular public health investigation/surveillance activity/research question. If details are not available, provide a null value."
      ],
      "examples": [
        {
          "value": "Symptomology and history suggested Monkeypox diagnosis."
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Details on the Reason for Sampling",
        "NML_LIMS:PH_SAMPLING_DETAILS",
        "BIOSAMPLE:description",
        "VirusSeq_Portal:purpose of sampling details"
      ],
      "slot_uri": "GENEPIO:0001200",
      "required": true,
      "any_of": [
        {
          "range": "WhitespaceMinimizedString"
        },
        {
          "range": "null value menu"
        }
      ]
    },
    "NML submitted specimen type": {
      "name": "NML submitted specimen type",
      "description": "The type of specimen submitted to the National Microbiology Laboratory (NML) for testing.",
      "title": "NML submitted specimen type",
      "comments": [
        "This information is required for upload through the CNPHI LaSER system. Select the specimen type from the pick list provided. If sequence data is being submitted rather than a specimen for testing, select “Not Applicable”."
      ],
      "examples": [
        {
          "value": "Nucleic Acid"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Specimen Type",
        "NML_LIMS:PH_SPECIMEN_TYPE"
      ],
      "slot_uri": "GENEPIO:0001204",
      "range": "NML submitted specimen type menu",
      "required": true
    },
    "Related specimen relationship type": {
      "name": "Related specimen relationship type",
      "description": "The relationship of the current specimen to the specimen/sample previously submitted to the repository.",
      "title": "Related specimen relationship type",
      "comments": [
        "Provide the tag that describes how the previous sample is related to the current sample being submitted from the pick list provided, so that the samples can be linked and tracked in the system."
      ],
      "examples": [
        {
          "value": "Previously Submitted"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Related Specimen ID",
        "CNPHI:Related Specimen Relationship Type",
        "NML_LIMS:PH_RELATED_RELATIONSHIP_TYPE"
      ],
      "slot_uri": "GENEPIO:0001209",
      "range": "Related specimen relationship type menu"
    },
    "anatomical material": {
      "name": "anatomical material",
      "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
      "title": "anatomical material",
      "comments": [
        "Provide a descriptor if an anatomical material was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma_griffiths@sfu.ca. If not applicable, do not leave blank. Choose a null value."
      ],
      "examples": [
        {
          "value": "Lesion (Pustule)"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Specimen source",
        "CNPHI:Anatomical Material",
        "NML_LIMS:PH_ISOLATION_SITE_DESC",
        "BIOSAMPLE:isolation_source",
        "BIOSAMPLE:anatomical_material",
        "VirusSeq_Portal:anatomical material"
      ],
      "slot_uri": "GENEPIO:0001211",
      "multivalued": true,
      "required": true,
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
        "Provide a descriptor if an anatomical part was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma_griffiths@sfu.ca. If not applicable, do not leave blank. Choose a null value."
      ],
      "examples": [
        {
          "value": "Genital area"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Specimen source",
        "CNPHI:Anatomical Site",
        "NML_LIMS:PH_ISOLATION_SITE",
        "BIOSAMPLE:isolation_source",
        "BIOSAMPLE:anatomical_part",
        "VirusSeq_Portal:anatomical part"
      ],
      "slot_uri": "GENEPIO:0001214",
      "multivalued": true,
      "required": true,
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
        "Provide a descriptor if a body product was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma_griffiths@sfu.ca. If not applicable, do not leave blank. Choose a null value."
      ],
      "examples": [
        {
          "value": "Feces"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Specimen source",
        "CNPHI:Body Product",
        "NML_LIMS:PH_SPECIMEN_SOURCE_DESC",
        "BIOSAMPLE:isolation_source",
        "BIOSAMPLE:body_product",
        "VirusSeq_Portal:body product"
      ],
      "slot_uri": "GENEPIO:0001216",
      "multivalued": true,
      "required": true,
      "any_of": [
        {
          "range": "body product menu"
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
        "Provide a descriptor if a device was used for sampling. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma_griffiths@sfu.ca. If not applicable, do not leave blank. Choose a null value."
      ],
      "examples": [
        {
          "value": "Swab"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Specimen source",
        "CNPHI:Specimen Collection Matrix",
        "NML_LIMS:PH_SPECIMEN_TYPE_ORIG",
        "BIOSAMPLE:isolation_source",
        "BIOSAMPLE:collection_device",
        "VirusSeq_Portal:collection device"
      ],
      "slot_uri": "GENEPIO:0001234",
      "multivalued": true,
      "required": true,
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
      "description": "The process used to collect the sample e.g. phlebotamy, necropsy.",
      "title": "collection method",
      "comments": [
        "Provide a descriptor if a collection method was used for sampling. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma_griffiths@sfu.ca. If not applicable, do not leave blank. Choose a null value."
      ],
      "examples": [
        {
          "value": "Biopsy"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Specimen source",
        "CNPHI:Collection Method",
        "NML_LIMS:COLLECTION_METHOD",
        "BIOSAMPLE:isolation_source",
        "BIOSAMPLE:collection_method",
        "VirusSeq_Portal:collection method"
      ],
      "slot_uri": "GENEPIO:0001241",
      "multivalued": true,
      "required": true,
      "any_of": [
        {
          "range": "collection method menu"
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
        "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Scientific name e.g. Homo sapiens, If the sample was environmental, put \"not applicable"
      ],
      "examples": [
        {
          "value": "Homo sapiens"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Host",
        "NML_LIMS:host (scientific name)",
        "BIOSAMPLE:host",
        "VirusSeq_Portal:host (scientific name)"
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
    "host disease": {
      "name": "host disease",
      "description": "The name of the disease experienced by the host.",
      "title": "host disease",
      "comments": [
        "Select \"Monkeypox\" from the pick list provided in the template."
      ],
      "examples": [
        {
          "value": "Monkeypox"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Host Disease",
        "NML_LIMS:PH_HOST_DISEASE",
        "BIOSAMPLE:host_disease",
        "VirusSeq_Portal:host disease"
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
    "travel history": {
      "name": "travel history",
      "description": "Travel history in last six months.",
      "title": "travel history",
      "comments": [
        "Specify the countries (and more granular locations if known, separated by a comma) travelled in the last six months; can include multiple travels. Separate multiple travel events with a semi-colon. List most recent travel first."
      ],
      "examples": [
        {
          "value": "Canada, Vancouver"
        },
        {
          "value": "USA, Seattle"
        },
        {
          "value": "Italy, Milan"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_TRAVEL"
      ],
      "slot_uri": "GENEPIO:0001416",
      "range": "WhitespaceMinimizedString"
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
          "value": "Specimens attributed to individuals with no known intimate contacts to positive cases",
          "description": "Select \"Targeted surveillance (non-random sampling)\" if the specimen fits any of the following criteria"
        },
        {
          "value": "Specimens attributed to youth/minors <18 yrs."
        },
        {
          "value": "Specimens attributed to vulnerable persons living in transient shelters or congregant settings"
        },
        {
          "value": "Specimens attributed to individuals self-identifying as “female”"
        },
        {
          "value": "Domestic travel surveillance",
          "description": "For specimens with a recent international and/or domestic travel history, please select the most appropriate tag from the following three options"
        },
        {
          "value": "International travel surveillance"
        },
        {
          "value": "Travel-associated surveillance"
        },
        {
          "value": "Cluster/Outbreak investigation",
          "description": "For specimens targeted for sequencing as part of an outbreak investigation, please select"
        },
        {
          "value": "Baseline surveillance (random sampling).",
          "description": "In all other cases use"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Reason for Sequencing",
        "NML_LIMS:PH_REASON_FOR_SEQUENCING",
        "BIOSAMPLE:purpose_of_sequencing",
        "VirusSeq_Portal:purpose of sequencing"
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
        "Provide an expanded description of why the sample was sequenced using free text. The description may include the importance of the sequences for a particular public health investigation/surveillance activity/research question. Suggested standardized descriotions include: Screened due to travel history, Screened due to close contact with infected individual."
      ],
      "examples": [
        {
          "value": "Outbreak in MSM community"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Details on the Reason for Sequencing",
        "NML_LIMS:PH_REASON_FOR_SEQUENCING_DETAILS",
        "VirusSeq_Portal:purpose of sequencing details"
      ],
      "slot_uri": "GENEPIO:0001446",
      "required": true,
      "any_of": [
        {
          "range": "WhitespaceMinimizedString"
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
      "todos": [
        ">={sample collection date}"
      ],
      "comments": [
        "ISO 8601 standard \"YYYY-MM-DD\"."
      ],
      "examples": [
        {
          "value": "2020-06-22"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_SEQUENCING_DATE"
      ],
      "slot_uri": "GENEPIO:0001447",
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_LIBRARY_PREP_KIT"
      ],
      "slot_uri": "GENEPIO:0001450",
      "range": "WhitespaceMinimizedString"
    },
    "sequencing instrument": {
      "name": "sequencing instrument",
      "description": "The model of the sequencing instrument used.",
      "title": "sequencing instrument",
      "comments": [
        "Select a sequencing instrument from the picklist provided in the template."
      ],
      "examples": [
        {
          "value": "Oxford Nanopore MinION"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Sequencing technology",
        "CNPHI:Sequencing Instrument",
        "NML_LIMS:PH_INSTRUMENT_CGN",
        "VirusSeq_Portal:sequencing instrument"
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_TESTING_PROTOCOL",
        "VirusSeq_Portal:sequencing protocol"
      ],
      "slot_uri": "GENEPIO:0001454",
      "range": "WhitespaceMinimizedString"
    },
    "raw sequence data processing method": {
      "name": "raw sequence data processing method",
      "description": "The names of the software and version number used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
      "title": "raw sequence data processing method",
      "comments": [
        "Provide the software name followed by the version e.g. Trimmomatic v. 0.38, Porechop v. 0.2.3"
      ],
      "examples": [
        {
          "value": "Porechop 0.2.3"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_RAW_SEQUENCE_METHOD",
        "VirusSeq_Portal:raw sequence data processing method"
      ],
      "slot_uri": "GENEPIO:0001458",
      "range": "WhitespaceMinimizedString",
      "required": true
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
          "value": "Nanostripper"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:PH_DEHOSTING_METHOD",
        "VirusSeq_Portal:dehosting method"
      ],
      "slot_uri": "GENEPIO:0001459",
      "range": "WhitespaceMinimizedString",
      "required": true
    },
    "de novo assembly software name": {
      "name": "de novo assembly software name",
      "description": "The name of software used to generate the consensus sequence.",
      "title": "de novo assembly software name",
      "comments": [
        "Provide the name of the software used to generate the consensus sequence."
      ],
      "examples": [
        {
          "value": "iVar"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:consensus sequence",
        "NML_LIMS:PH_CONSENSUS_SEQUENCE",
        "VirusSeq_Portal:consensus sequence software name"
      ],
      "slot_uri": "GENEPIO:0001463",
      "range": "WhitespaceMinimizedString",
      "required": true
    },
    "de novo assembly software version": {
      "name": "de novo assembly software version",
      "description": "The version of the software used to generate the consensus sequence.",
      "title": "de novo assembly software version",
      "comments": [
        "Provide the version of the software used to generate the consensus sequence."
      ],
      "examples": [
        {
          "value": "1.3"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:consensus sequence",
        "NML_LIMS:PH_CONSENSUS_SEQUENCE_VERSION",
        "VirusSeq_Portal:consensus sequence software version"
      ],
      "slot_uri": "GENEPIO:0001469",
      "range": "WhitespaceMinimizedString",
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:breadth of coverage value",
        "VirusSeq_Portal:breadth of coverage value"
      ],
      "slot_uri": "GENEPIO:0001472",
      "range": "WhitespaceMinimizedString"
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Coverage",
        "NML_LIMS:depth of coverage value",
        "VirusSeq_Portal:depth of coverage value"
      ],
      "slot_uri": "GENEPIO:0001474",
      "range": "WhitespaceMinimizedString"
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:depth of coverage threshold"
      ],
      "slot_uri": "GENEPIO:0001475",
      "range": "WhitespaceMinimizedString"
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
          "value": "2639019"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:number of base pairs sequenced"
      ],
      "slot_uri": "GENEPIO:0001482",
      "range": "integer",
      "minimum_value": 0
    },
    "assembled genome length": {
      "name": "assembled genome length",
      "description": "Size of the reconstructed genome described as the number of base pairs.",
      "title": "assembled genome length",
      "comments": [
        "Provide a numerical value (no need to include units)."
      ],
      "examples": [
        {
          "value": "197063"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "NML_LIMS:consensus genome length"
      ],
      "slot_uri": "GENEPIO:0001483",
      "range": "integer",
      "minimum_value": 0
    },
    "bioinformatics protocol": {
      "name": "bioinformatics protocol",
      "description": "A description of the overall bioinformatics strategy used.",
      "title": "bioinformatics protocol",
      "comments": [
        "Further details regarding the methods used to process raw data, and/or generate assemblies, and/or generate consensus sequences can. This information can be provided in an SOP or protocol or pipeline/workflow. Provide the name and version number of the protocol, or a GitHub link to a pipeline or workflow."
      ],
      "examples": [
        {
          "value": "https://github.com/phac-nml/ncov2019-artic-nf"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "CNPHI:Bioinformatics Protocol",
        "NML_LIMS:PH_BIOINFORMATICS_PROTOCOL",
        "VirusSeq_Portal:bioinformatics protocol"
      ],
      "slot_uri": "GENEPIO:0001489",
      "range": "WhitespaceMinimizedString",
      "required": true
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
          "value": "Tejinder Singh, Fei Hu, Joe Blogs"
        }
      ],
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:Authors",
        "CNPHI:Authors",
        "NML_LIMS:PH_CANCOGEN_AUTHORS"
      ],
      "slot_uri": "GENEPIO:0001517",
      "range": "WhitespaceMinimizedString",
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
      "from_schema": "https://example.com/monkeypox",
      "exact_mappings": [
        "GISAID:DataHarmonizer provenance",
        "CNPHI:Additional Comments",
        "NML_LIMS:HC_COMMENTS"
      ],
      "slot_uri": "GENEPIO:0001518",
      "range": "Provenance"
    }
  },
  "classes": {
    "dh_interface": {
      "name": "dh_interface",
      "description": "A DataHarmonizer interface",
      "from_schema": "https://example.com/monkeypox"
    },
    "Monkeypox": {
      "name": "Monkeypox",
      "description": "Canadian specification for Monkeypox clinical virus biosample data gathering",
      "from_schema": "https://example.com/monkeypox",
      "is_a": "dh_interface",
      "slot_usage": {
        "specimen collector sample ID": {
          "name": "specimen collector sample ID",
          "rank": 1,
          "slot_group": "Database Identifiers"
        },
        "Related specimen primary ID": {
          "name": "Related specimen primary ID",
          "rank": 2,
          "slot_group": "Database Identifiers"
        },
        "GISAID accession": {
          "name": "GISAID accession",
          "rank": 3,
          "slot_group": "Database Identifiers"
        },
        "sample collected by": {
          "name": "sample collected by",
          "rank": 4,
          "slot_group": "Sample collection and processing"
        },
        "sample collector contact email": {
          "name": "sample collector contact email",
          "rank": 5,
          "slot_group": "Sample collection and processing"
        },
        "sample collector contact address": {
          "name": "sample collector contact address",
          "rank": 6,
          "slot_group": "Sample collection and processing"
        },
        "sequenced by": {
          "name": "sequenced by",
          "rank": 7,
          "slot_group": "Sample collection and processing"
        },
        "sequenced by contact email": {
          "name": "sequenced by contact email",
          "rank": 8,
          "slot_group": "Sample collection and processing"
        },
        "sequenced by contact address": {
          "name": "sequenced by contact address",
          "rank": 9,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitted by": {
          "name": "sequence submitted by",
          "rank": 10,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitter contact email": {
          "name": "sequence submitter contact email",
          "rank": 11,
          "slot_group": "Sample collection and processing"
        },
        "sequence submitter contact address": {
          "name": "sequence submitter contact address",
          "rank": 12,
          "slot_group": "Sample collection and processing"
        },
        "sample collection date": {
          "name": "sample collection date",
          "rank": 13,
          "slot_group": "Sample collection and processing"
        },
        "sample collection date precision": {
          "name": "sample collection date precision",
          "rank": 14,
          "slot_group": "Sample collection and processing"
        },
        "sample received date": {
          "name": "sample received date",
          "rank": 15,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc_name (country)": {
          "name": "geo_loc_name (country)",
          "rank": 16,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc_name (state/province/territory)": {
          "name": "geo_loc_name (state/province/territory)",
          "rank": 17,
          "slot_group": "Sample collection and processing"
        },
        "geo_loc_name (city)": {
          "name": "geo_loc_name (city)",
          "rank": 18,
          "slot_group": "Sample collection and processing"
        },
        "organism": {
          "name": "organism",
          "rank": 19,
          "slot_group": "Sample collection and processing"
        },
        "isolate": {
          "name": "isolate",
          "rank": 20,
          "slot_group": "Sample collection and processing"
        },
        "purpose of sampling": {
          "name": "purpose of sampling",
          "rank": 21,
          "slot_group": "Sample collection and processing"
        },
        "purpose of sampling details": {
          "name": "purpose of sampling details",
          "rank": 22,
          "slot_group": "Sample collection and processing"
        },
        "NML submitted specimen type": {
          "name": "NML submitted specimen type",
          "rank": 23,
          "slot_group": "Sample collection and processing"
        },
        "Related specimen relationship type": {
          "name": "Related specimen relationship type",
          "rank": 24,
          "slot_group": "Sample collection and processing"
        },
        "anatomical material": {
          "name": "anatomical material",
          "rank": 25,
          "slot_group": "Sample collection and processing"
        },
        "anatomical part": {
          "name": "anatomical part",
          "rank": 26,
          "slot_group": "Sample collection and processing"
        },
        "body product": {
          "name": "body product",
          "rank": 27,
          "slot_group": "Sample collection and processing"
        },
        "collection device": {
          "name": "collection device",
          "rank": 28,
          "slot_group": "Sample collection and processing"
        },
        "collection method": {
          "name": "collection method",
          "rank": 29,
          "slot_group": "Sample collection and processing"
        },
        "host (scientific name)": {
          "name": "host (scientific name)",
          "rank": 30,
          "slot_group": "Host Information"
        },
        "host disease": {
          "name": "host disease",
          "rank": 31,
          "slot_group": "Host Information"
        },
        "travel history": {
          "name": "travel history",
          "rank": 32,
          "slot_group": "Host exposure information"
        },
        "purpose of sequencing": {
          "name": "purpose of sequencing",
          "rank": 33,
          "slot_group": "Sequencing"
        },
        "purpose of sequencing details": {
          "name": "purpose of sequencing details",
          "rank": 34,
          "slot_group": "Sequencing"
        },
        "sequencing date": {
          "name": "sequencing date",
          "rank": 35,
          "slot_group": "Sequencing"
        },
        "library preparation kit": {
          "name": "library preparation kit",
          "rank": 36,
          "slot_group": "Sequencing"
        },
        "sequencing instrument": {
          "name": "sequencing instrument",
          "rank": 37,
          "slot_group": "Sequencing"
        },
        "sequencing protocol": {
          "name": "sequencing protocol",
          "rank": 38,
          "slot_group": "Sequencing"
        },
        "raw sequence data processing method": {
          "name": "raw sequence data processing method",
          "rank": 39,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "dehosting method": {
          "name": "dehosting method",
          "rank": 40,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "de novo assembly software name": {
          "name": "de novo assembly software name",
          "rank": 41,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "de novo assembly software version": {
          "name": "de novo assembly software version",
          "rank": 42,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "breadth of coverage value": {
          "name": "breadth of coverage value",
          "rank": 43,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "depth of coverage value": {
          "name": "depth of coverage value",
          "rank": 44,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "depth of coverage threshold": {
          "name": "depth of coverage threshold",
          "rank": 45,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "number of base pairs sequenced": {
          "name": "number of base pairs sequenced",
          "rank": 46,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "assembled genome length": {
          "name": "assembled genome length",
          "rank": 47,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "bioinformatics protocol": {
          "name": "bioinformatics protocol",
          "rank": 48,
          "slot_group": "Bioinformatics and QC metrics"
        },
        "authors": {
          "name": "authors",
          "rank": 49,
          "slot_group": "Contributor acknowledgement"
        },
        "DataHarmonizer provenance": {
          "name": "DataHarmonizer provenance",
          "rank": 50,
          "slot_group": "Contributor acknowledgement"
        }
      },
      "attributes": {
        "specimen collector sample ID": {
          "name": "specimen collector sample ID",
          "description": "The user-defined name for the sample.",
          "title": "specimen collector sample ID",
          "from_schema": "https://example.com/monkeypox",
          "rank": 1,
          "slot_uri": "GENEPIO:0001123",
          "identifier": true,
          "alias": "specimen_collector_sample_ID",
          "owner": "Monkeypox",
          "slot_group": "Database Identifiers",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "Related specimen primary ID": {
          "name": "Related specimen primary ID",
          "description": "The primary ID of a related specimen previously submitted to the repository.",
          "title": "Related specimen primary ID",
          "from_schema": "https://example.com/monkeypox",
          "rank": 2,
          "slot_uri": "GENEPIO:0001128",
          "alias": "Related_specimen_primary_ID",
          "owner": "Monkeypox",
          "slot_group": "Database Identifiers"
        },
        "GISAID accession": {
          "name": "GISAID accession",
          "description": "The GISAID accession number assigned to the sequence.",
          "title": "GISAID accession",
          "from_schema": "https://example.com/monkeypox",
          "rank": 3,
          "slot_uri": "GENEPIO:0001147",
          "alias": "GISAID_accession",
          "owner": "Monkeypox",
          "slot_group": "Database Identifiers",
          "range": "WhitespaceMinimizedString",
          "structured_pattern": {
            "syntax": "{UPPER_CASE}",
            "interpolated": true,
            "partial_match": false
          }
        },
        "sample collected by": {
          "name": "sample collected by",
          "description": "The name of the agency that collected the original sample.",
          "title": "sample collected by",
          "from_schema": "https://example.com/monkeypox",
          "rank": 4,
          "slot_uri": "GENEPIO:0001153",
          "alias": "sample_collected_by",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sample collector contact email": {
          "name": "sample collector contact email",
          "description": "The email address of the contact responsible for follow-up regarding the sample.",
          "title": "sample collector contact email",
          "from_schema": "https://example.com/monkeypox",
          "rank": 5,
          "slot_uri": "GENEPIO:0001156",
          "alias": "sample_collector_contact_email",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString",
          "pattern": "^\\S+@\\S+\\.\\S+$"
        },
        "sample collector contact address": {
          "name": "sample collector contact address",
          "description": "The mailing address of the agency submitting the sample.",
          "title": "sample collector contact address",
          "from_schema": "https://example.com/monkeypox",
          "rank": 6,
          "slot_uri": "GENEPIO:0001158",
          "alias": "sample_collector_contact_address",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "sequenced by": {
          "name": "sequenced by",
          "description": "The name of the agency that generated the sequence.",
          "title": "sequenced by",
          "from_schema": "https://example.com/monkeypox",
          "rank": 7,
          "slot_uri": "GENEPIO:0100416",
          "alias": "sequenced_by",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sequenced by contact email": {
          "name": "sequenced by contact email",
          "description": "The email address of the contact responsible for follow-up regarding the sequence.",
          "title": "sequenced by contact email",
          "from_schema": "https://example.com/monkeypox",
          "rank": 8,
          "slot_uri": "GENEPIO:0100422",
          "alias": "sequenced_by_contact_email",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "sequenced by contact address": {
          "name": "sequenced by contact address",
          "description": "The mailing address of the agency submitting the sequence.",
          "title": "sequenced by contact address",
          "from_schema": "https://example.com/monkeypox",
          "rank": 9,
          "slot_uri": "GENEPIO:0100423",
          "alias": "sequenced_by_contact_address",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "sequence submitted by": {
          "name": "sequence submitted by",
          "description": "The name of the agency that submitted the sequence to a database.",
          "title": "sequence submitted by",
          "from_schema": "https://example.com/monkeypox",
          "rank": 10,
          "slot_uri": "GENEPIO:0001159",
          "alias": "sequence_submitted_by",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sequence submitter contact email": {
          "name": "sequence submitter contact email",
          "description": "The email address of the agency responsible for submission of the sequence.",
          "title": "sequence submitter contact email",
          "from_schema": "https://example.com/monkeypox",
          "rank": 11,
          "slot_uri": "GENEPIO:0001165",
          "alias": "sequence_submitter_contact_email",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "sequence submitter contact address": {
          "name": "sequence submitter contact address",
          "description": "The mailing address of the agency responsible for submission of the sequence.",
          "title": "sequence submitter contact address",
          "from_schema": "https://example.com/monkeypox",
          "rank": 12,
          "slot_uri": "GENEPIO:0001167",
          "alias": "sequence_submitter_contact_address",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "sample collection date": {
          "name": "sample collection date",
          "description": "The date on which the sample was collected.",
          "title": "sample collection date",
          "from_schema": "https://example.com/monkeypox",
          "rank": 13,
          "slot_uri": "GENEPIO:0001174",
          "alias": "sample_collection_date",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sample collection date precision": {
          "name": "sample collection date precision",
          "description": "The precision to which the \"sample collection date\" was provided.",
          "title": "sample collection date precision",
          "from_schema": "https://example.com/monkeypox",
          "rank": 14,
          "slot_uri": "GENEPIO:0001177",
          "alias": "sample_collection_date_precision",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "sample received date": {
          "name": "sample received date",
          "description": "The date on which the sample was received.",
          "title": "sample received date",
          "from_schema": "https://example.com/monkeypox",
          "rank": 15,
          "slot_uri": "GENEPIO:0001179",
          "alias": "sample_received_date",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing"
        },
        "geo_loc_name (country)": {
          "name": "geo_loc_name (country)",
          "description": "The country where the sample was collected.",
          "title": "geo_loc_name (country)",
          "from_schema": "https://example.com/monkeypox",
          "rank": 16,
          "slot_uri": "GENEPIO:0001181",
          "alias": "geo_loc_name_(country)",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "geo_loc_name (state/province/territory)": {
          "name": "geo_loc_name (state/province/territory)",
          "description": "The province/territory where the sample was collected.",
          "title": "geo_loc_name (state/province/territory)",
          "from_schema": "https://example.com/monkeypox",
          "rank": 17,
          "slot_uri": "GENEPIO:0001185",
          "alias": "geo_loc_name_(state/province/territory)",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "geo_loc_name (city)": {
          "name": "geo_loc_name (city)",
          "description": "The city where the sample was collected.",
          "title": "geo_loc_name (city)",
          "from_schema": "https://example.com/monkeypox",
          "rank": 18,
          "slot_uri": "GENEPIO:0001189",
          "alias": "geo_loc_name_(city)",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "WhitespaceMinimizedString"
        },
        "organism": {
          "name": "organism",
          "description": "Taxonomic name of the organism.",
          "title": "organism",
          "from_schema": "https://example.com/monkeypox",
          "rank": 19,
          "slot_uri": "GENEPIO:0001191",
          "alias": "organism",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "isolate": {
          "name": "isolate",
          "description": "Identifier of the specific isolate.",
          "title": "isolate",
          "from_schema": "https://example.com/monkeypox",
          "rank": 20,
          "slot_uri": "GENEPIO:0001195",
          "alias": "isolate",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "purpose of sampling": {
          "name": "purpose of sampling",
          "description": "The reason that the sample was collected.",
          "title": "purpose of sampling",
          "from_schema": "https://example.com/monkeypox",
          "rank": 21,
          "slot_uri": "GENEPIO:0001198",
          "alias": "purpose_of_sampling",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "purpose of sampling details": {
          "name": "purpose of sampling details",
          "description": "The description of why the sample was collected, providing specific details.",
          "title": "purpose of sampling details",
          "from_schema": "https://example.com/monkeypox",
          "rank": 22,
          "slot_uri": "GENEPIO:0001200",
          "alias": "purpose_of_sampling_details",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "NML submitted specimen type": {
          "name": "NML submitted specimen type",
          "description": "The type of specimen submitted to the National Microbiology Laboratory (NML) for testing.",
          "title": "NML submitted specimen type",
          "from_schema": "https://example.com/monkeypox",
          "rank": 23,
          "slot_uri": "GENEPIO:0001204",
          "alias": "NML_submitted_specimen_type",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "NML submitted specimen type menu",
          "required": true
        },
        "Related specimen relationship type": {
          "name": "Related specimen relationship type",
          "description": "The relationship of the current specimen to the specimen/sample previously submitted to the repository.",
          "title": "Related specimen relationship type",
          "from_schema": "https://example.com/monkeypox",
          "rank": 24,
          "slot_uri": "GENEPIO:0001209",
          "alias": "Related_specimen_relationship_type",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "range": "Related specimen relationship type menu"
        },
        "anatomical material": {
          "name": "anatomical material",
          "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
          "title": "anatomical material",
          "from_schema": "https://example.com/monkeypox",
          "rank": 25,
          "slot_uri": "GENEPIO:0001211",
          "multivalued": true,
          "alias": "anatomical_material",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "anatomical part": {
          "name": "anatomical part",
          "description": "An anatomical part of an organism e.g. oropharynx.",
          "title": "anatomical part",
          "from_schema": "https://example.com/monkeypox",
          "rank": 26,
          "slot_uri": "GENEPIO:0001214",
          "multivalued": true,
          "alias": "anatomical_part",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "body product": {
          "name": "body product",
          "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
          "title": "body product",
          "from_schema": "https://example.com/monkeypox",
          "rank": 27,
          "slot_uri": "GENEPIO:0001216",
          "multivalued": true,
          "alias": "body_product",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "collection device": {
          "name": "collection device",
          "description": "The instrument or container used to collect the sample e.g. swab.",
          "title": "collection device",
          "from_schema": "https://example.com/monkeypox",
          "rank": 28,
          "slot_uri": "GENEPIO:0001234",
          "multivalued": true,
          "alias": "collection_device",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "collection method": {
          "name": "collection method",
          "description": "The process used to collect the sample e.g. phlebotamy, necropsy.",
          "title": "collection method",
          "from_schema": "https://example.com/monkeypox",
          "rank": 29,
          "slot_uri": "GENEPIO:0001241",
          "multivalued": true,
          "alias": "collection_method",
          "owner": "Monkeypox",
          "slot_group": "Sample collection and processing",
          "required": true
        },
        "host (scientific name)": {
          "name": "host (scientific name)",
          "description": "The taxonomic, or scientific name of the host.",
          "title": "host (scientific name)",
          "from_schema": "https://example.com/monkeypox",
          "rank": 30,
          "slot_uri": "GENEPIO:0001387",
          "alias": "host_(scientific_name)",
          "owner": "Monkeypox",
          "slot_group": "Host Information",
          "required": true
        },
        "host disease": {
          "name": "host disease",
          "description": "The name of the disease experienced by the host.",
          "title": "host disease",
          "from_schema": "https://example.com/monkeypox",
          "rank": 31,
          "slot_uri": "GENEPIO:0001391",
          "alias": "host_disease",
          "owner": "Monkeypox",
          "slot_group": "Host Information",
          "required": true
        },
        "travel history": {
          "name": "travel history",
          "description": "Travel history in last six months.",
          "title": "travel history",
          "from_schema": "https://example.com/monkeypox",
          "rank": 32,
          "slot_uri": "GENEPIO:0001416",
          "alias": "travel_history",
          "owner": "Monkeypox",
          "slot_group": "Host exposure information",
          "range": "WhitespaceMinimizedString"
        },
        "purpose of sequencing": {
          "name": "purpose of sequencing",
          "description": "The reason that the sample was sequenced.",
          "title": "purpose of sequencing",
          "from_schema": "https://example.com/monkeypox",
          "rank": 33,
          "slot_uri": "GENEPIO:0001445",
          "multivalued": true,
          "alias": "purpose_of_sequencing",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "required": true
        },
        "purpose of sequencing details": {
          "name": "purpose of sequencing details",
          "description": "The description of why the sample was sequenced providing specific details.",
          "title": "purpose of sequencing details",
          "from_schema": "https://example.com/monkeypox",
          "rank": 34,
          "slot_uri": "GENEPIO:0001446",
          "alias": "purpose_of_sequencing_details",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "required": true
        },
        "sequencing date": {
          "name": "sequencing date",
          "description": "The date the sample was sequenced.",
          "title": "sequencing date",
          "from_schema": "https://example.com/monkeypox",
          "rank": 35,
          "slot_uri": "GENEPIO:0001447",
          "alias": "sequencing_date",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "required": true
        },
        "library preparation kit": {
          "name": "library preparation kit",
          "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
          "title": "library preparation kit",
          "from_schema": "https://example.com/monkeypox",
          "rank": 36,
          "slot_uri": "GENEPIO:0001450",
          "alias": "library_preparation_kit",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "range": "WhitespaceMinimizedString"
        },
        "sequencing instrument": {
          "name": "sequencing instrument",
          "description": "The model of the sequencing instrument used.",
          "title": "sequencing instrument",
          "from_schema": "https://example.com/monkeypox",
          "rank": 37,
          "slot_uri": "GENEPIO:0001452",
          "multivalued": true,
          "alias": "sequencing_instrument",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "required": true
        },
        "sequencing protocol": {
          "name": "sequencing protocol",
          "description": "The protocol used to generate the sequence.",
          "title": "sequencing protocol",
          "from_schema": "https://example.com/monkeypox",
          "rank": 38,
          "slot_uri": "GENEPIO:0001454",
          "alias": "sequencing_protocol",
          "owner": "Monkeypox",
          "slot_group": "Sequencing",
          "range": "WhitespaceMinimizedString"
        },
        "raw sequence data processing method": {
          "name": "raw sequence data processing method",
          "description": "The names of the software and version number used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
          "title": "raw sequence data processing method",
          "from_schema": "https://example.com/monkeypox",
          "rank": 39,
          "slot_uri": "GENEPIO:0001458",
          "alias": "raw_sequence_data_processing_method",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "dehosting method": {
          "name": "dehosting method",
          "description": "The method used to remove host reads from the pathogen sequence.",
          "title": "dehosting method",
          "from_schema": "https://example.com/monkeypox",
          "rank": 40,
          "slot_uri": "GENEPIO:0001459",
          "alias": "dehosting_method",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "de novo assembly software name": {
          "name": "de novo assembly software name",
          "description": "The name of software used to generate the consensus sequence.",
          "title": "de novo assembly software name",
          "from_schema": "https://example.com/monkeypox",
          "rank": 41,
          "slot_uri": "GENEPIO:0001463",
          "alias": "de_novo_assembly_software_name",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "de novo assembly software version": {
          "name": "de novo assembly software version",
          "description": "The version of the software used to generate the consensus sequence.",
          "title": "de novo assembly software version",
          "from_schema": "https://example.com/monkeypox",
          "rank": 42,
          "slot_uri": "GENEPIO:0001469",
          "alias": "de_novo_assembly_software_version",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "breadth of coverage value": {
          "name": "breadth of coverage value",
          "description": "The percentage of the reference genome covered by the sequenced data, to a prescribed depth.",
          "title": "breadth of coverage value",
          "from_schema": "https://example.com/monkeypox",
          "rank": 43,
          "slot_uri": "GENEPIO:0001472",
          "alias": "breadth_of_coverage_value",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString"
        },
        "depth of coverage value": {
          "name": "depth of coverage value",
          "description": "The average number of reads representing a given nucleotide in the reconstructed sequence.",
          "title": "depth of coverage value",
          "from_schema": "https://example.com/monkeypox",
          "rank": 44,
          "slot_uri": "GENEPIO:0001474",
          "alias": "depth_of_coverage_value",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString"
        },
        "depth of coverage threshold": {
          "name": "depth of coverage threshold",
          "description": "The threshold used as a cut-off for the depth of coverage.",
          "title": "depth of coverage threshold",
          "from_schema": "https://example.com/monkeypox",
          "rank": 45,
          "slot_uri": "GENEPIO:0001475",
          "alias": "depth_of_coverage_threshold",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString"
        },
        "number of base pairs sequenced": {
          "name": "number of base pairs sequenced",
          "description": "The number of total base pairs generated by the sequencing process.",
          "title": "number of base pairs sequenced",
          "from_schema": "https://example.com/monkeypox",
          "rank": 46,
          "slot_uri": "GENEPIO:0001482",
          "alias": "number_of_base_pairs_sequenced",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "integer",
          "minimum_value": 0
        },
        "assembled genome length": {
          "name": "assembled genome length",
          "description": "Size of the reconstructed genome described as the number of base pairs.",
          "title": "assembled genome length",
          "from_schema": "https://example.com/monkeypox",
          "rank": 47,
          "slot_uri": "GENEPIO:0001483",
          "alias": "assembled_genome_length",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "integer",
          "minimum_value": 0
        },
        "bioinformatics protocol": {
          "name": "bioinformatics protocol",
          "description": "A description of the overall bioinformatics strategy used.",
          "title": "bioinformatics protocol",
          "from_schema": "https://example.com/monkeypox",
          "rank": 48,
          "slot_uri": "GENEPIO:0001489",
          "alias": "bioinformatics_protocol",
          "owner": "Monkeypox",
          "slot_group": "Bioinformatics and QC metrics",
          "range": "WhitespaceMinimizedString",
          "required": true
        },
        "authors": {
          "name": "authors",
          "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
          "title": "authors",
          "from_schema": "https://example.com/monkeypox",
          "rank": 49,
          "slot_uri": "GENEPIO:0001517",
          "alias": "authors",
          "owner": "Monkeypox",
          "slot_group": "Contributor acknowledgement",
          "range": "WhitespaceMinimizedString",
          "recommended": true
        },
        "DataHarmonizer provenance": {
          "name": "DataHarmonizer provenance",
          "description": "The DataHarmonizer software version provenance.",
          "title": "DataHarmonizer provenance",
          "from_schema": "https://example.com/monkeypox",
          "rank": 50,
          "slot_uri": "GENEPIO:0001518",
          "alias": "DataHarmonizer_provenance",
          "owner": "Monkeypox",
          "slot_group": "Contributor acknowledgement",
          "range": "Provenance"
        }
      }
    }
  },
  "source_file": "schema.yaml",
  "settings": {
    "Title_Case": {
      "setting_key": "Title_Case",
      "setting_value": "(((?<=\\b)[^a-z\\W]\\w*?|[\\W])+)"
    },
    "UPPER_CASE": {
      "setting_key": "UPPER_CASE",
      "setting_value": "[A-Z\\W\\d_]*"
    },
    "lower_case": {
      "setting_key": "lower_case",
      "setting_value": "[a-z\\W\\d_]*"
    }
  },
  "@type": "SchemaDefinition"
}