pipeline {

    agent any

    environment {
        BASE_URL = 'https://opensource-demo.orangehrmlive.com'

        ORANGEHRM_CREDENTIALS = credentials('orangehrm-credentials')

        ORANGEHRM_USERNAME = "${ORANGEHRM_CREDENTIALS_USR}"
        ORANGEHRM_PASSWORD = "${ORANGEHRM_CREDENTIALS_PSW}"
    }

    stages {

        stage('Environment Check') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'git --version'

                bat 'if defined ORANGEHRM_USERNAME (echo Username configured) else (echo Username missing)'
                bat 'if defined ORANGEHRM_PASSWORD (echo Password configured) else (echo Password missing)'
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