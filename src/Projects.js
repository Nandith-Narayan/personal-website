import "./Projects.css";

function Projects(){

    return (
        <div className="project-container">
            <div className="project-card">
                <h3>Game Boy Emulator</h3>
                <p>
                    <img src="GBEmulatorProject.png" alt="project"/>
                    Over winter break, I wrote an emulator to play the original Game Boy games. It fetches machine instructions byte by byte from a ROM file, decodes them, and executes them.
                    My emulator consists of four main components namely: the CPU(Central Processing Unit), the PPU(Pixel Processing Unit), the APU(Audio Processing Unit) and, the memory.
                    The 8-bit CPU is a modified z80 chip which has 500 instructions and contains 8 8-bit registers, a stack pointer, and a program counter.
                    Even though the Game Boy memory bus was only 16-bits wide, games could address upto 8MB of memory by switching out sections of memory.
                    This is called Memory Banking and is handled by a Memory Bank Controller circuit located in the game's cartridge.
                    The PPU and APU handle the graphics and audio functionalities of the Game Boy respectively.
                    To make this emulator, I had to individually emulate each of these components and integrate them together.
                </p>
            </div>
            <div className="project-card">
                <h3>Super Mario World A.I.</h3>
                <p>
                    <img src="MarioAIProject.png" alt="project"/>
                    For my Neural Networks class project, I trained a Neural Network to autonomously play Super Mario World.
                    One of the most crucial things a Neural Network needs is <strong><em>data</em></strong>.
                    There are many ways to produce data for a Neural Network however, I decided to automate this task.
                    So, I created a Neural Network that would create data for the main Neural Network.
                    Now you might be thinking, "but how would you get data for the second Neural Network?".
                    The solution to this problem was to write a Genetic Algorithm to train this secondary network.
                    I wrote a special reward function which the Genetic Algorithm used to evaluate the performance of any given agent.
                    After each generation, the weights of the best agents where mixed together along with a bit of mutation.
                    This produced an agent that could complete individual levels of Super Mario World, but couldn't generalize between levels.
                    I then recorded the actions that these agents were performing and used it as input data to my main network.
                    This allowed the main network to learn to generalize and play multiple levels.
                </p>
            </div>
        </div>
    );
}

export default Projects;