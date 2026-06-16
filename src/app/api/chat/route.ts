export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const lastMessage =
      messages[messages.length - 1];

    const userMessage =
      lastMessage.content.toLowerCase();

    let response =
      "Shubham is a Full Stack Developer skilled in Next.js, React, Spring Boot, Node.js, MongoDB, PostgreSQL, and scalable backend engineering.";

    // PROJECTS
    if (
      userMessage.includes("project") ||
      userMessage.includes("build")
    ) {
      response =
        "Shubham has built projects like Linkly URL Shortener, Social Media App, and a Hotel Rating Microservices System using Spring Boot, React, Node.js, and MongoDB.";
    }

    // BACKEND
    else if (
      userMessage.includes("backend") ||
      userMessage.includes("spring")
    ) {
      response =
        "Shubham has backend experience with Spring Boot, Express.js, REST APIs, JWT authentication, Microservices, MySQL, MongoDB, PostgreSQL, and Docker.";
    }

    // SKILLS
    else if (
      userMessage.includes("skill") ||
      userMessage.includes("tech")
    ) {
      response =
        "Shubham works with Next.js, React, TypeScript, Spring Boot, Node.js, MongoDB, PostgreSQL, Docker, Tailwind CSS, and Microservices.";
    }

    // EXPERIENCE
    else if (
      userMessage.includes("experience") ||
      userMessage.includes("internship")
    ) {
      response =
        "Shubham is currently focused on full-stack development, backend engineering, system design fundamentals, and internship opportunities.";
    }

    // ACHIEVEMENTS
    else if (
      userMessage.includes("achievement") ||
      userMessage.includes("dsa") ||
      userMessage.includes("sih")
    ) {
      response =
        "Shubham solved 250+ DSA problems, became SIH 2024 Finalist, and served as Campus Ambassador for PW, TUF, and E-Cell IIT Bombay.";
    }

    // CONTACT
    else if (
      userMessage.includes("contact") ||
      userMessage.includes("email")
    ) {
      response =
        "You can contact Shubham via email at shubham27034@gmail.com or connect through LinkedIn and GitHub.";
    }

    return Response.json({
      role: "assistant",
      content: response,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}