/* jshint -W079, -W098, -W026, -W003, -W106 */
/*jscs:disable safeContextKeyword, requireDotNotation, requirePaddingNewLinesBeforeLineComments, requireTrailingComma*/
(function() {
  'use strict';
  var mockedDataModule = angular
        .module('mock.data', []);
  mockedDataModule.factory('mockData', mockData);
  mockData.$inject = [];

  function mockData() {

    var mock = {
            getMockSchema: getMockSchema,
            getMockStates: getMockStates,
            getMockObs: getMockObs,
            getMockPersonAttribute:getMockPersonAttribute,
            getMockPersonAttributesArray:getMockPersonAttributesArray,
            getMockModel: getMockModel,
            getMockPatient: getMockPatient,
            getMockObsField:getMockObsField,
            getMockLocations: getMockLocations,
            getMockEtlLocations: getMockEtlLocations,
            getMockedFormList:getMockedFormList,
            getMockRestEncounter:getMockRestEncounter,
            getTriageFormModel:getTriageFormModel
          };

    return mock;

    function getMockPatient() {
      return {
        identifiers:['test-patient'],
        person:{
        age: 63,
        birthdate: '1951-12-09T00:00:00.000+0245',
        dead: false,
        deathDate: null,
        gender: 'F',
        preferredName:{
          familyName: 'Testty',
          givenName: 'Testty',
          middleName: 'Testty'
        },
        preferredAddress: {
          address1: null,
          address2: null,
          address3: null,
          address4: 'AINABKOI',
          address5: 'KIPKURERE',
          address6: 'TIMBOROA',
          cityVillage: 'KAHUHO A',
          country: null,
          countyDistrict: 'ELDORET EAST',
          postalCode: null,
          preferred: true,
          stateProvince: null},
        attributes: '_attributes'
      },
        uuid: 'xxxx',
      };
    }

    function getMockEtlLocations() {
        return {
          startIndex:0, size:1,
          result: [{locationId: 1,
          name: 'Location-1',
          description: 'Moi Teaching and Referral Hospital - Module 1',
          address1: 'P.O Box 30100-3 Eldoret',
          address2: 'xxx',
          uuid: 'passed-uuid'}]
        };
      }

    function getMockedFormList(uuid) {
      return {
        results: [
                {
                  uuid: 'passed-uuid',
                  name: 'AMPATH POC Adult Return Visit Form v0.01',
                  version: '0.01',
                  encounterType: {
                    uuid: '0010c6dffd0f',
                    display: 'ADULTRETURN',
                    name: 'ADULTRETURN',
                    description: 'Outpatient Adult Return Visit',
                  }
                },
                {
                  uuid: 'f42f7c5f2ab',
                  name: 'AMPATH POC Pead Return Visit Form v0.01',
                  version: '0.01',
                  encounterType: {
                    uuid: '8d5b2be0-c2cc-11de-8d13-0010c6dffd0f',
                    display: 'ADULTRETURN',
                    name: 'ADULTRETURN',
                    description: 'Outpatient Adult Return Visit'
                  }
                }
              ]
      };

    }

    function getMockLocations() {
      var testLocations = [
        {
          uuid: 'uuid_1',
          name: 'Location-1',
          display: 'Location-1',
          description: 'Mock Location 1'
        },
        {
          uuid: 'uuid_100',
          name: 'Location-100',
          display: 'Location-100',
          description: 'Mock Location 2'
        },
        {
          uuid: 'uuid_101',
          name: 'Location-101',
          display: 'Location-101',
          description:'Mock Location 3'
        }
      ];

      return testLocations;
    }

    function getMockObs()  {
      return {
        uuid: 'passed-uuid',
        display: 'PROBLEM RESOLVED: MALARIA',
        concept: {
          uuid: 'a8af4aa0-1350-11df-a1f1-0026b9348838',
          display: 'PROBLEM RESOLVED'
        }
      };
    }

    function getMockPersonAttribute() {
      return {
        results: [{
                display:  'Health Center 2 = 9',
                uuid:  'passed-uuid',
                value: {
                  uuid:  'location1-uuid',
                  display:  'Location 5 = 5'
                },
                attributeType: {
                  uuid:  'fb121d9dc370',
                  display:  'Health Center 2'
                }
              },
              {
                display:  'Health Center = 4',
                uuid:  'passed-uuid-2',
                value: {
                  uuid:  'location2-uuid',
                  display:  'Location 9 '
                },
                attributeType: {
                  uuid:  '8d87236c-c2cc-11de-8d13-0010c6dffd0f',
                  display:  'Health Center 2'
                }
              }]
      };
    }

    function getMockPersonAttributesArray() {
      var testData = [{uuid:'f123244d-8f1d-4430-9191-98ce60f3723b',
            attributeType:'8d87236c-c2cc-11de-8d13-0010c6dffd0f',
            name:'Health Center',
            value:{uuid:'c09380bc-1691-11df-97a5-7038c432aabf',
            display:'Location-5'}},
            {uuid:'413e25e9-12ad-4cbe-8197-d487e2da1959',
            attributeType:'7ef225db-94db-4e40-9dd8-fb121d9dc370',
            name:'Health Center 2',
            value:{uuid:'c093879e-1691-11df-97a5-7038c432aabf',
            display:'Location-9'}}];
      return testData;

    }

    function getMockStates() {
      return [
            {
              state: 'dashboard',
              config: {
                url: '/',
                templateUrl: 'app/dashboard/dashboard.html',
                title: 'dashboard',
                settings: {
                      nav: 1,
                      content: '<i class="fa fa-dashboard"></i> Dashboard'
                    }
              }
            }
        ];
    }

    function getMockObsField()
    {
      var obsField = {
        key: 'obs1_a89ff9a6n1350n11dfna1f1n0026b9348838',
        type: 'select',
        data: {concept:'a89ff9a6-1350-11df-a1f1-0026b9348838',
          id:'q7a'},
        defaultValue: '',
        templateOptions: {
          type: 'text',
          label: '7a. Visit Type',
          required:false,
          options:[]
        },
        expressionProperties: {
          'templateOptions.disabled': false
        },
        hideExpression:''
      };
      return obsField;
    }

    function getMockSchema() {
      return {
          name: 'test-form',
          uuid: 'xxxx',
          processor: 'postEncounterForm',
          pages: [
            {
              label:'page 1',
              sections:[
                {
                  label:'Encounter Details',
                  questions:[
                    {
                      label: 'Visit Date',
                      type: 'encounterDate',
                      required: 'true',
                      id:'encDate',
                      questionOptions:{
                        rendering:'date'
                      },
                      validators:[{type:'date'}]
                    },
                    {
                      type: 'encounterProvider',
                      label: 'Provider',
                      id:'provider',
                      questionOptions:{
                        rendering:'ui-select-extended'
                      },
                      required: 'true'
                    },
                    {
                      type: 'encounterLocation',
                      label: 'Facility Name',
                      id:'location',
                      questionOptions:{
                        rendering:'ui-select-extended'
                      },
                      required: 'true'
                    }
                  ]
                }
              ]
            },
            {
              label:'Page 2',
              sections:[
                {
                  label: 'Visit Type',
                  questions: [
                    {
                      id:'q7a',
                      label: '7a. Visit Type',
                      type: 'obs',
                      required:'true',
                      questionOptions:{
                        concept: 'a89ff9a6-1350-11df-a1f1-0026b9348838',
                        rendering:'select',
                        answers:[
                          {value: 'a89b6440-1350-11df-a1f1-0026b9348838', label: 'Scheduled visit'},
                          {value: 'a89ff816-1350-11df-a1f1-0026b9348838', label: 'Unscheduled Visit Early'},
                          {value: 'a89ff8de-1350-11df-a1f1-0026b9348838', label: 'Unscheduled Visit Late'}
                        ]
                      },
                      validators: []
                    },
                    {
                      type: 'obs',
                      questionOptions:{
                        concept: 'dc1942b2-5e50-4adc-949d-ad6c905f054e',
                        rendering:'date'
                      },
                      validators: [{type: 'date', allowFutureDates: 'true'}],
                      label: '7b. If Unscheduled, actual scheduled date'
                    },
                    {
                      label: 'tabs/day',
                      questionOptions:{
                        concept: 'dc1942b2-5e50-4adc-949d-ad6c905f054e',
                        rendering:'number',
                        max: 30,
                        min: 0
                      },
                      type: 'obs',
                      hide: [
                        {
                          field: 'tb_current',
                          value: [
                            'a899f51a-1350-11df-a1f1-0026b9348838',
                            'a897d1a4-1350-11df-a1f1-0026b9348838',
                            'a8a382ba-1350-11df-a1f1-0026b9348838'
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  label:'Problem List',
                  questions:[
                    {
                      type: 'obsGroup',
                      label: '23a. Problem Added',
                      questionOptions: {
                        rendering:'repeating',
                        concept: 'a89c2d8a-1350-11df-a1f1-0026b9348838'
                      },
                      questions:[
                        {
                          label: 'Problem Added',
                          type: 'problem',
                          questionOptions: {
                            rendering:'text',
                            concept: 'a8ae835e-1350-11df-a1f1-0026b9348838'
                          },
                          validators: []
                        }
                      ]
                    }
              ]
                }
            ]
            },
           {
            label:'Lab Results',
            sections:[
              {
                label: 'Tests Results and Test Date',
                questions: [
                  {
                    type: 'obsGroup',
                    label: 'Lab Results',
                    questionOptions: {
                      rendering:'group',
                      concept: 'a8a003a6-1350-11df-a1f1-0026b9348838'
                    },
                    questions: [
                      {
                        label: 'WBC/mm3',
                        type: 'obs',
                        questionOptions:{
                          concept: 'a896dea2-1350-11df-a1f1-0026b9348838',
                          rendering:'number',
                          showDate: 'true',
                          max: 500,
                          min: 0
                        },
                        validators: [
                          {
                            type: 'date'
                          }
                        ]
                      },
                      {
                        label: 'Hgb g/dL',
                        type: 'obs',
                        questionOptions:{
                          concept: 'a8908a16-1350-11df-a1f1-0026b9348838',
                          rendering:'number',
                          showDate: 'true',
                          max: 50,
                          min: 0
                        },
                        validators: [
                          {
                            type: 'date'
                          }
                        ]
                      }
                    ]
                  }]},
            ]
          }
          ]
        };
    }

    function getMockRestEncounter() {
      return {
        uuid: "test-uuid",
        encounterDatetime: "2015-11-30T14:44:38.000+0300",
        form: {
          uuid: "a2b811ed-6942-405a-b7f8-e7ad6143966c",
          name: "Triage Encounter Form v0.01"
        },
        location: {
          uuid: "08fec056-1352-11df-a1f1-0026b9348838",
          display: "Location-13"
        },
        encounterType: {
          uuid: "a44ad5e2-b3ec-42e7-8cfa-8ba3dbcf5ed7",
          display: "TRIAGE"
        },
        provider: {
          uuid: "5b6e31da-1359-11df-a1f1-0026b9348838",
          display: "Giniton Giniton Giniton"
        },
        obs: [
          {
            uuid: "655fb051-499f-4240-9a1d-0dff5f8b5730",
            obsDatetime: "2015-11-30T14:44:38.000+0300",
            concept: {
              uuid: "9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b"
            },
            value: {
              uuid: "9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b",
              display: "NOT APPLICABLE"
            },
          groupMembers: null
        },
        {
          uuid: "d168285f-636b-4558-aaf1-7036e4a49f80",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a65e36-1350-11df-a1f1-0026b9348838"
          },
          value: 80,
          groupMembers: null
        },
        {
          uuid: "fcf67bd7-612a-48a3-9e8d-5097af648c05",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a65fee-1350-11df-a1f1-0026b9348838"
          },
          value: 35,
          groupMembers: null
        },
        {
          uuid: "29953cdb-d4e3-4024-9bb1-e1c0a7fca6ce",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8b02524-1350-11df-a1f1-0026b9348838"
          },
          value: {
            uuid: "8b715fed-97f6-4e38-8f6a-c167a42f8923",
            display: "KENYA NATIONAL HEALTH INSURANCE FUND"
          },
          groupMembers: null
        },
        {
          uuid: "5e12a2f5-678b-4b1e-a646-23221bad8797",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a65f12-1350-11df-a1f1-0026b9348838"
          },
          value: 50,
          groupMembers: null
        },
        {
          uuid: "51e18815-8032-4cb4-b2e8-8c561ee53093",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a6619c-1350-11df-a1f1-0026b9348838"
          },
          value: 180,
          groupMembers: null
        },
        {
          uuid: "f26402b1-5226-4afd-a60c-c2ea096783c1",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "93aa3f1d-1c39-4196-b5e6-8adc916cd5d6"
          },
          value: {
            uuid: "a89ad3a4-1350-11df-a1f1-0026b9348838",
            display: "NOT APPLICABLE"
          },
          groupMembers: null
        },
        {
          uuid: "aaaf883b-ba97-45ef-8b32-d37a48bb2342",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a899a9f2-1350-11df-a1f1-0026b9348838"
          },
          value: {
            uuid: "a899ac7c-1350-11df-a1f1-0026b9348838",
            display: "NEVER MARRIED"
          },
          groupMembers: null
        },
        {
          uuid: "2cc74686-92ba-49cc-af49-6f1a02e608ba",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a65d5a-1350-11df-a1f1-0026b9348838"
          },
          value: 120,
          groupMembers: null
        },
        {
          uuid: "5d268f3a-a6c9-495a-bf15-605e94a7eb08",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a89ff9a6-1350-11df-a1f1-0026b9348838"
          },
          value: {
            uuid: "a89b6440-1350-11df-a1f1-0026b9348838",
            display: "SCHEDULED VISIT"
          },
          groupMembers: null
        },
        {
          uuid: "557a1246-b3a7-49d2-9f27-e1a6c1059496",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8a660ca-1350-11df-a1f1-0026b9348838"
          },
          value: 65,
          groupMembers: null
        },
        {
          uuid: "ccfba5fc-8202-4506-a2ab-7a9dd04569bb",
          obsDatetime: "2015-11-30T14:44:38.000+0300",
          concept: {
            uuid: "a8af49d8-1350-11df-a1f1-0026b9348838"
          },
          value: {
            uuid: "a899b42e-1350-11df-a1f1-0026b9348838",
            display: "NO"
          },
          groupMembers: null
        }
        ]
      };
    }

    function getTriageFormModel() {
      return {
        "section_Encounter_Details": {
          "encounterDatetime": {
            "schemaQuestion": {
              "label": "Visit Date",
              "type": "encounterDatetime",
              "required": "true",
              "default": "",
              "id": "encDate",
              "questionOptions": {
                "rendering": "date"
              },
              "validators": [
                {
                  "type": "date"
                }
              ]
            }
          },
          "encounterProvider": {
            "schemaQuestion": {
              "type": "encounterProvider",
              "label": "Provider",
              "id": "provider",
              "required": "true",
              "default": "",
              "questionOptions": {
                "rendering": "ui-select-extended"
              }
            },
            "value": ""
          },
          "encounterLocation": {
            "schemaQuestion": {
              "type": "encounterLocation",
              "label": "Facility name (site/satellite clinic required):",
              "id": "location",
              "required": "true",
              "questionOptions": {
                "rendering": "ui-select-extended"
              }
            },
            "value": ""
          },
          "obs1_a8b02524n1350n11dfna1f1n0026b9348838": {
            "concept": "a8b02524-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Patient covered by NHIF:",
              "questionOptions": {
                "rendering": "select",
                "concept": "a8b02524-1350-11df-a1f1-0026b9348838",
                "answers": [
                  {
                    "concept": "8b715fed-97f6-4e38-8f6a-c167a42f8923",
                    "label": "Yes"
                  },
                  {
                    "concept": "a899e0ac-1350-11df-a1f1-0026b9348838",
                    "label": "No"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": "8b715fed-97f6-4e38-8f6a-c167a42f8923"
          },
          "obs1_a89ff9a6n1350n11dfna1f1n0026b9348838": {
            "concept": "a89ff9a6-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Was this visit scheduled?",
              "id": "scheduledVisit",
              "questionOptions": {
                "rendering": "select",
                "concept": "a89ff9a6-1350-11df-a1f1-0026b9348838",
                "answers": [
                  {
                    "concept": "a89b6440-1350-11df-a1f1-0026b9348838",
                    "label": "Scheduled visit"
                  },
                  {
                    "concept": "a89ff816-1350-11df-a1f1-0026b9348838",
                    "label": "Unscheduled Visit Early"
                  },
                  {
                    "concept": "a89ff8de-1350-11df-a1f1-0026b9348838",
                    "label": "Unscheduled Visit Late"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": "a89b6440-1350-11df-a1f1-0026b9348838"
          },
          "obs1_dc1942b2n5e50n4adcn949dnad6c905f054e": {
            "concept": "dc1942b2-5e50-4adc-949d-ad6c905f054e",
            "schemaQuestion": {
              "label": "If Unscheduled, actual scheduled date",
              "id": "q7b",
              "type": "obs",
              "questionOptions": {
                "rendering": "date",
                "concept": "dc1942b2-5e50-4adc-949d-ad6c905f054e"
              },
              "validators": [
                {
                  "type": "date",
                  "allowFutureDates": "true"
                },
                {
                  "type": "js_expression",
                  "failsWhenExpression": "!isEmpty(scheduledVisit) && arrayContains(['a89ff816-1350-11df-a1f1-0026b9348838','a89ff8de-1350-11df-a1f1-0026b9348838'], scheduledVisit) && isEmpty(myValue)",
                  "message": "Patient visit marked as unscheduled. Please provide the scheduled date."
                },
                {
                  "type": "conditionalRequired",
                  "message": "Patient visit marked as unscheduled. Please provide the scheduled date.",
                  "referenceQuestionId": "scheduledVisit",
                  "referenceQuestionAnswers": [
                    "a89ff816-1350-11df-a1f1-0026b9348838",
                    "a89ff8de-1350-11df-a1f1-0026b9348838"
                  ]
                }
              ],
              "disableExpression": [
                {
                  "disableWhenExpression": "!arrayContains(['a89ff816-1350-11df-a1f1-0026b9348838','a89ff8de-1350-11df-a1f1-0026b9348838'], scheduledVisit)"
                }
              ]
            },
            "value": "2015-12-16T21:00:00.000Z"
          }
        },
        "section_PWPs": {
          "obs1_a899a9f2n1350n11dfna1f1n0026b9348838": {
            "concept": "a899a9f2-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Civil Status:",
              "questionOptions": {
                "rendering": "select",
                "concept": "a899a9f2-1350-11df-a1f1-0026b9348838",
                "answers": [
                  {
                    "concept": "a899af10-1350-11df-a1f1-0026b9348838",
                    "label": "Cohabitating"
                  },
                  {
                    "concept": "a899af10-1350-11df-a1f1-0026b9348838",
                    "label": "Divorced"
                  },
                  {
                    "concept": "a8aa76b0-1350-11df-a1f1-0026b9348838",
                    "label": "Married monogamous"
                  },
                  {
                    "concept": "a8b03712-1350-11df-a1f1-0026b9348838",
                    "label": "Married polygamous"
                  },
                  {
                    "concept": "a899aba0-1350-11df-a1f1-0026b9348838",
                    "label": "Separated"
                  },
                  {
                    "concept": "a899ac7c-1350-11df-a1f1-0026b9348838",
                    "label": "Single"
                  },
                  {
                    "concept": "a899ae34-1350-11df-a1f1-0026b9348838",
                    "label": "Widowed"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": "a899ae34-1350-11df-a1f1-0026b9348838"
          },
          "obs1_a8af49d8n1350n11dfna1f1n0026b9348838": {
            "concept": "a8af49d8-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Discordant couple:",
              "questionOptions": {
                "rendering": "select",
                "concept": "a8af49d8-1350-11df-a1f1-0026b9348838",
                "answers": [
                  {
                    "concept": "a899b35c-1350-11df-a1f1-0026b9348838",
                    "label": "Yes"
                  },
                  {
                    "concept": "a899b42e-1350-11df-a1f1-0026b9348838",
                    "label": "No"
                  },
                  {
                    "concept": "a899b50a-1350-11df-a1f1-0026b9348838",
                    "label": "Unknown"
                  },
                  {
                    "concept": "a89ad3a4-1350-11df-a1f1-0026b9348838",
                    "label": "N/A"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_93aa3f1dn1c39n4196nb5e6n8adc916cd5d6": {
            "concept": "93aa3f1d-1c39-4196-b5e6-8adc916cd5d6",
            "schemaQuestion": {
              "label": "Is this patient a member of any of the following high risk populations?",
              "questionOptions": {
                "rendering": "select",
                "concept": "93aa3f1d-1c39-4196-b5e6-8adc916cd5d6",
                "answers": [
                  {
                    "concept": "5da55301-e28e-4fdf-8b64-02622dedc8b0",
                    "label": "Client of sex worker"
                  },
                  {
                    "concept": "a89ff438-1350-11df-a1f1-0026b9348838",
                    "label": "Commercial sex worker"
                  },
                  {
                    "concept": "a8af49d8-1350-11df-a1f1-0026b9348838",
                    "label": "Discordant couple"
                  },
                  {
                    "concept": "a890d57a-1350-11df-a1f1-0026b9348838",
                    "label": "IV drug use"
                  },
                  {
                    "concept": "e19c35f0-12f0-46c2-94ea-97050f37b811",
                    "label": "MSM"
                  },
                  {
                    "concept": "a89ad3a4-1350-11df-a1f1-0026b9348838",
                    "label": "N/A"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_9ce5dbf0na141n4ad8n8c9dncd2bf84fe72b": {
            "concept": "9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b",
            "schemaQuestion": {
              "label": "Were any of the following PWP services provided?",
              "questionOptions": {
                "rendering": "select",
                "concept": "9ce5dbf0-a141-4ad8-8c9d-cd2bf84fe72b",
                "answers": [
                  {
                    "concept": "f0a280e8-eb88-41a8-837a-f9949ed1b9cd0",
                    "label": "Condom promotion/provision"
                  },
                  {
                    "concept": "bf51f71e-937c-4da5-ae07-654acf59f5bb",
                    "label": "Couple counseling"
                  },
                  {
                    "concept": "a8af49d8-1350-11df-a1f1-0026b9348838",
                    "label": "Needle exchange"
                  },
                  {
                    "concept": "05656545-86be-4605-9527-34fb580534b1",
                    "label": "Targeted risk reduction"
                  },
                  {
                    "concept": "a89ad3a4-1350-11df-a1f1-0026b9348838",
                    "label": "N/A"
                  }
                ]
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          }
        },
        "section_Vital_Signs": {
          "obs1_a8a65d5an1350n11dfna1f1n0026b9348838": {
            "concept": "a8a65d5a-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "BP:Systolic:",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a65d5a-1350-11df-a1f1-0026b9348838",
                "max": "250",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a65e36n1350n11dfna1f1n0026b9348838": {
            "concept": "a8a65e36-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "BP:Diastolic:",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a65e36-1350-11df-a1f1-0026b9348838",
                "max": "150",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a65f12n1350n11dfna1f1n0026b9348838": {
            "concept": "a8a65f12-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Pulse(Rate/Min):",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a65f12-1350-11df-a1f1-0026b9348838",
                "max": "230",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a65feen1350n11dfna1f1n0026b9348838": {
            "concept": "a8a65fee-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Temp(C):",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a65fee-1350-11df-a1f1-0026b9348838",
                "max": "43",
                "min": "25"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a660can1350n11dfna1f1n0026b9348838": {
            "concept": "a8a660ca-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Weight(Kg):",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a660ca-1350-11df-a1f1-0026b9348838",
                "max": "150",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a6619cn1350n11dfna1f1n0026b9348838": {
            "concept": "a8a6619c-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Height(CM):",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a6619c-1350-11df-a1f1-0026b9348838",
                "max": "350",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a8a66354n1350n11dfna1f1n0026b9348838": {
            "concept": "a8a66354-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Sp02:",
              "questionOptions": {
                "rendering": "number",
                "concept": "a8a66354-1350-11df-a1f1-0026b9348838",
                "max": "100",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          },
          "obs1_a89c60c0n1350n11dfna1f1n0026b9348838": {
            "concept": "a89c60c0-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "BMI:Kg/M2",
              "questionOptions": {
                "rendering": "number",
                "concept": "a89c60c0-1350-11df-a1f1-0026b9348838",
                "max": "100",
                "min": "0"
              },
              "type": "obs",
              "validators": []
            },
            "value": ""
          }
        }
      };
    }

    function getMockModel() {
    return {
      "section_Encounter_Details": {
        "encounterDate": {
          "schemaQuestion": {
            "label": "Visit Date",
            "type": "encounterDate",
            "required": "true",
            "default": "",
            "id": "encDate",
            "questionOptions": {
              "rendering": "date"
            }
          },
          value: ''
        },
        "encounterProvider": {
          "schemaQuestion": {
            "type": "encounterProvider",
            "label": "Provider",
            "id": "provider",
            "required": "true",
            "default": "",
            "questionOptions": {
              "rendering": "ui-select-extended"
            }
          },
          value:''
        },
        "encounterLocation": {
          "schemaQuestion": {
            "type": "encounterLocation",
            "label": "Facility name (site/satellite clinic required):",
            "id": "location",
            "required": "true",
            "questionOptions": {
              "rendering": "ui-select-extended"
            }
          },
          value: ''
        }
      },
      "section_Section_Name": {
        "obs1_1232": {
          "concept": "1232",
          "schemaQuestion": {
            "type": "obs",
            "label": "question1",
            "id": "q1",
            "required": "true",
            "default": "",
            "questionOptions": {
              "rendering": "text",
              "concept": "1232"
            }
          },
          "value": "Test question 1"
        },
        "obs1_1234": {
          "concept": "1234",
          "schemaQuestion": {
            "type": "obs",
            "label": "question2",
            "id": "q2",
            "required": "true",
            "default": "",
            "questionOptions": {
              "rendering": "date",
              "concept": "1234"
            }
          },
          "value": "2015-11-24T21:00:00.000Z"
        },
        "obs1_1233": {
          "concept": "1233",
          "schemaQuestion": {
            "type": "obs",
            "label": "question3",
            "id": "q3",
            "required": "true",
            "default": "",
            "questionOptions": {
              "rendering": "number",
              "concept": "1233"
            }
          },
          "value": 2678
        }
      },
      "section_test_Groups": {
        "obsGroup_Was_patient_hospitalized": {
          "groupConcept": "a8a003a6-1350-11df-a1f1-0026b9348838",
          "obs1_a8a07a48n1350n11dfna1f1n0026b9348838": {
            "concept": "a8a07a48-1350-11df-a1f1-0026b9348838",
            "schemaQuestion": {
              "label": "Reason for hospitalization",
              "type": "obs",
              "questionOptions": {
                "rendering": "text",
                "concept": "a8a07a48-1350-11df-a1f1-0026b9348838"
              },
              "id": "hospitalizationReason",
              "validators": [
                {
                  "type": "conditionalAnswered",
                  "message": "Providing diagnosis but didn't answer that patient was hospitalized in question 11a",
                  "referenceQuestionId": "wasHospitalized",
                  "referenceQuestionAnswers": [
                    "a899b35c-1350-11df-a1f1-0026b9348838"
                  ]
                }
              ]
            },
            "value": "Group Malaria"
          },
          "obsGroup_Date_of_hospitalization": {
            "groupConcept": "made-up-concept",
            "obs1_madenupnconceptn2": {
              "concept": "made-up-concept-2",
              "schemaQuestion": {
                "type": "obs",
                "label": "Start Date",
                "questionOptions": {
                  "rendering": "date",
                  "concept": "made-up-concept-2"
                }
              },
              "value": "2015-09-30T21:00:00.000Z"
            },
            "obs1_madenupnconceptn3": {
              "concept": "made-up-concept-3",
              "schemaQuestion": {
                "type": "obs",
                "label": "End Date",
                "questionOptions": {
                  "rendering": "date",
                  "concept": "made-up-concept-3"
                }
              },
              "value": "2015-11-29T21:00:00.000Z"
            }
          }
        }
      },
      "section_test Group_Repeating": {
        "obsRepeating_Was_patient_hospitalized": [
          {
            "groupConcept": "a8a003a6y1350y11dfya1f1y0026b9348838",
            "obs1_a8a07a48x1350x11dfxa1f1n0026b9348838": {
              "concept": "a8a07a48x1350x11dfxa1f1-0026b9348838",
              "schemaQuestion": {
                "label": "Reason for hospitalization",
                "type": "obs",
                "questionOptions": {
                  "rendering": "text",
                  "concept": "a8a07a48x1350x11dfxa1f1-0026b9348838"
                },
                "id": "hospitalizationReason",
                "validators": [
                  {
                    "type": "conditionalAnswered",
                    "message": "Providing diagnosis but didn't answer that patient was hospitalized in question 11a",
                    "referenceQuestionId": "wasHospitalized",
                    "referenceQuestionAnswers": [
                      "a899b35c-1350-11df-a1f1-0026b9348838"
                    ]
                  }
                ]
              },
              "value": "Malaria"
            },
            "obsGroup_Date_of_hospitalization": {
              "groupConcept": "made-up-concept-4",
              "obs1_madenupnconceptn5": {
                "concept": "made-up-concept-5",
                "schemaQuestion": {
                  "type": "obs",
                  "label": "Start Date",
                  "questionOptions": {
                    "rendering": "date",
                    "concept": "made-up-concept-5"
                  }
                },
                "value": "2015-10-31T21:00:00.000Z"
              },
              "obs1_madenupnconceptn6": {
                "concept": "made-up-concept-6",
                "schemaQuestion": {
                  "type": "obs",
                  "label": "End Date",
                  "questionOptions": {
                    "rendering": "date",
                    "concept": "made-up-concept-6"
                  }
                },
                "value": "2015-12-08T21:00:00.000Z"
              }
            }
          }
          // ,
          // {
          //   "obs1_a8a07a48x1350x11dfxa1f1n0026b9348838": {
          //     "value": "Stomach complications"
          //   },
          //   "obsGroup_Date of hospitalization": {
          //     "obs1_madenupnconceptn5": {
          //       "value": "2015-10-31T21:00:00.000Z"
          //     },
          //     "obs1_madenupnconceptn6": {
          //       "value": "2015-11-24T21:00:00.000Z"
          //     }
          //   }
          // }
        ]
      }
    };
  }

  }
})();
