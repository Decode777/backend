pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Replace with your configured Node.js name 
    }
    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Decode777/backend.git' 
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
    }
}
