import { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const TYPE_COLORS = {
  welcome:                 { bg: 'var(--teal3)',  dot: 'var(--teal2)' },
  contribution_approved:   { bg: 'var(--teal3)',  dot: 'var(--teal2)' },
  contribution_rejected:   { bg: 'var(--terra3)', dot: 'var(--terra2)' },
  achievement:             { bg: 'var(--gold3)',  dot: 'var(--gold2)' },
  system:                  { bg: 'var(--bg3)',    dot: 'var(--muted)' },
  word_liked:              { bg: 'var(--terra3)', dot: 'var(--terra)' },
  comment:                 { bg: 'var(--teal3)',  dot: 'var(--teal)' },
};

function timeAgo(date) {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000);
  if (seconds < 60)    return 'just now';
  if (seconds < 3600)  return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  return `${Math.floor(seconds / 86400)}d ago`;
}

export default function NotificationBell() {
  const { notifications, unreadCount, markAllRead, markRead } = useAuth();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Bell button */}
      <button onClick={() => setOpen(o => !o)}
        style={{
          position: 'relative', width: 36, height: 36, borderRadius: 9,
          border: '1px solid var(--border)', background: open ? 'var(--bg2)' : 'transparent',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all .18s',
        }}>
        {/* Bell icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink2)" strokeWidth="1.8" strokeLinecap="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
        </svg>
        {/* Unread badge */}
        {unreadCount > 0 && (
          <div style={{
            position: 'absolute', top: -4, right: -4,
            width: unreadCount > 9 ? 20 : 16, height: 16,
            borderRadius: 8, background: 'var(--terra)',
            color: '#fff', fontSize: 9, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Outfit,sans-serif',
          }}>
            {unreadCount > 9 ? '9+' : unreadCount}
          </div>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          width: 340, maxHeight: 440, background: '#fff',
          border: '1px solid var(--border)', borderRadius: 16,
          boxShadow: '0 12px 48px rgba(0,0,0,.12)', zIndex: 500,
          display: 'flex', flexDirection: 'column', overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', fontFamily: 'Playfair Display,serif' }}>
              Notifications
              {unreadCount > 0 && (
                <span style={{ marginLeft: 8, padding: '1px 7px', borderRadius: 10, background: 'var(--terra3)', color: 'var(--terra)', fontSize: 11, fontWeight: 700 }}>
                  {unreadCount}
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button onClick={markAllRead}
                style={{ fontSize: 11, color: 'var(--teal)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Outfit,sans-serif' }}>
                Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {notifications.length === 0 ? (
              <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--muted)', fontSize: 13 }}>
                No notifications yet
              </div>
            ) : (
              notifications.map(notif => {
                const colors = TYPE_COLORS[notif.type] || TYPE_COLORS.system;
                return (
                  <div key={notif._id || notif.id}
                    onClick={() => { if (!notif.read) markRead(notif._id || notif.id); }}
                    style={{
                      display: 'flex', gap: 12, padding: '12px 16px',
                      background: notif.read ? 'transparent' : 'rgba(192,57,10,.03)',
                      borderBottom: '1px solid var(--border)', cursor: 'pointer',
                      transition: 'background .15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--bg2)'}
                    onMouseLeave={e => e.currentTarget.style.background = notif.read ? 'transparent' : 'rgba(192,57,10,.03)'}>
                    {/* Dot */}
                    <div style={{ flexShrink: 0, paddingTop: 4 }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: notif.read ? 'var(--bg3)' : colors.dot }} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: notif.read ? 400 : 600, color: 'var(--ink)', marginBottom: 2, lineHeight: 1.35 }}>
                        {notif.title}
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 4 }}>
                        {notif.message}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--muted)' }}>
                        {timeAgo(notif.createdAt)}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
