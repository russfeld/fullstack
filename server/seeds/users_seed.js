/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Get current date
  const now = new Date().toISOString().slice(0, 19).replace('T', ' ')

  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      username: 'admin',
      passhash: '$2y$10$41NXCocgYzuOGgOB4aL1M.wg7mZT.P6NY9D9EbfdKu8xbHU8x0b3O',
      name: "Administrator",
      email: "admin@local.local",
      created_at: now,
      updated_at: now,
    },
    {
      id: 2,
      username: 'user',
      passhash: '$2y$10$41NXCocgYzuOGgOB4aL1M.wg7mZT.P6NY9D9EbfdKu8xbHU8x0b3O',
      name: "User",
      email: "user@local.local",
      created_at: now,
      updated_at: now,
    }
  ]);
};
