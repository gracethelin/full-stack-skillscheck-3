INSERT INTO users (
    username,
    user_password
) VALUES (
    ${username},
    ${hash}
)
RETURNING user_id, username;