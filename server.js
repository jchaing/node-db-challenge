const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Welcome to Projects DB!</h1>');
});

server.get('/api/projects', (req, res) => {
  db('project')
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to get projects', err });
    });
});

server.post('/api/projects', (req, res) => {
  const projectData = req.body;

  db('project')
    .insert(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Failed to post project', err });
    });
});

server.get('/api/resources', (req, res) => {
  db('resource')
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: 'failed to get resources', err });
    });
});

server.post('/api/resources', (req, res) => {
  const resourceData = req.body;

  db('resource')
    .insert(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to post resource', err });
    });
});

server.get('/api/tasks', (req, res) => {
  db('task as t')
    .leftJoin('project as p', 'p.id', 't.project_id')
    .select('t.*', 'p.name as proj_name', 'p.description as proj_description')
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to get tasks', err });
    });
});

server.post('/api/tasks', (req, res) => {
  const taskData = req.body;

  db('task')
    .insert(taskData)
    .then(added => {
      res.status(201).json(added);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to post task', err });
    });
});

module.exports = server;
