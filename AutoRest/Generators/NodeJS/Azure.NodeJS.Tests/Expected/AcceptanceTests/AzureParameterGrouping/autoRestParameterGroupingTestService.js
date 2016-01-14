/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var util = require('util');
var msRest = require('ms-rest');
var msRestAzure = require('ms-rest-azure');
var ServiceClient = msRestAzure.AzureServiceClient;

var models = require('./models');
var operations = require('./operations');

/**
 * @class
 * Initializes a new instance of the AutoRestParameterGroupingTestService class.
 * @constructor
 *
 * @param {credentials} credentials - Gets Azure subscription credentials.
 *
 * @param {string} [baseUri] - The base URI of the service.
 *
 * @param {object} [options] - The parameter options
 *
 * @param {Array} [options.filters] - Filters to be added to the request pipeline
 *
 * @param {object} [options.requestOptions] - Options for the underlying request object
 * {@link https://github.com/request/request#requestoptions-callback Options doc}
 *
 * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
 *
 * @param {string} [acceptLanguage] - Gets or sets the preferred language for the response.
 *
 * @param {number} [longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
 *
 * @param {boolean} [generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
 *
 */
function AutoRestParameterGroupingTestService(credentials, baseUri, options) {
  if (credentials === null || credentials === undefined) {
    throw new Error('\'credentials\' cannot be null.');
  }

  if (!options) options = {};

  AutoRestParameterGroupingTestService['super_'].call(this, credentials, options);
  this.baseUri = baseUri;
  if (!this.baseUri) {
    this.baseUri = 'https://localhost';
  }
  this.credentials = credentials;

  if(this.acceptLanguage !== null && this.acceptLanguage !== undefined) { 
    this.acceptLanguage = 'en-US';
  }
  if(this.generateClientRequestId !== null && this.generateClientRequestId !== undefined) { 
    this.generateClientRequestId = true;
  }
  this.parameterGrouping = new operations.ParameterGrouping(this);
  this.models = models;
  msRest.addSerializationMixin(this);
}

util.inherits(AutoRestParameterGroupingTestService, ServiceClient);

module.exports = AutoRestParameterGroupingTestService;
