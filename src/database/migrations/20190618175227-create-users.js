'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allownull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allownull: false,
        type: Sequelize.STRING
      },
      email: {
        allownull: false,
        unique: true,
        type: Sequelize.STRING
      },
      avatar: {
        allownull: false,
        type: Sequelize.STRING
      },
      password_hash: {
        allownull: false,
        type: Sequelize.STRING
      },
      provider: {
        allownull: false,
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allownull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allownull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users')
  }
}
