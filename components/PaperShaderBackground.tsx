import React from 'react';
import { GrainGradient } from '@paper-design/shaders-react';

export const PaperShaderBackground = React.memo(() => {
    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" style={{ contain: 'paint' }}>
            <GrainGradient
                width="100%"
                height="100%"
                colors={["#ff9d00", "#beae60", "#d7cbc6"]}
                colorBack="#2a2f32a8"
                softness={0.54}
                intensity={0.19}
                noise={0.14}
                shape="wave"
                speed={0.25}
                scale={1.6}
                offsetY={0.62}
                fit="cover"
                minPixelRatio={1}
            />
        </div>
    );
});

PaperShaderBackground.displayName = 'PaperShaderBackground';
