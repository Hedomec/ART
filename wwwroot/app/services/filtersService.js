(function () {
    'use strict';

    angular.module('app').service('filtersService', [fnService]);

    function fnService() {
        return {
            getFilters: function () {
                return {
                    fields: [
                        {
                            name: 'awbBl', label: 'AWB / BL', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'shipmentID', label: 'Shipment ID', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'status', label: 'Status', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'ON TIME', text: 'On time', color: 'green' },
                                { value: 'DELAYED', text: 'Delayed', color: 'red' }
                            ], multiple: false, showSearch: false, emptyOption: 'All',
                            templateSelect: '<md-icon style="color: {{option.color}} !important">label</md-icon><span flex>{{option.text}}</span>'
                        },
                        {
                            name: 'shipmentStatus', label: 'Shipment status', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'Not Departed', text: 'Not Departed', color: 'gray' },
                                { value: 'Departed', text: 'Departed', color: '#ffe200' },
                                { value: 'In Transit', text: 'In Transit', color: 'blue' },
                                { value: 'Arrived', text: 'Arrived', color: 'purple' },
                                { value: 'Delivered', text: 'Delivered', color: 'green' }
                            ], multiple: true, showSearch: false,
                            templateSelect: '<md-icon style="color: {{option.color}} !important">label</md-icon><span flex>{{option.text}}</span>'
                        },
                        {
                            name: 'transportarionMode', label: 'Transportarion Mode', type: 'select', flex: '20', hideErrorMsg: true,
                            data: [
                                { value: 'A', text: 'Air' },
                                { value: 'O', text: 'Ocean' }
                            ], multiple: false, showSearch: false, emptyOption: 'All',
                        },
                        {
                            name: 'countryOrigin', label: 'Country origin', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetOriginCountries', multiple: true, showSearch: true
                        },
                        {
                            name: 'countryDestination', label: 'Country destination', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetDestinationCountries', multiple: true, showSearch: true
                        },
                        {
                            name: 'cityOrigin', label: 'City origin', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetOriginCity', multiple: true, showSearch: true
                        },
                        {
                            name: 'cityDestination', label: 'City destination', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetDestinationCity', multiple: true, showSearch: true
                        },
                        {
                            name: 'FFW', label: 'AGENT / FFWD', type: 'select', flex: '20', hideErrorMsg: true,
                            entity: 'FiltersData/GetFFWs', multiple: true, showSearch: true
                        },
                        {
                            name: 'dateFrom', label: 'From date', type: 'date', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'dateTo', label: 'To date', type: 'date', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'consigne', label: 'Consignee', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'comodity', label: 'Commodity', type: 'text', flex: '20', hideErrorMsg: true
                        },
                        {
                            name: 'containerNumber', label: 'Container number', type: 'text', flex: '20', hideErrorMsg: true
                        },
                    ]
                };
            }
        };
    }
})();
