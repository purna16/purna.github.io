import pro1 from "../assets/gitlab.png"
import pro2 from "../assets/ci-cd.png"
import pro3 from "../assets/aws.png"
//local api for the dynamic project cards.
const ProjectCardData = [
    {
        imgsrc: pro1,
        title:"Streamlining Application Deployments with GitLab and Kubernetes.",
        text:"I implemented an end-to-end CI/CD pipeline using GitLab for a Node.js app, ensuring seamless dev to prod deployments. SAST was conducted for proactive security vulnerability identification. Docker images were built and deployed to GitLab Container Registry. Deployments to dev, staging, and prod servers were orchestrated. Dynamic image versioning managed updates across environments. Jest unit test reports were shared via GitLab artifacts. GitLab Runner deployed containers on AWS. Docker Compose managed orchestration. Monorepo, polyrepo, and microservices architectures were successfully deployed for scalability. A reusable pipeline template allowed for replication. Services were deployed on a Kubernetes cluster with GitLab integration. Secure access/permissions were established using service accounts/roles. GitLab user permissions and kubeconfig files enabled CI/CD integration. Achieved streamlined end-to-end CI/CD for build, test, containerize, and deploy, promoting efficient development."

        ,view: "https://gitlab.com/shivar640/node-js/-/edit/main/README.md"
        ,source: "https://gitlab.com/shivar640/node-js"    
    },
    {
        imgsrc: pro2,
        title:"CICD Pipeline for Java Application",
        text:"Developed and implemented CI/CD pipeline with Jenkins for Java app on Kubernetes cluster. Set up Git integration and implemented Git checkout stage. Implemented unit testing using Maven. Added integration testing. Integrated Sonarqube for static code analysis. Configured Jenkins to push built Docker image to Nexus repository. Set up Docker image building stage with unique identifier tagging. Created nexus repository and Pushed Docker image. Implemented manual approval stage for Kubernetes deployment. Created parameterized pipeline for apply/delete options on EKS cluster. Configured Jenkins to deploy Java app on Kubernetes with kubectl apply. Demonstrated ability to work independently and manage end-to-end CI/CD process."
        ,view: "https://github.com/purna16/Jenkins-CICD/blob/main/README.md"
        ,source: "https://github.com/purna16/Jenkins-CICD"    
    },
    {
        imgsrc: pro3,
        title:"Deployed Website on AWS Using Python ",
        text:"Designed and implemented scalable cloud-based solution using AWS for employee management app. Created VPC with 2 public subnets and 1 private subnet for secure data transfer. Configured IGW and NAT Gateway for internet connectivity. Set up route tables and attached IGW and NAT Gateway to subnets for proper traffic routing. Provisioned public EC2 instance for app and private EC2 instance for database. Deployed RDS and DynamoDB for data storage. Configured load balancer and target group for traffic distribution. Set up Route53 hosted zone with custom domain for user-friendly access. Created IAM role for secure access to S3, DynamoDB, and RDS. Cloned app code from GitHub and installed Python on private instance. Tested app functionality via load balancer. Ensured scalability, reliability, and availability using best practices and AWS services. Documented architecture and configuration for future maintenance."
        ,view: "https://github.com/purna16/Voting-Webapp"
        ,source: "https://github.com/purna16/Voting-Webapp"    
    },
];
export default ProjectCardData;
