var isDebug = /(\?|&)debug_ga=1/.test(window.location.search);

//cookie code
function getCookieValue(name) {
	var cookie = document.cookie;
	var pos = cookie.indexOf(name + "=");
	if (pos != -1) {
		var start = pos + name.length + 1;
		var end = cookie.indexOf(";", start);
		if (end == -1) end = cookie.length;
		var value = cookie.substring(start, end);
		return value;
	} else {
		return "";
	}
}

//Attempt to get DemandBase company cookie info
var demandBaseCompany = null;
if (typeof $.parseJSON != "undefined") { //correct jQuery version?
	demandBaseCompany = $.parseJSON(unescape(getCookieValue('co')));
	if (demandBaseCompany == null && document.location.href.indexOf('techtarget.com') == -1) {
		if (isDebug) {console.log("On non-techtarget domain... attempting to reflect cookie");}
		$.ajax({
			dataType: 'jsonp',
			data: 'id=10',
			jsonp: 'cookieReflectionCallback',
			url: 'http://users.techtarget.com/registration/json/common/GetCookiesWithCallback?callback=cookieReflectionCallback'
		});
	} else if (demandBaseCompany != null) {
		if (isDebug) {console.log("DemandBase company set from cookie");}
	} else {
		if (isDebug) {console.log("DemandBase company set not set for techtarget.com domain");}
	}
}

function cookieReflectionCallback(data) {
	$.each(data.results, function(i,item){
		if (item.name == 'co') {
			cookieValue = unescape(item.value);
			if (isDebug) {console.log("DemandBase cookie reflected. Initializing local var and setting local domain cookie:" + cookieValue);}
			if (typeof item.value != "undefined") {
				demandBaseCompany = $.parseJSON(unescape(item.value));
				now = new Date();
				// get date for 90 days from now
				daysFromNow = new Date(now.getTime() + (90 * 24 * 60 * 60 * 1000));
				if (typeof SITE_domain != "undefined") {
					setCookie("co", cookieValue, daysFromNow.toGMTString(), "/", window.location.hostname);
				}
			}
		}
	});
}

function createDemandBaseCustomVariableString(company, attempts) {
	maxAttempts = 2;
	separator = "/";
	custVar = "NO DATA";
	attempts = (typeof attempts == "undefined") ? 1 : attempts;
	if (company == null) {
		if (attempts <= maxAttempts) {
			attempts++;
			custVar = setTimeout(function() {
				createDemandBaseCustomVariableString(demandBaseCompany, attempts);
			}, 250);
		} else {
			custVar = "NO COOKIE DATA";
		}
	} else {
		//check for new data point, if it exists then we're creating a new format for the 'db' custom variable
		if (typeof company.ipAddress != "undefined") {
			custVar = separator;
	 		custVar += company.ipAddress;
			custVar += separator;
	 		custVar += company.countryId;
	 		custVar += separator;
	 		custVar += company.countryName;
	 		custVar += separator;
	 		custVar += company.state;
	 		custVar += separator;
	 		custVar += company.industry;
	 		custVar += separator;
	 		custVar += company.id;
	 		custVar += separator;
	 		custVar += company.name; 
	 		custVar += separator;
	 		custVar += company.empSize;
	 		custVar = custVar.replace(/UNKNOWN/g,"U");
		} else {
			custVar = separator;
			custVar += (company.dbSic == UNKNOWN) ? "U" : company.dbSic;
			custVar += separator;
			custVar += (company.industryId == UNKNOWN) ? "U" : company.industryId;
			custVar += "-";
			custVar += eval("dbIndustryMapping.id_" + company.industryId);
			custVar += separator;
			custVar += (company.empSizeId == UNKNOWN) ? "U" : company.empSizeId;
			custVar += "-";
			custVar += eval("dbEmpSizeMapping.id_" + company.empSizeId);
			custVar += separator;
			custVar += (company.revenueId == UNKNOWN) ? "U" : company.revenueId;
			custVar += "-";
			custVar += eval("dbRevenueMapping.id_" + company.revenueId);
			custVar += separator;
			custVar += (company.f1000 == "true") ? "f1-Y" : "f1-N"
			custVar += separator;
			custVar += (company.f2000 == "true") ? "f2-Y" : "f2-N"
			custVar += separator;
			custVar += (company.type == UNKNOWN || company.type == "none") ? "U" : company.type;
		}
	}
	return custVar;
	// format (3/5/2013): db=/<IP>/<countryId>/<countryName>/<state>/<industryName>/<ID>/<companyName>/<employeeSize>/
	// old format: db=/<SIC id>/<IND id>-<name>/<SZ id>-<name>/<REV id>-<name>/f1-<Y|N>/f2-<Y|N>/type
}

if (isDebug) {console.log("Executing gtm");}

var gtmCfg = {
	trackType: ((zone == "SEARCH") ? 'application/internalSearch' : 'page')
};

window.dataLayer = window.dataLayer || [];
dataLayer = window.dataLayer;

dataLayer.push({
	'trackType': ((is404) ? 'ERROR 404' : gtmCfg.trackType),
	'parentTopicId': parentTopicId || '0',
	'parentTopicName': parentTopicName || '',
	'topicId': topicId || '0',
	'topicName': topicName || '',
	'uaid': SITE_gaAccountID,
	'uid': uid,
	'siteName': (typeof microsite != "undefined") ? microsite : SITE_name,
	'uidType': uidType,
	'publicationDate': publicationDate || 'null',
	'appCode': appCode || '0',
	'clusterId': clusterId || '0',
	'clusterName': clusterName || '',
	'regTopicId': regTopicId || '0',
	'regTopicName': regTopicName || '',
	'zone': zone,
	'topical': topical,
	'pageIndex': pageIndex || 0,
	'sponsored': (typeof isSponsored != "undefined") ? isSponsored : false,
	'db': createDemandBaseCustomVariableString(demandBaseCompany),
	'memberStatus': memberStatus,
	'is404': String(!!is404) || 'false'
});
