-- Insert sample cognitive exercises
INSERT INTO cognitive_exercises (title, description, category, difficulty_level, duration_minutes, instructions) VALUES
('5-4-3-2-1 Grounding Technique', 'A simple grounding exercise to help manage anxiety and panic', 'grounding', 'beginner', 5, 
 '["Notice 5 things you can see", "Notice 4 things you can touch", "Notice 3 things you can hear", "Notice 2 things you can smell", "Notice 1 thing you can taste"]'),

('Box Breathing', 'A breathing technique to reduce stress and improve focus', 'breathing', 'beginner', 10,
 '["Inhale for 4 counts", "Hold for 4 counts", "Exhale for 4 counts", "Hold for 4 counts", "Repeat for 10 cycles"]'),

('Gratitude Reflection', 'Daily practice to improve mood and perspective', 'gratitude', 'beginner', 15,
 '["Think of 3 things you are grateful for today", "Write them down with specific details", "Reflect on why each one matters to you", "Notice how this makes you feel"]'),

('Thought Challenging', 'CBT technique to examine and reframe negative thoughts', 'cbt', 'intermediate', 20,
 '["Identify the negative thought", "What evidence supports this thought?", "What evidence contradicts it?", "What would you tell a friend in this situation?", "Create a more balanced thought"]'),

('Body Scan Meditation', 'Mindfulness practice to increase body awareness and relaxation', 'mindfulness', 'intermediate', 25,
 '["Lie down comfortably", "Start at the top of your head", "Slowly scan down through each body part", "Notice sensations without judgment", "End at your toes"]');

-- Insert sample therapist (for demo purposes)
INSERT INTO users (email, password_hash, first_name, last_name, user_type) VALUES
('dr.smith@mindbridge.com', '$2b$10$example_hash', 'Sarah', 'Smith', 'therapist');

SET @therapist_user_id = (SELECT id FROM users WHERE email = 'dr.smith@mindbridge.com');

INSERT INTO user_profiles (user_id, bio, timezone) VALUES
(@therapist_user_id, 'Licensed clinical psychologist specializing in anxiety and depression treatment', 'America/New_York');

INSERT INTO therapists (user_id, license_number, license_state, specializations, years_experience, education, approach_description, hourly_rate, is_verified) VALUES
(@therapist_user_id, 'PSY12345', 'NY', '["Anxiety Disorders", "Depression", "Trauma", "CBT"]', 8, 'PhD in Clinical Psychology, Columbia University', 'I use evidence-based approaches including CBT and mindfulness to help clients develop coping strategies and achieve their mental health goals.', 150.00, TRUE);
