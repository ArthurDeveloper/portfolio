import p5Type from 'p5';

type Particle = {
    x: number,
    y: number,
    color: [number, number, number, number],
    ySpeed: number,
    update(): void
};

class ParticleSystem {
    particles: Array<Particle>;
    particleTax: number;
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.particles = new Array<Particle>();
        this.particleTax = 200;
    }

    update() {
        setTimeout(() => {
            const minX = this.x - 60;
            const maxX = this.x;

            const particleSystemY = this.y;

            this.particles.push({
                x: Math.floor(Math.random() * (maxX - minX - 10)) + minX,
                y: particleSystemY,
                color: [
                    Math.floor(Math.random() * (110 - 21)) + 21, 
                    Math.floor(Math.random() * (110 - 55)) + 55,
                    Math.floor(Math.random() * (128 - 5)) + 5,
                    128
                ],
                ySpeed: Math.round(Math.random()) * 2 - 12,
                update() {
                    this.y += this.ySpeed;
                }
            });
        }, 1000/this.particleTax);

        this.particles.forEach(particle => {
            particle.update();
            if (particle.y < 0) {
                this.particles.splice(
                    this.particles.indexOf(particle), 1
                );
            }
        });
    }

    draw(p5: p5Type) {
        this.particles.forEach(particle => {
            p5.fill(p5.color(...particle.color));
            p5.noStroke();
            p5.circle(particle.x, particle.y, 64);
        });
    }
}

export default ParticleSystem;