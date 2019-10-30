pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
          sh 'npm install'
          sh 'npm run build'
      }
    }
    stage('Deploy') {
      when {
        branch "master"
      }
      steps {
          sh 'rm -rf /var/www/hellocon/public_html/*'
          sh 'cp -r build/* /var/www/hellocon/public_html/'
      }
    }
  }
}
