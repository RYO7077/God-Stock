// Service Worker 登録スクリプト
// このファイルを index.html と同じフォルダに置いてください
// <script src="sw-register.js"></script> で読み込みます

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // ローカル環境（file:// / localhost）のみ登録
    var proto = location.protocol;
    var host  = location.hostname;
    var isLocal = proto === 'file:'
               || host === 'localhost'
               || host === '127.0.0.1'
               || host === '';
    if (!isLocal) return; // プレビュー・外部ホストでは登録しない

    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg) { console.log('SW registered:', reg.scope); })
      .catch(function(err) { console.warn('SW skipped:', err.message); });
  });
}
