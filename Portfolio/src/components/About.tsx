import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern patterns."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and search engine visibility."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with cross-functional teams to deliver outstanding results."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with over 2 years of experience building 
            scalable web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
       I started my career as a web developer, learning HTML, CSS, JavaScript , React JS and Next JS. Over time, I mastered backend technologies like Node.js and MongoDB, and now I work as a full-stack developer, building complete web applications and leading projects with confidence.


            </p>
            <p className="text-muted-foreground mb-6">
             I believe in continuous learning and keeping up with the latest technologies. When I’m not coding, I enjoy contributing to open-source projects and mentoring junior developers.

            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Core Technologies</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'JavaScript', 'React/Next.js', 'Node.js/Express', 
                  'Python', 'MongoDB', 'AWS/Docker'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-card border border-border rounded-lg p-6 card-hover"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '100%', label: 'Satisfaction Rate' }
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;