"use strict";function _classCallCheck(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var FilterStateInternal=exports.FilterStateInternal=function t(){_classCallCheck(this,t),this.isActive=!1,this.shouldAbort=!1,this.discardResults=!1,this.count=0,this.scoredCandidates=null,this.accessor=null,this.scoreProvider=null},FilterState=exports.FilterState=function t(s){_classCallCheck(this,t),this.abort=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];s.isActive=!1,s.shouldAbort=!0,s.discardResults=!t},this.isActive=function(){return s.isActive},this.isCanceled=function(){return s.shouldAbort},this.getProgressCount=function(){return s.count}};