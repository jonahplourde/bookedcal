import React, { useEffect, useState } from 'react';

export default function CalEmbed({ namespace = 'pilot-discovery', calLink = 'bookedcal/pilot-discovery', minHeight = 600 }) {
  const [CalComp, setCalComp] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const mod = await import('@calcom/embed-react');
        if (!mounted) return;
        // default export is the Cal component
        setCalComp(() => mod.default);

        // if getCalApi exists, try to configure the UI
        if (mod.getCalApi) {
          try {
            const api = await mod.getCalApi({ namespace });
            if (api) {
              api('ui', {
                theme: 'light',
                cssVarsPerTheme: { light: { 'cal-brand': '#6366f1' }, dark: { 'cal-brand': '#6366f1' } },
                hideEventTypeDetails: false,
                layout: 'month_view'
              });
            }
          } catch (e) {
            // ignore configure errors
          }
        }
      } catch (err) {
        // dynamic import failed (package not installed or blocked)
        setLoadError(true);
      }
    })();

    return () => { mounted = false; };
  }, [namespace]);

  if (CalComp) {
    const Cal = CalComp;
    return (
      <div style={{ width: '100%', minHeight: `${minHeight}px`, overflow: 'auto' }}>
        <Cal namespace={namespace} calLink={calLink} style={{ width: '100%', height: '100%' }} config={{ layout: 'month_view', theme: 'light' }} />
      </div>
    );
  }

  // Fallback: iframe embed
  return (
    <div style={{ width: '100%', minHeight: `${minHeight}px`, overflow: 'auto' }}>
      {loadError && (
        <div className="text-sm text-center text-gray-500 mb-4">Cal.com React package not found — using iframe fallback.</div>
      )}
      <iframe
        title="Schedule a meeting"
        src={`https://cal.com/embed/${calLink}?layout=month_view`}
        style={{ width: '100%', height: `${minHeight}px`, border: 0 }}
        loading="lazy"
        allow="microphone; camera; clipboard-write; geolocation"
      />
      <div className="mt-3 text-xs text-center text-gray-600">
        If the scheduler fails to load, <a href={`https://cal.com/${calLink}`} target="_blank" rel="noreferrer" className="text-highlight underline">open it in a new tab</a>.
      </div>
    </div>
  );
}
