<script lang="ts">
  function snapScroll(node: any) {
    const children = [...node.children];
    children.forEach((child) => {
      const snap_child = document.createElement('div');
      snap_child.className +=
        ' mx-auto snap-center flex flex-col justify-center items-center w-full max-w-4xl h-[95vh] p-5';
      node.replaceChild(snap_child, child);
      snap_child.appendChild(child);
    });

    return {
      destroy() {}
    };
  }
</script>

<div class="snap-y snap-mandatory overflow-y-scroll h-[95vh]" use:snapScroll>
  <slot />
</div>
