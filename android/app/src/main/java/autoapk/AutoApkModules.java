package autoapk;
import android.content.Intent;
import android.widget.Toast;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import javax.annotation.Nonnull;
public class AutoApkModules extends ReactContextBaseJavaModule  {
    public AutoApkModules(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Nonnull
    @Override
    public String getName() {
        return "AutoApkModules";
    }

    @ReactMethod
    public void InstallAPK() {
        try {
            DownloadController down = new DownloadController(getReactApplicationContext());
            down.enqueueDownload();
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
}