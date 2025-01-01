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
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Decode777/backend.git' 
            }
        }
    stage('Install Dependencies') {
    steps {
        // Set the PATH and install dependencies using npm
        bat '''
            set PATH=%NODEJS_HOME%;%PATH%
            npm install
        '''
    }
}
            stage('SonarQube Analysis') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // Accessing the SonarQube token stored in Jenkins 
            }
            steps {
                // Ensure that sonar-scanner is in the PATH
                bat '''
                set PATH=%SONAR_SCANNER_PATH%;%PATH%
                where sonar-scanner || echo "SonarQube scanner not found. Please install it."
                sonar-scanner -Dsonar.projectKey=backend ^
                    -Dsonar.sources=. ^
                    -Dsonar.host.url=http://localhost:9000 ^
                    -Dsonar.token=sqp_502d6744cad8059bc34200924fe2f9c4d1d2e731
                '''
            }
        }
    }
}
