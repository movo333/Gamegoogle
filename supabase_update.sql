-- تحديث جدول players لإضافة الحقول الجديدة
ALTER TABLE players 
  ADD COLUMN IF NOT EXISTS all_worlds BOOLEAN DEFAULT false,
  ADD COLUMN IF NOT EXISTS unlocked_worlds TEXT DEFAULT '[]',
  ADD COLUMN IF NOT EXISTS google_uid TEXT;

-- إنشاء Index للبحث السريع
CREATE INDEX IF NOT EXISTS idx_players_google_uid ON players(google_uid);

-- التأكد من وجود كل الحقول
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'players';
