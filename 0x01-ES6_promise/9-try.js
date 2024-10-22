export default function guardrail(mathFunction) {
  /* Create the queue array */
  const queue = [];

  try {
    // Call the mathFunction and push its result to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
