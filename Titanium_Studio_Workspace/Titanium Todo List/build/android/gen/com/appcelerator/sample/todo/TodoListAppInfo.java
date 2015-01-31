package com.appcelerator.sample.todo;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class TodoListAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";

	public TodoListAppInfo(TiApplication app) {
	}

	public String getDeployType() {
		return "development";
	}

	public String getId() {
		return "com.appcelerator.sample.todo";
	}

	public String getName() {
		return "Todo List";
	}

	public String getVersion() {
		return "1.0";
	}

	public String getPublisher() {
		return "tlukasavage";
	}

	public String getUrl() {
		return "http://appcelerator.com";
	}

	public String getCopyright() {
		return "2011-2014 by tlukasavage";
	}

	public String getDescription() {
		return "not specified";
	}

	public String getIcon() {
		return "appicon.png";
	}

	public boolean isAnalyticsEnabled() {
		return true;
	}

	public String getGUID() {
		return "4b866517-4a54-423b-8836-7387bd8de579";
	}

	public boolean isFullscreen() {
		return false;
	}

	public String getBuildType() {
		return "";
	}
}
