# DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/JonathanPa/Test-Tesla-API/0.0.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vehicleGet**](DefaultApi.md#vehicleGet) | **GET** /vehicle | 


<a name="vehicleGet"></a>
# **vehicleGet**
> InlineResponse200 vehicleGet()



Details about the owned vehicle.

### Example
```java
// Import classes:
//import io.swagger.client.api.DefaultApi;

DefaultApi apiInstance = new DefaultApi();
try {
    InlineResponse200 result = apiInstance.vehicleGet();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#vehicleGet");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

