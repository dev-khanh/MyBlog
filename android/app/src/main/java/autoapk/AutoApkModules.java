package autoapk;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.provider.Settings;
import android.text.TextUtils;
import android.util.Log;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.core.content.FileProvider;

import com.facebook.react.BuildConfig;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URL;
import java.net.URLConnection;
import javax.annotation.Nonnull;
public class AutoApkModules extends ReactContextBaseJavaModule  {
    private static final String TAG = "DEVK";
    private String urltext = null;
    public AutoApkModules(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "AutoApkModules";
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    public void initSettings() {
        if (!isAccessibilitySettingsOn(getReactApplicationContext())) {
            toAccessibilityService();
        }
    }

    private void toAccessibilityService() {
        Intent intent = new Intent(Settings.ACTION_ACCESSIBILITY_SETTINGS);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    private boolean isAccessibilitySettingsOn(Context mContext) {
        int accessibilityEnabled = 0;
        final String service = mContext.getPackageName() + "/" + AutoInstallAccessibilityService.class.getCanonicalName();
        try {
            accessibilityEnabled = Settings.Secure.getInt(mContext.getApplicationContext().getContentResolver(), android.provider.Settings.Secure.ACCESSIBILITY_ENABLED);
            // Log.v(TAG, "accessibilityEnabled = " + accessibilityEnabled);
        } catch (Settings.SettingNotFoundException e) {
            // Log.e(TAG, "Error finding setting, default accessibility to not found: " + e.getMessage());
        }
        TextUtils.SimpleStringSplitter mStringColonSplitter = new TextUtils.SimpleStringSplitter(':');
        if (accessibilityEnabled == 1) {
            // Log.v(TAG, "***ACCESSIBILITY IS ENABLED*** -----------------");
            String settingValue = Settings.Secure.getString(mContext.getApplicationContext().getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
            if (settingValue != null) {
                mStringColonSplitter.setString(settingValue);
                while (mStringColonSplitter.hasNext()) {
                    String accessibilityService = mStringColonSplitter.next();
                    // Log.v(TAG, "-------------- > accessibilityService :: " + accessibilityService + " " + service);
                    if (accessibilityService.equalsIgnoreCase(service)) {
                        // Log.v(TAG, "We've found the correct setting - accessibility is switched on!");
                        return true;
                    }
                }
            }
        } else {
            // Log.v(TAG, "***ACCESSIBILITY IS DISABLED***");
        }
        return false;
    }

    @ReactMethod
    public void SetEventUpdate(String url) {
        if (CheckForSDCard.isSDCardPresent()) {
            urltext += url;
            new DownloadFile().execute(url);
        } else {
            Toast.makeText(getReactApplicationContext(), "SD Card not found", Toast.LENGTH_LONG).show();
        }
    }

//    @Override
//    public void onPermissionsGranted(int requestCode, List<String> perms) {
//        //Download the file once permission is granted
//        Toast.makeText(getReactApplicationContext(), "" + urltext, Toast.LENGTH_SHORT).show();
//        new DownloadFile().execute(urltext);
//    }
//
//    @Override
//    public void onPermissionsDenied(int requestCode, List<String> perms) {
//        Log.d(TAG, "Permission has been denied");
//    }

//    @Override
//    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
//        EasyPermissions.onRequestPermissionsResult(requestCode, permissions, grantResults, getReactApplicationContext());
//    }

    private class DownloadFile extends AsyncTask<String, String, String> {
        private String fileName;
        private String folder;

        @Override
        protected void onPreExecute() {
            super.onPreExecute();
        }

        @Override
        protected String doInBackground(String... f_url) {
            int count;
            try {
                URL url = new URL(f_url[0]);
                URLConnection connection = url.openConnection();
                connection.connect();
                // getting file length
                int lengthOfFile = connection.getContentLength();
                // input stream to read file - with 8k buffer
                InputStream input = new BufferedInputStream(url.openStream(), 8192);
                //Extract file name from URL
                fileName = f_url[0].substring(f_url[0].lastIndexOf('/') + 1, f_url[0].length());
                //External directory path to save file
                folder = "/sdcard/APK/";
                //Create androiddeft folder if it does not exist
                File directory = new File(folder);
                if (!directory.exists()) {
                    directory.mkdirs();
                }
                // Output stream to write file
                OutputStream output = new FileOutputStream(folder + fileName);
                byte data[] = new byte[1024];
                long total = 0;
                while ((count = input.read(data)) != -1) {
                    total += count;
                    // publishing the progress....
                    // After this onProgressUpdate will be called
                    publishProgress("" + (int) ((total * 100) / lengthOfFile));
                    // Log.d(TAG, "Progress: " + (int) ((total * 100) / lengthOfFile));
                    // writing data to file
                    output.write(data, 0, count);
                }
                output.flush();
                output.close();
                input.close();

                return "success";
            } catch (Exception e) {
                // Log.e("Error: ", e.getMessage());
            }
            return "Something went wrong";
        }

        protected void onProgressUpdate(String... progress) {
            LoadPressUpdate(progress[0]);
        }

        @Override
        protected void onPostExecute(String message) {
            LoadSuccess(message);
        }
    }

    @ReactMethod
    public void InstallAPK(String filePath) {
        try {

            File apkFile = new File(filePath);
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                Uri apkUri = FileProvider.getUriForFile(getReactApplicationContext(), BuildConfig.APPLICATION_ID + ".fileProvider", apkFile);
                Intent intent = new Intent(Intent.ACTION_INSTALL_PACKAGE);
                intent.setData(apkUri);
                intent.putExtra(Intent.EXTRA_NOT_UNKNOWN_SOURCE, true);
                intent.putExtra(Intent.EXTRA_RETURN_RESULT, true);
                intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                getReactApplicationContext().startActivity(intent);
                // Log.e("DEVK", "startActivity");
                // getReactApplicationContext()
                // .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                // .emit("EMIT_INSTALL_SUCCESS", "");

            } else {
                Uri apkUri = Uri.fromFile(apkFile);
                Intent intent = new Intent(Intent.ACTION_INSTALL_PACKAGE);
                intent.setDataAndType(apkUri, "application/vnd.android.package-archive");
                intent.putExtra(Intent.EXTRA_NOT_UNKNOWN_SOURCE, true);
                intent.putExtra(Intent.EXTRA_RETURN_RESULT, true);
                intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TOP);
                getReactApplicationContext().startActivity(intent);
                // Log.i("DEVK", "startActivity");

//                new android.os.Handler().postDelayed(
//                        new Runnable() {
//                            public void run() {
//                                Log.e("DEVK", "bat dau");
////                                Intent intent1 = new Intent("DEVK");
////                                intent1.putExtra("DEVK", "finsh");
////                                getReactApplicationContext().sendBroadcast(intent1);
//                            }
//                        },
//                        23000);
                // getReactApplicationContext()
                // .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                // .emit("EMIT_INSTALL_SUCCESS", "");
            }
        } catch (Throwable e) {
            Toast.makeText(getReactApplicationContext(), "Cài đặt thất bại：" + e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    @ReactMethod
    public void openPackgeSmartBus() {
        Intent intentOpenPagakes = getReactApplicationContext().getPackageManager().getLaunchIntentForPackage("com.smartbus_app");
        if (intentOpenPagakes!=null) {
            Toast.makeText(getReactApplicationContext(), "openPackgeSmartBus", Toast.LENGTH_SHORT).show();
            getReactApplicationContext().startActivity(intentOpenPagakes);
        }
        else {
            Toast.makeText(getReactApplicationContext(), "Vui lòng cài đặt trước khi mở !!!", Toast.LENGTH_SHORT).show();
        }
    }

    public void LoadPressUpdate(String pagramA) {
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("LOAD_PRESS", pagramA);
    }

    public void LoadSuccess(String params) {
        getReactApplicationContext().getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit("LOAD_SUCCESS", params);
    }

}