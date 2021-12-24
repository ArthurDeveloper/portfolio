import Sketch from 'react-p5';
import p5Type from 'p5';
import ParticleSystem from './ParticleSystem';

export default function Canvas() {

    let particleSystems: Array<ParticleSystem> = [];

    function setup(p5: p5Type, canvasParentRef: Element) {
        particleSystems = [
            new ParticleSystem(130, 640),
            new ParticleSystem(p5.windowWidth - 100, 640),
            new ParticleSystem(p5.windowWidth / 2 + 32, 640),
        ];
        p5.createCanvas(p5.windowWidth, 640).parent(canvasParentRef);
        p5.background(0);
    }

    function update() {
        particleSystems.forEach(particleSystem => particleSystem.update());
    }

    function draw(p5: p5Type) {
        p5.background(0);
        update();

        particleSystems.forEach(particleSystem => particleSystem.draw(p5));
    
        p5.textSize(32);
        p5.textAlign('center');
        p5.fill(255);

        p5.text('Frontend developer', p5.windowWidth / 2, p5.windowHeight / 2 - 80);
        p5.rect(p5.windowWidth / 2 - 300 / 2, p5.windowHeight / 2 - 62, 300, 2);
        p5.text('Backend developer', p5.windowWidth / 2, p5.windowHeight / 2 - 20);
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}