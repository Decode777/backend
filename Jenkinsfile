pipeline {
    agent any
    tools {
        nodejs 'nodejs' // Replace with your configured Node.js name
    }
    environment {
        NODEJS_HOME = 'C:/Program Files/nodejs'
        SONAR_SCANNER_PATH = 'C:\\Users\\vaish\\Downloads\\sonar-scanner-cli-6.2.1.4610-windows-x64\\sonar-scanner-6.2.1.4610-windows-x64\\bin'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                bat '''
                    set PATH=%NODEJS_HOME%;%PATH%
                    npm install --include=dev
                '''
            }
        }
stage('Lint') {
    steps {
        // Run linting to ensure code quality
        bat '''
            set PATH=%NODEJS_HOME%;%PATH%
            npm run lint
        '''
    }
}
          stage('Build') {
            steps {
                // Build the React app
                bat '''
                set PATH=%NODEJS_HOME%;%PATH%
                npm run build
                '''
            }
        }
        stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Accessing the SonarQube token stored in Jenkins
            }
            steps {
                bat '''
                    set PATH=%SONAR_SCANNER_PATH%;%PATH%
                    echo "Debug: Verifying SonarQube Scanner Path"
                    where sonar-scanner || echo "SonarQube scanner not found. Please check installation."
                    sonar-scanner -Dsonar.projectKey=backend ^
                        -Dsonar.sources=. ^
                        -Dsonar.host.url=http://localhost:9000 ^
                        -Dsonar.token=%SONAR_TOKEN%
                '''
            }
        }
    }
}
