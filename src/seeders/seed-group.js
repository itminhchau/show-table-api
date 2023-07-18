'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('Groups', [
            {
                group_name: 'Group 1',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                group_name: 'Group 2',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                group_name: 'Group 3',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                group_name: 'Group 4',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                group_name: 'Group 5',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                group_name: 'Group 6',
                requirements: 'JS, HTML, CSS',
                work_start_time: '2023-02-07T08:30:00.000Z',
                work_end_time: '2023-02-07T17:30:00.000Z',
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('Groups', null, {});
    }
};
