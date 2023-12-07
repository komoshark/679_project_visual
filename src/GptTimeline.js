import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import gpt1 from './images/gpt-3-icon.png';
import gpt2 from './images/gpt2.jpg';
import gpt3 from './images/gpt3-logo.png';
import chatgpt from './images/chatgpt.jpg';
import gpt4 from './images/gpt4.jpg';

const GptTimeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">GPT-1</h3>
                <img src={gpt1} height={60} width={60}/><span> is OpenAI's initial transformer-based language model, designed for generating coherent and contextually relevant text. </span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title" >GPT-2</h3>
                <img src={gpt2} height={60} /><span> features significantly more parameters, leading to improved text generation capabilities and understanding of context.</span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">GPT-3</h3>
                <img src={gpt3} height={60} /><span>is one of the largest and most powerful language models, offering remarkable natural language understanding and generation, with wide applications in AI.</span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">ChatGPT</h3>
                <img src={chatgpt} height={60} /><span>A variant of GPT-3 fine-tuned for conversational responses, ChatGPT excels in generating human-like text in dialogue format.</span>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2023"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">ChatGPT-4</h3><span>Building on its predecessors, GPT-4 is a state-of-the-art language model known for its even larger scale and more refined abilities in text generation and comprehension.</span>
                <img src={gpt4} height={60} />
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default GptTimeline;