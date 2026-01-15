-- Create a function to count deleted users from auth.users table
-- Run this in Supabase SQL Editor

CREATE OR REPLACE FUNCTION get_deleted_users_count()
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  deleted_count INTEGER;
BEGIN
  SELECT COUNT(*)
  INTO deleted_count
  FROM auth.users
  WHERE deleted_at IS NOT NULL;
  
  RETURN deleted_count;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_deleted_users_count() TO authenticated;

-- Optional: Also grant to anon if needed
GRANT EXECUTE ON FUNCTION get_deleted_users_count() TO anon;