export function simulatedFetch(input: string): Promise<{
    is_valid: boolean;
    input_str: string;
  }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                is_valid: input.length > 2,
                input_str: input,
              })
        }, 500)
    })
  }