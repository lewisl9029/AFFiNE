import { setupGlobal } from '@affine/env/global';
window.process = {
  env: {},
};
window.runtimeConfig = {
  enableTestProperties: !1,
  enableBroadcastChannelProvider: !0,
  enableDebugPage: !0,
  changelogUrl: 'https://affine.pro/what-is-new',
  downloadUrl: 'https://affine.pro/download',
  imageProxyUrl: 'https://app.affine.pro/api/worker/image-proxy',
  enablePreloading: !0,
  enableNewSettingModal: !0,
  enableNewSettingUnstableApi: !1,
  enableSQLiteProvider: !0,
  enableMoveDatabase: !1,
  enableNotificationCenter: !0,
  enableCloud: !0,
  enableCaptcha: !0,
  enableEnhanceShareMode: !1,
  enablePayment: !0,
  enablePageHistory: !0,
  enableCopilot: !1,
  serverUrlPrefix: 'https://app.affine.pro',
  editorFlags: {
    enable_expand_database_block: !1,
    enable_bultin_ledits: !1,
  },
  appVersion: '0.11.0-nightly-202402161407-aa73e53',
  editorVersion: '0.12.0-nightly-202401120404-4219e86',
  appBuildType: 'stable',
};
setupGlobal();
