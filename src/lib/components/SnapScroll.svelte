<script lang="ts">
  function snapScroll(node: any) {
    const children = [...node.children];
    children.forEach((child) => {
      const snap_child = document.createElement('div');
      snap_child.className +=
        'snap-center flex flex-col justify-center items-center w-full h-screen p-5';
      node.replaceChild(snap_child, child);
      snap_child.appendChild(child);
    });

    return {
      destroy() {}
    };
  }
</script>

<div class="snap-y snap-mandatory overflow-y-scroll h-screen" use:snapScroll>
  <slot />
</div>
