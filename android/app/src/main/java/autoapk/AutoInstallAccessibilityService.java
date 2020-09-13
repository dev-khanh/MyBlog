package autoapk;

import android.accessibilityservice.AccessibilityService;
import android.accessibilityservice.AccessibilityServiceInfo;
import android.content.pm.PackageInfo;
import android.os.Build;
import android.view.accessibility.AccessibilityEvent;
import android.view.accessibility.AccessibilityNodeInfo;
import android.widget.Toast;

import androidx.annotation.RequiresApi;

import java.net.Socket;
import java.util.ArrayList;
import java.util.List;

public class AutoInstallAccessibilityService extends AccessibilityService {
    public static List<String> packageList = new ArrayList<>();
    public static String[] installBtnId = new String[]{
            "vivo:id/vivo_adb_install_ok_button", "com.android.packageinstaller:id/ok_button"
    };
    @Override
    protected void onServiceConnected() {
        super.onServiceConnected();
        AccessibilityServiceInfo mAccessibilityServiceInfo = new AccessibilityServiceInfo();
        mAccessibilityServiceInfo.eventTypes = AccessibilityEvent.TYPES_ALL_MASK;
        mAccessibilityServiceInfo.feedbackType = AccessibilityServiceInfo.FEEDBACK_SPOKEN;
        List<PackageInfo> list = getPackageManager().getInstalledPackages(0);
        for (PackageInfo info : list) {
            packageList.add(info.packageName);
        }
        mAccessibilityServiceInfo.packageNames = packageList.toArray(new String[]{});
        setServiceInfo(mAccessibilityServiceInfo);
    }
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR2)
    @Override
    public void onAccessibilityEvent(AccessibilityEvent event) {
        int eventType = event.getEventType();
        switch (eventType) {
            case AccessibilityEvent.TYPE_WINDOW_CONTENT_CHANGED:
            case AccessibilityEvent.TYPE_WINDOW_STATE_CHANGED:
            case AccessibilityEvent.TYPE_NOTIFICATION_STATE_CHANGED:
                for (String id : installBtnId) {
                    AccessibilityNodeInfo node = findNodeById(event.getSource(), id);
                    if (node != null) {
                        click(node);
                        // Toast.makeText(this, "Cài đặt thành công", Toast.LENGTH_SHORT).show();
                        break;
                    }
                }
                break;
            default:
                break;
        }
    }
    @Override
    public void onInterrupt() {}
    public static void click(AccessibilityNodeInfo node) {
        node.performAction(AccessibilityNodeInfo.ACTION_CLICK);
    }
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN_MR2)
    public static AccessibilityNodeInfo findNodeById(AccessibilityNodeInfo nodeInfo, String viewId) {
        if (nodeInfo == null || viewId == null) {
            return null;
        }
        List<AccessibilityNodeInfo> list = nodeInfo.findAccessibilityNodeInfosByViewId(viewId);
        if (list != null && list.size() > 0) {
            return list.get(0);
        }
        return null;
    }
}