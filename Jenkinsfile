pipeline {

    agent any
    environment {
        BASE_URL = 'https://opensource-demo.orangehrmlive.com'
    }

    stages {

        stage('Environment Check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'git --version'
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npm run test:smoke'
            }
        }
    }
}