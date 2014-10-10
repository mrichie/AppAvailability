#import <Cordova/CDV.h>

@interface AppAvailability : CDVPlugin

- (void)checkAvailability:(CDVInvokedUrlCommand*)command;
- (void)openURL:(CDVInvokedUrlCommand*)command;

@end
