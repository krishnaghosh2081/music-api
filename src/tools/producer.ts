import { Kafka } from 'kafkajs';

const broker = process.env.KAFKA_BROKER || '' ;
// Create Kafka instance
const kafka = new Kafka({
  clientId: 'stem-analyze',
  brokers: [broker],
});
// Create producer
const producer = kafka.producer();
const sendMessage = async (msg:string) => {
  try {
    await producer.connect();
    console.log("Producer connected");
    await producer.send({
      topic: 'my-topic',
      messages: [
        { value: msg },
      ],
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  } finally {
    await producer.disconnect();
  }
};
//sendMessage();

export default sendMessage;