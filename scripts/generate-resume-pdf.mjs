import fs from 'fs';
import path from 'path';

const resumeText = `VRAJ PATEL\nScottsdale, AZ 85260 — (469) 245-7484 — vrajpatel1995@gmail.com\nLinkedIn: linkedin.com/in/vrajpatell0712 — GitHub: github.com/vrajpatell\n\nPROFESSIONAL SUMMARY\nAI Software Engineer with 5+ years of experience designing and deploying scalable distributed systems and Gen AI/NLP\nsolutions in cloud-native environments. Proven expertise architecting high-availability microservices, optimizing ML and\nspeech-to-text pipelines, and automating data-driven products for enterprise-scale media and healthcare clients. Strong\ncommunicator and collaborator, skilled in leading teams and mentoring engineers in SDLC best practices and system\ndesign.\n\nCORE SKILLS\n• Programming: Python, Java, C++, TypeScript, JavaScript\n• AI/ML: Gen AI, LLMs (OpenAI, Azure OpenAI), NLP, Speech-to-Text, TensorFlow, PyTorch, Azure Custom Vision,\nForm Recognizer\n• Cloud: AWS, Azure, GCP\n• Distributed Systems: Microservices, Kafka, Docker, Kubernetes, Event-Driven Architectures\n• Data: MongoDB, BigQuery, Azure SQL, DynamoDB\n• DevOps: CI/CD, GitLab, Docker, Test Automation, Monitoring/Logging\n• Other: System Design, Code Reviews, Agile, TDD, Product Management, Effective Communication, Leadership\n\nWORK EXPERIENCE\nAI Software Engineer— CVS Health, Scottsdale, AZ Aug 2023 – Present\n• Architected and deployed distributed, containerized microservices for document transformation and speech-to-text,\nleveraging Gen AI and advanced NLP in Python and cloud-native stacks (Azure, GCP, AWS).\n• Built scalable streaming pipelines using Apache Kafka for real-time data ingestion and Google Cloud Storage for persistent,\nhigh-throughput file processing.\n• Enhanced unstructured data extraction using composite AI/ML models (entity recognition, text classification, LLMs),\nimproving recognition accuracy by 25%.\n• Spearheaded the design of high-performance synchronous APIs (Azure Durable Functions) for data extraction, optimizing\nthroughput and reliability.\n• Automated CI/CD pipelines and testing frameworks for robust SDLC, reducing manual deployments and errors.\n• Mentored junior engineers on distributed system design, code quality, and best practices in Python, cloud infrastructure,\nand containerization.\n• Maintained comprehensive observability with logging, monitoring, and robust error-handling for mission-critical services.\n• Reduced client onboarding time from 30 minutes to seconds with a fully automated Python/Docker solution.\n• Led migration from relational to NoSQL (MongoDB) for high-throughput, large-scale document processing.\n\nSoftware Engineer— Warner Bros Discovery, Seattle,WA Oct 2021 – Jun 2023\n• Led a large-scale content migration project using API Gateway, Terraform, Kubernetes, and AWS Lambda, transitioning\n over 1 million content IDs to DynamoDB and reducing operational overhead by 25%.\n• Orchestrated global partner integrations with Google, Apple, Roku, and Amazon—expanding HBOMax coverage to 21\n European countries and contributing to a 15.4% growth with 8 million new users.\n• Developed comprehensive Grafana dashboards to provide real-time insights into system performance, enabling proactive\n incident management and ensuring high platform reliability.\n• Enhanced incident response by integrating Splunk VictorOps, streamlining operations and maintaining consistent uptime\n in the content delivery ecosystem.\n• Streamlined CI/CD processes by leading the creation of automated deployment pipelines via GitHub Actions, increasing\n production consistency and deployment speed.\n• Optimized metadata feed delivery by reducing processing time by 20% using AWS Cognito and S3, thereby improving\n data flow for global partners.\n• Developed event-driven metadata processing for streaming partners, improving data flow efficiency by 20%.\n• Designed real-time dashboards with Grafana for global monitoring of production systems supporting millions of users.\n• Implemented gRPC server code for resilient, asynchronous data communication in distributed environments.\n• Demonstrated cross-platform expertise in both Windows and Linux system administration to ensure robust, high-performance\n applications.\n• Conducted peer code reviews, mentored new team members, and facilitated knowledge-sharing sessions on cloud and\n microservices best practices.\n\nSoftware Development Engineer— Slalom, Seattle,WA Mar 2021 – Oct 2021\n• Improved distributed analytics pipelines using AWS Lambda, DynamoDB, Kafka, and Elasticsearch, boosting project\n efficiency and throughput.\n• Built automation frameworks and contributed to rapid prototyping, test automation, and SDLC streamlining for product\n teams.\n\nEDUCATION\nMaster of Computer Science\nOklahoma Christian University, Jan 2020 – Dec 2020 GPA: 4.0\nMaster of Computer Science\nThe University of Texas, Aug 2018 – Dec 2019 GPA: 3.5`;

const outDir = path.join(process.cwd(), 'public');
const outFile = path.join(outDir, 'Vraj_Patel_Resume.pdf');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

try {
  // Lazy import to avoid bundling issues
  const PDFDocument = (await import('pdfkit')).default;
  const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
  const stream = fs.createWriteStream(outFile);
  doc.pipe(stream);

  doc.font('Times-Roman').fontSize(18).text('VRAJ PATEL', { align: 'left' });
  doc.moveDown(0.5);
  doc.fontSize(11).text('Scottsdale, AZ 85260 — (469) 245-7484 — vrajpatel1995@gmail.com');
  doc.text('LinkedIn: linkedin.com/in/vrajpatell0712 — GitHub: github.com/vrajpatell');
  doc.moveDown(1);

  const sections = resumeText.split('\n\n');
  for (const section of sections.slice(2)) {
    const [heading, ...body] = section.split('\n');
    if (heading && heading.trim()) {
      doc.moveDown(0.8);
      doc.font('Times-Bold').fontSize(13).text(heading.trim());
    }
    const text = body.join('\n');
    if (text.trim()) {
      doc.moveDown(0.2);
      doc.font('Times-Roman').fontSize(11).text(text.trim(), { align: 'left' });
    }
  }

  doc.end();
  await new Promise((resolve) => stream.on('finish', resolve));
  console.log(`Generated ${outFile}`);
} catch (err) {
  console.error('Failed to generate resume PDF:', err);
  // Fallback: write plain text placeholder as a PDF-like file already exists in repo;
  // do nothing to avoid breaking builds.
}


