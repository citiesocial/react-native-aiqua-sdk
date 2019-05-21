
#import "RNAiquaSdk.h"
#import "QGSdk.h"

#if __has_include("RCTConvert.h")
#import "RCTConvert.h"
#else
#import <React/RCTConvert.h>
#endif

@implementation RNAiquaSdk

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(onStart:(NSString *)appId setDevProfile:(BOOL)devProfile)
{
	[[QGSdk getSharedInstance] onStart:appId setDevProfile:devProfile];
}

RCT_EXPORT_METHOD(onStartWithAppGroup:(NSString *)appId appGroup:(NSString *)appGroup devProfile:(BOOL)devProfile)
{
	[[QGSdk getSharedInstance] onStart:appId withAppGroup:appGroup setDevProfile:devProfile];
}

RCT_EXPORT_METHOD(setToken:(NSString *)tokenData)
{
    NSData *token = [RCTConvert NSData:tokenData];
    [[QGSdk getSharedInstance] setToken:token];
}

RCT_EXPORT_METHOD(logEvent:(NSString *)name)
{
    [[QGSdk getSharedInstance] logEvent:name];
}

RCT_EXPORT_METHOD(logEventWithParameters:(NSString *)name parameters:(nonnull NSDictionary *)parameters)
{
    [[QGSdk getSharedInstance] logEvent:name withParameters:parameters];
}

RCT_EXPORT_METHOD(logEventWithValueToSum:(NSString *)name valueToSum:(nonnull NSNumber *)valueToSum)
{
    [[QGSdk getSharedInstance] logEvent:name withValueToSum:valueToSum];
}

RCT_EXPORT_METHOD(logEventWithValueToSumAndCurrency:(NSString *)name valueToSum:(nonnull NSNumber *)valueToSum currency:(NSString *)vtsCurr)
{
    [[QGSdk getSharedInstance] logEvent:name withValueToSum:valueToSum withValueToSumCurrency:vtsCurr];
}

RCT_EXPORT_METHOD(logEventWithParametersAndValueToSum:(NSString *)name parameters:(nonnull NSDictionary *)parameters valueToSum:(nonnull NSNumber *)valueToSum)
{
    [[QGSdk getSharedInstance] logEvent:name withParameters:parameters withValueToSum:valueToSum];
}

RCT_EXPORT_METHOD(logEventWithParametersAndValueToSumAndCurrency:(NSString *)name parameters:(nonnull NSDictionary *)parameters valueToSum:(nonnull NSNumber *)valueToSum currency:(NSString *)vtsCurr)
{
    [[QGSdk getSharedInstance] logEvent:name withParameters:parameters withValueToSum:valueToSum withValueToSumCurrency:vtsCurr];
}



RCT_EXPORT_METHOD(setClickAttributionWindow:(NSInteger)seconds)
{
    [[QGSdk getSharedInstance] setClickAttributionWindow:seconds];
}

RCT_EXPORT_METHOD(setAttributionWindow:(NSInteger)seconds)
{
    [[QGSdk getSharedInstance] setAttributionWindow:seconds];
}

RCT_EXPORT_METHOD(disableInAppCampaigns:(BOOL)disabled)
{
    [[QGSdk getSharedInstance] disableInAppCampaigns:disabled];
}

RCT_EXPORT_METHOD(flush)
{
    [[QGSdk getSharedInstance] flush];
}



RCT_EXPORT_METHOD(setUserId:(NSString *)userId)
{
    [[QGSdk getSharedInstance] setUserId:userId];
}

RCT_EXPORT_METHOD(setName:(NSString *)name)
{
    [[QGSdk getSharedInstance] setName:name];
}

RCT_EXPORT_METHOD(setFirstName:(NSString *)name)
{
    [[QGSdk getSharedInstance] setFirstName:name];
}

RCT_EXPORT_METHOD(setLastName:(NSString *)name)
{
    [[QGSdk getSharedInstance] setLastName:name];
}

RCT_EXPORT_METHOD(setCity:(NSString *)city)
{
    [[QGSdk getSharedInstance] setCity:city];
}

RCT_EXPORT_METHOD(setEmail:(NSString *)email)
{
    [[QGSdk getSharedInstance] setEmail:email];
}

RCT_EXPORT_METHOD(setDayOfBirth:(nonnull NSNumber *)day)
{
    [[QGSdk getSharedInstance] setDayOfBirth:day];
}

RCT_EXPORT_METHOD(setMonthOfBirth:(nonnull NSNumber *)month)
{
    [[QGSdk getSharedInstance] setMonthOfBirth:month];
}

RCT_EXPORT_METHOD(setYearOfBirth:(nonnull NSNumber *)year)
{
    [[QGSdk getSharedInstance] setYearOfBirth:year];
}

RCT_EXPORT_METHOD(setCustomKey:(NSString *)key value:(id)value)
{
    [[QGSdk getSharedInstance] setCustomKey:key withValue:value];
}

@end
  
